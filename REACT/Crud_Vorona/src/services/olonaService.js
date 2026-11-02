
import api from "../config/api";

export const olonaService = {

  
  creer: async (nom, prenom) => {
    const reponse = await api.post("/olona", { nom, prenom });
    return reponse.data;
  },

  listerTous: async () => {
    const reponse = await api.get("/olona");
    return reponse.data;
  },

  obtenirParId: async (id) => {
    const reponse = await api.get(`/olona/${id}`);
    return reponse.data;
  },

  modifier: async (id, nom, prenom) => {
    const reponse = await api.put(`/olona/${id}`, { nom, prenom });
    return reponse.data;
  },

  supprimer: async (id) => {
    const reponse = await api.delete(`/olona/${id}`);
    return reponse.data;
  },

};

