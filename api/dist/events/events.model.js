"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const eventSchema = new mongoose.Schema({
    event: {
        type: String,
        required: true
    },
    timestamp: {
        type: Date,
        required: true,
        default: Date.now
    }
});
exports.Event = mongoose.model('Event', eventSchema);
