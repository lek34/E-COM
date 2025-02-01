package main

import (
	"fmt"
	"log"
	"net/http"
	"os"
	"strings"

	"github.com/gorilla/mux"
	"github.com/joho/godotenv"
	"github.com/lek34/E-COM/controllers/authcontroller"
	"github.com/lek34/E-COM/middlewares"
	"github.com/lek34/E-COM/models"
	"github.com/rs/cors"
)

func main() {
	err := godotenv.Load(".env")
	if err != nil {
		panic(err)
	}

	models.ConnectDatabase()
	r := mux.NewRouter()

	frontendOrigins := strings.Split(os.Getenv("FRONTEND_URL"), ",")

	// Konfigurasi CORS
	c := cors.New(cors.Options{
		AllowedOrigins:   frontendOrigins,
		AllowedMethods:   []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
		AllowedHeaders:   []string{"Content-Type", "Authorization"},
		AllowCredentials: true,
	})

	// Login & Register
	r.HandleFunc("/login", authcontroller.Login).Methods("POST")
	r.HandleFunc("/register", authcontroller.Register).Methods("POST")
	r.HandleFunc("/logout", authcontroller.Logout).Methods("GET")
	r.HandleFunc("/user/{id}", authcontroller.Getuserdata).Methods("GET")

	// API Routes
	api := r.PathPrefix("/api").Subrouter()
	api.Use(middlewares.JWTMiddleware) // Middleware JWT untuk Android

	// Bungkus router dengan CORS middleware
	handler := c.Handler(r)

	// Jalankan server dengan handler yang sudah mendukung CORS
	fmt.Println("Server is running on port", os.Getenv("PORT"))
	log.Fatal(http.ListenAndServe(os.Getenv("PORT"), handler))
}
