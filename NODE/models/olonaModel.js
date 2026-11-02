// MODEL : tout ce qui parle à la base de données
const db = require("../config/db");

const OlonaModel = {
    async creer(nom, prenom) {
        const result = await db.query(
            "INSERT INTO olona (nom, prenom) VALUES ($1, $2) RETURNING *",
            [nom, prenom]
        );
        return result.rows[0];
    },

    async lister() {
        const result = await db.query("SELECT * FROM olona ORDER BY id DESC");
        return result.rows;
    },

    async listerUn(id) {
        const result = await db.query("SELECT * FROM olona WHERE id = $1", [id]);
        return result.rows[0];
    },

    async supprimer(id) {
        const result = await db.query(
            "DELETE FROM olona WHERE id = $1 RETURNING *",
            [id]
        );
        return result.rows[0]; // undefined si l'id n'existe pas
    },

    async modifier(id, nom, prenom) {
        const result = await db.query(
            "UPDATE olona SET nom = $1, prenom = $2 WHERE id = $3 RETURNING *",
            [nom, prenom, id]
        );
        return result.rows[0];
    },
};

module.exports = OlonaModel;
