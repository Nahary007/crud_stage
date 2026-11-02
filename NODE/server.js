const express = require("express");
const cors = require("cors");
const olonaRoutes = require("./routes/olonaRoutes");

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.use("/olona", olonaRoutes);

app.listen(3001, () => {
    console.log("Serveur backend démarré sur http://localhost:3001");
});
