const express = require("express");
const controller = require("../controllers/trips")

const router = express.Router({mergeParams: true});

router
    .route('/')
    .get(controller.count)
    .post(controller.create);

router
    .route("/:id")
    .patch(controller.update);

module.exports = router;