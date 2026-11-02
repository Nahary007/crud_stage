const OlonaModel = require("../models/olonaModel");

const creer = async (req, res) => {
    const { nom, prenom } = req.body;

    if (!nom || !prenom) {
        return res.status(400).json({ erreur: "nom et prenom sont obligatoires" });
    }

    try {
        const olona = await OlonaModel.creer(nom, prenom);
        return res.status(201).json(olona);
    } catch (err) {
        console.error("[POST /olona] erreur:", err.message);
        return res.status(500).json({ erreur: err.message });
    }
};

const lister = async (req, res) => {
    try {
        const olonas = await OlonaModel.lister();
        return res.json(olonas);
    } catch (err) {
        console.error("[GET /olona] erreur:", err.message);
        return res.status(500).json({ erreur: err.message });
    }
};

const supprimer = async (req, res) => {
    const id = Number(req.params.id);

    if (!Number.isInteger(id)) {
        return res.status(400).json({ erreur: "id invalide" });
    }

    try {
        const supprime = await OlonaModel.supprimer(id);
        if (!supprime) {
            return res.status(404).json({ erreur: "Olona introuvable" });
        }
        return res.json({ message: "Olona supprimé", olona: supprime });
    } catch (err) {
        console.error("[DELETE /olona/:id] erreur:", err.message);
        return res.status(500).json({ erreur: err.message });
    }
};

module.exports = { creer, lister, supprimer };
