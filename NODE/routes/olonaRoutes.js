// ROUTES : associe URL + méthode HTTP -> controller
const express = require("express");
const OlonaController = require("../controllers/olonaController");

const router = express.Router();

router.post("/", OlonaController.creer);
router.get("/", OlonaController.lister);
router.delete("/:id", OlonaController.supprimer);

module.exports = router;
