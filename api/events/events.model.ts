import * as mongoose from 'mongoose'

export interface Event extends mongoose.Document {
    event: string, 
    timestamp: Date
}

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

export const Event = mongoose.model<Event>('Event', eventSchema)