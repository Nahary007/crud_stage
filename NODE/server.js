const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch");
const fs = require("fs");
const path = require("path");
const mysql = require("postgres/promise");
const dbPostgres = require("./User");

 
const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));


const db = postgres.createPool({
  host:     "localhost",
  user:     "root",
  password: "",
  database: "olombelona",
});

app.post("/api/creer-User", async (req, res) => {
  const {nom, prenom } = req.body;

  try {
    const payload = {
      nom:        nom,
      prenom:     prenom,
    
    };

    const reponse = await fetch(`${DOLIBARR_API}/users`, {
      method: "POST",
      headers: { "Content-Type": "application/json", "DOLAPIKEY"},
      body: JSON.stringify(payload),
    });

    const texte = await reponse.text();
    console.log("[creer-utilisateur] status:", reponse.status, "| réponse:", texte);

    let data;
    try { data = JSON.parse(texte); }
    catch { return res.status(500).json({ erreur: texte.substring(0, 300) }); }

    if (!reponse.ok) {
      const msg = typeof data === "string" ? data : data?.error?.message || data?.error || JSON.stringify(data);
      return res.status(400).json({ erreur: msg });
    }

    return res.json({ nom: nom });
  } catch (err) {
    return res.status(500).json({ erreur: err.message });
  }
});
 
app.listen(3001, () => {
  console.log("Serveur backend démarré sur http://localhost:3001");
});