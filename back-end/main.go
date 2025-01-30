package main

import (
	"fmt"
	"log"
	"net/http"
	"os"

	"github.com/gorilla/mux"
	"github.com/joho/godotenv"
	"github.com/lek34/E-COM/controllers/authcontroller"
	"github.com/lek34/E-COM/middlewares"
	"github.com/lek34/E-COM/models"
)

func main() {
	err := godotenv.Load(".env")

	if err != nil {
		panic(err)
	}
	models.ConnectDatabase()
	r := mux.NewRouter()

	//login logic
	r.HandleFunc("/login", authcontroller.Login).Methods("POST")
	r.HandleFunc("/register", authcontroller.Register).Methods("POST")

	// //ANDROID API
	api := r.PathPrefix("/api").Subrouter()
	api.HandleFunc("/v1/logout", authcontroller.Logout).Methods("GET")
	// api.HandleFunc("/v1/dashboard", dashboardcontroller.Index).Methods("GET")

	// //Relay config
	// api.HandleFunc("/v1/getrelayconfig", configcontroller.GetRelayConfig).Methods("GET")
	// api.HandleFunc("/v1/updaterelayconfig", configcontroller.UpdateRelayConfig).Methods("PUT")

	// //Level Config
	// api.HandleFunc("/v1/getlevelconfig", configcontroller.GetLevelConfig).Methods("GET")
	// api.HandleFunc("/v1/updatelevelconfig", configcontroller.UpdateLevelConfig).Methods("PUT")

	// //relay status on off manual auto
	// api.HandleFunc("/v1/getrelaystatus", configcontroller.GetRelayStatus).Methods("GET")
	// api.HandleFunc("/v1/updaterelayphup", configcontroller.UpdateRelayPhUp).Methods("PATCH")
	// api.HandleFunc("/v1/updaterelayphdown", configcontroller.UpdateRelayPhDown).Methods("PATCH")
	// api.HandleFunc("/v1/updaterelaynuta", configcontroller.UpdateRelayNutA).Methods("PATCH")
	// api.HandleFunc("/v1/updaterelaynutb", configcontroller.UpdateRelayNutB).Methods("PATCH")
	// api.HandleFunc("/v1/updaterelaynutrisi", configcontroller.UpdateRelayNutrisi).Methods("PATCH")
	// api.HandleFunc("/v1/updaterelayfan", configcontroller.UpdateRelayFan).Methods("PATCH")
	// api.HandleFunc("/v1/updaterelaylight", configcontroller.UpdateRelayLight).Methods("PATCH")
	// api.HandleFunc("/v1/updaterelaymanualone", configcontroller.UpdateRelayManualOne).Methods("PATCH")
	// api.HandleFunc("/v1/updaterelaymanualtwo", configcontroller.UpdateRelayManualTwo).Methods("PATCH")
	// api.HandleFunc("/v1/updaterelaymanualthree", configcontroller.UpdateRelayManualThree).Methods("PATCH")
	// api.HandleFunc("/v1/updaterelaymanualfour", configcontroller.UpdateRelayManualFour).Methods("PATCH")
	// api.HandleFunc("/v1/updaterelaymanualfive", configcontroller.UpdateRelayManualFive).Methods("PATCH")
	// api.HandleFunc("/v1/updaterelaymanualsix", configcontroller.UpdateRelayManualSix).Methods("PATCH")

	// //tanaman
	// api.HandleFunc("/v1/plant", plantcontroller.Index).Methods("GET")
	// api.HandleFunc("/v1/plant", plantcontroller.Insert).Methods("POST")

	// //get relay history
	// r.HandleFunc("/api/v1/getrelayhistory", datacontroller.GetRelayHistory).Methods("GET")
	// //use middleware jwt for android

	api.Use(middlewares.JWTMiddleware)
	fmt.Printf("Server is running !!!")
	log.Fatal(http.ListenAndServe(os.Getenv("PORT"), r))
}
