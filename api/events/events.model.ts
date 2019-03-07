import * as mongoose from 'mongoose'

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
})

export const Event = mongoose.model('Event', eventSchema)