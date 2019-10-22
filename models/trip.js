const {model, Schema} = require('mongoose')

const tripSchema = new Schema({
    start: {
        date: Date,
        pickup_address: String,
        pickup_location: {
            type: {
                type: String,
                enum: ['Point'],
                required: true
            },
            coordinates: {
                type: [Number],
                required: true
            }
        },
    },
    end: {
        date: Date,
        pickup_address: String,
        pickup_location: {
            type: {
                type: String,
                enum: ['Point'],
                required: true
            },
            coordinates: {
                type: [Number],
                required: true
            }
        },
    },
    country: {
        name: String,
    },
    city: {
        name: String,
    },
    passenger: {
        first_name: String,
        last_name: String,
    },
    driver: {
        first_name: String,
        last_name: String,
    },
    car: {
        plate: String
    },
    status: {
        type: String,
        enum: ["started", "near", "onWay"]
    },
    check_code: String,
    price: Number,
    driver_location: {
        type: {
            type: String,
            enum: ['Point'],
            required: true
        },
        coordinates: {
            type: [Number],
            required: true
        }
    }
}, {timestamp: true});

module.exports = model("trips", tripSchema);