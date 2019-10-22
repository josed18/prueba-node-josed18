require('dotenv').config()
const express = require("express");
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const api = require("./routes")

const app = express();

app.use(bodyParser.json());
app.use("/api/v1", api);
// app.use(errorHandler);

const port = process.env.PORT || 3000;

(async () => {
    await mongoose.connect(process.env.MONGO_CONNECTION, {useNewUrlParser: true});

    app.listen(port, () => {
        console.log("Server running at port", port)
    })
})()