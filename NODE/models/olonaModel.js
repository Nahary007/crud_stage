
const db = require("../config/db");

const OlonaModel = {


    create: async (nom, prenom) => {
        const result = await db.query(
            "INSERT INTO olona (nom, prenom) VALUES ($1, $2) RETURNING *",
            [nom, prenom]
        );
        return result.rows[0];
    },
};

module.exports = OlonaModel;
