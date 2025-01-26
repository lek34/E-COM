package user

import (
	"net/http"

	"github.com/gorilla/mux"
)

type Handler struct {
}

func NewHandler() *Handler {
	return &Handler{}
}

func (h *Handler) RegisterRoutes(router *mux.Router) {
	router.HandleFunc("/login", h.handlelogin).Methods("POST")
	router.HandleFunc("/register", h.handleregister).Methods("POST")
}

func (h *Handler) handlelogin(w http.ResponseWriter, r *http.Request) {

}

func (h *Handler) handleregister(w http.ResponseWriter, r *http.Request) {

}
