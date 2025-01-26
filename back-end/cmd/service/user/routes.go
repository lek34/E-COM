package user

import (
	"net/http"

	"github.com/gorilla/mux"
	"github.com/lek34/E-COM/cmd/types"
	"github.com/lek34/E-COM/cmd/utils"
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
	var payload types.RegisterUserPayload
	if err := utils.ParseJSON(r, payload); err != nil {
		utils.WriteError(w, http.StatusBadRequest, err)
	}
}
