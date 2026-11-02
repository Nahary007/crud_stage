// ROUTES : associe URL + méthode HTTP -> controller
const express = require("express");
const OlonaController = require("../controllers/olonaController");

const router = express.Router();

router.post("/", OlonaController.creer);
router.get("/", OlonaController.lister);
router.get("/:id", OlonaController.listerUn);
router.put("/:id", OlonaController.modifier);
router.delete("/:id", OlonaController.supprimer);

module.exports = router;
