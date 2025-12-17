const express = require("express");
const router = express.Router();
const { getEventInfo } = require("../controllers/event.controller");

router.get("/", getEventInfo);

module.exports = router;
