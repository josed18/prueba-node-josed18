const express = require("express");
const trips = require("./trips");

const router = express.Router({mergeParams: true});

router.use("/trips", trips);

module.exports = router;