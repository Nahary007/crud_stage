const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));


const db = new Pool({
    host: "localhost",
    user: "postgres",
    password: "",
    database: "olombelona",
    port: 5432,
});


app.post("/olona", async (req, res) => {
    const { nom, prenom } = req.body;

    try {
        const result = await db.query(
            "INSERT INTO olona (nom, prenom) VALUES ($1, $2) RETURNING *",
            [nom, prenom]
        );
        return res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error("[POST /olona] erreur:", err.message);
        return res.status(500).json({ erreur: err.message });
    }
});

app.listen(3001, () => {
    console.log("Serveur backend démarré sur http://localhost:3001");
});

