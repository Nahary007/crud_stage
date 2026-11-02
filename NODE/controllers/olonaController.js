
const OlonaModel = require("../models/olonaModel");

const OlonaController = {


    create: async (req, res) => {
        const { nom, prenom } = req.body;
        try {
            const olona = await OlonaModel.create(nom, prenom);
            return res.status(201).json(olona);
        } catch (err) {
            console.error("[POST /olona] erreur:", err.message);
            return res.status(500).json({ erreur: err.message });
        }
    },


};

module.exports = OlonaController;
