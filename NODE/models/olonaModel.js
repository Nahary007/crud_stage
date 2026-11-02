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

    async supprimer(id) {
        const result = await db.query(
            "DELETE FROM olona WHERE id = $1 RETURNING *",
            [id]
        );
        return result.rows[0]; // undefined si l'id n'existe pas
    },
};

module.exports = OlonaModel;
