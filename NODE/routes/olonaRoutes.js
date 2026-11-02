
const express = require("express");
const router = express.Router();
const OlonaController = require("../controllers/olonaController");

router.post("/", OlonaController.create);

module.exports = router;
