package models

import (
	"fmt"
	"os"

	"github.com/joho/godotenv"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

var DB *gorm.DB

func ConnectDatabase() {
	// Connect to MySQL server without specifying a database
	err := godotenv.Load(".env")
	if err != nil {
		panic(err)
	}
	dsn := os.Getenv("DB_USERNAME") + ":" + os.Getenv("DB_PASSWORD") + "@tcp(" + os.Getenv("DB_HOST") + ":" + os.Getenv("DB_PORT") + ")/?parseTime=true"
	db, err := gorm.Open(mysql.Open(dsn), &gorm.Config{})
	if err != nil {
		panic("failed to connect to MySQL")
	}

	// Check if the database exists, and create it if it doesn't
	createDatabaseIfNotExists(db, "e-commerce")

	// Connect to the `futurefarmerapi` database
	dsn = os.Getenv("DB_USERNAME") + ":" + os.Getenv("DB_PASSWORD") + "@tcp(" + os.Getenv("DB_HOST") + ":" + os.Getenv("DB_PORT") + ")/futurefarmerapi?parseTime=true"
	db, err = gorm.Open(mysql.Open(dsn), &gorm.Config{})
	if err != nil {
		panic("failed to connect to futurefarmerapi database")
	}

	// Perform auto migrations
	err = db.AutoMigrate(&User{})
	if err != nil {
		panic("failed to migrate database")
	}

	// Assign the connected DB to the global variable
	DB = db
}

func createDatabaseIfNotExists(db *gorm.DB, dbName string) {
	sql := fmt.Sprintf("CREATE DATABASE IF NOT EXISTS %s", dbName)
	if err := db.Exec(sql).Error; err != nil {
		panic(fmt.Sprintf("failed to create database %s: %v", dbName, err))
	}
}
