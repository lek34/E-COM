package models

type User struct {
	Id       int64  `gorm:"primaryKey" json:"id"`
	Nama     string `gorm:"varchar(200)" json:"nama"`
	Email    string `gorm:"varchar(200)" json:"email"`
	Username string `gorm:"varchar(200)" json:"username"`
	Password string `gorm:"varchar(200)" json:"password"`
}
