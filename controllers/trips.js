const TripModel = require("../models/trip");
const Boom = require("@hapi/boom");
const dot = require('dot-object');

// Get trips count. Optionally filtered by city name.
const count = async (req, res, next) => {
    const {city} = req.query;

    const filter = city ? {"city.name": city}: {};

    try {
        const tripsCount = await TripModel.countDocuments(filter);
        res.json({
            tripsCount
        })
    } catch (err) {
        next(Boom.internal("Internal server error"))
    }
};

const create = async (req, res, next) => {
    const {body: trip} = req;

    try {
        const newTrip = new TripModel(trip);
        await newTrip.save();
        res.json(newTrip)
    } catch (err) {
        console.log(err)
        next(Boom.internal("Internal server error"))
    }
};

const update = async (req, res, next) => {
    const {id} = req.params;
    const {body: trip} = req;

    try {
        const updatedTrip = await TripModel.findOneAndUpdate({_id: id}, {$set: dot.dot(trip)}, {returnNewDocument: true, lean: true});

        if (!updatedTrip) {
            next(Boom.notFound("Trip not found"));
        }

        res.json(updatedTrip)
    } catch (err) {
        next(Boom.internal("Internal server error"))
    }
};

module.exports = {
    count,
    create,
    update
};