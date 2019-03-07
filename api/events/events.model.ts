const events = [
    {event: 'buy', timestamp: "2016-09-22T13:57:31.2311892-04:00"}, 
    {event: 'sell', timestamp: "2016-09-21T13:57:31.2311892-04:00"}
]

export class Event {
    static findAll(): Promise<any[]> {
        return Promise.resolve(events)
    }
}