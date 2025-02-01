package authcontroller

import (
	"encoding/json"
	"net/http"
	"time"

	"github.com/golang-jwt/jwt/v4"
	"github.com/lek34/E-COM/config"
	"github.com/lek34/E-COM/helper"
	"github.com/lek34/E-COM/models"
	"golang.org/x/crypto/bcrypt"
	"gorm.io/gorm"
)

func Login(w http.ResponseWriter, r *http.Request) {
	var userInput models.User
	decoder := json.NewDecoder(r.Body)
	if err := decoder.Decode(&userInput); err != nil {
		response := map[string]string{"error": "true", "message": err.Error()}
		helper.ResponseJSON(w, http.StatusBadRequest, response)
		return
	}
	defer r.Body.Close()

	var user models.User
	if err := models.DB.Where("email = ?", userInput.Email).First(&user).Error; err != nil {
		switch err {
		case gorm.ErrRecordNotFound:
			response := map[string]string{"error": "true", "message": "email atau password salah"}
			helper.ResponseJSON(w, http.StatusUnauthorized, response)
			return
		default:
			response := map[string]string{"error": "true", "message": err.Error()}
			helper.ResponseJSON(w, http.StatusInternalServerError, response)
			return
		}

	}
	if err := bcrypt.CompareHashAndPassword([]byte(user.Password), []byte(userInput.Password)); err != nil {
		response := map[string]string{"error": "true", "message": "email atau password salah"}
		helper.ResponseJSON(w, http.StatusUnauthorized, response)
		return
	}
	expTime := time.Now().Add(time.Hour * 24 * 365 * 100)
	claims := &config.JWTClaim{
		Username: user.Username,
		RegisteredClaims: jwt.RegisteredClaims{
			Issuer:    "lekianto",
			ExpiresAt: jwt.NewNumericDate(expTime),
		},
	}
	tokenAlgo := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
	token, err := tokenAlgo.SignedString(config.JWT_KEY)
	if err != nil {
		response := map[string]interface{}{
			"status":  http.StatusInternalServerError,
			"error":   true,
			"message": err.Error(),
		}
		helper.ResponseJSON(w, http.StatusInternalServerError, response)
		return
	}
	http.SetCookie(w, &http.Cookie{
		Name:  "token",
		Path:  "/",
		Value: token,
	})
	response := map[string]interface{}{
		"status":  http.StatusOK,
		"error":   false,
		"message": "success",
		"token":   token,
	}
	helper.ResponseJSON(w, http.StatusOK, response)
}

func Register(w http.ResponseWriter, r *http.Request) {

	var userInput models.User
	decoder := json.NewDecoder(r.Body)
	if err := decoder.Decode(&userInput); err != nil {
		response := map[string]string{"error": "true", "message": err.Error()}
		helper.ResponseJSON(w, http.StatusBadRequest, response)
		return
	}

	defer r.Body.Close()

	hashPassword, _ := bcrypt.GenerateFromPassword([]byte(userInput.Password), bcrypt.DefaultCost)
	userInput.Password = string(hashPassword)

	if err := models.DB.Create(&userInput).Error; err != nil {
		response := map[string]interface{}{
			"status":  http.StatusInternalServerError,
			"error":   true,
			"message": err.Error(),
		}
		helper.ResponseJSON(w, http.StatusInternalServerError, response)
		return
	}

	response := map[string]interface{}{
		"status":  http.StatusOK,
		"error":   false,
		"message": "success",
	}
	helper.ResponseJSON(w, http.StatusOK, response)
}

func Logout(w http.ResponseWriter, r *http.Request) {
	http.SetCookie(w, &http.Cookie{
		Name:     "Token",
		Path:     "/",
		Value:    "",
		HttpOnly: true,
		MaxAge:   -1,
	})
	response := map[string]interface{}{
		"status":  http.StatusOK,
		"error":   false,
		"message": "success",
	}
	helper.ResponseJSON(w, http.StatusOK, response)
}

func GetUserData(w http.ResponseWriter, r *http.Request) {
	// Get the token from the Authorization header
	tokenString := r.Header.Get("Authorization")

	// Check if token exists
	if tokenString == "" {
		response := map[string]string{"error": "true", "message": "Token missing"}
		helper.ResponseJSON(w, http.StatusUnauthorized, response)
		return
	}

	// Remove "Bearer " prefix if present
	if len(tokenString) > 7 && tokenString[:7] == "Bearer " {
		tokenString = tokenString[7:]
	}

	// Parse token
	token, err := jwt.ParseWithClaims(tokenString, &config.JWTClaim{}, func(token *jwt.Token) (interface{}, error) {
		return config.JWT_KEY, nil
	})

	if err != nil {
		response := map[string]string{"error": "true", "message": "Invalid token"}
		helper.ResponseJSON(w, http.StatusUnauthorized, response)
		return
	}

	// Extract claims
	claims, ok := token.Claims.(*config.JWTClaim)
	if !ok || !token.Valid {
		response := map[string]string{"error": "true", "message": "Invalid token claims"}
		helper.ResponseJSON(w, http.StatusUnauthorized, response)
		return
	}

	// Fetch user from database
	var user models.User
	if err := models.DB.Where("username = ?", claims.Username).First(&user).Error; err != nil {
		if err == gorm.ErrRecordNotFound {
			response := map[string]string{"error": "true", "message": "User not found"}
			helper.ResponseJSON(w, http.StatusNotFound, response)
			return
		}
		response := map[string]string{"error": "true", "message": err.Error()}
		helper.ResponseJSON(w, http.StatusInternalServerError, response)
		return
	}

	// Return user data
	response := map[string]interface{}{
		"status": http.StatusOK,
		"error":  false,
		"data": map[string]interface{}{
			"id":       user.Id,
			"username": user.Username,
			"email":    user.Email,
		},
	}
	helper.ResponseJSON(w, http.StatusOK, response)
}
