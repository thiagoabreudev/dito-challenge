import {Server} from './server/server'
import {eventsRouter} from './events/events.router'
import {timeLineRouter} from './timeline/timeline.router'

const server = new Server()
server.bootstrap([eventsRouter, timeLineRouter]).then(server=>{
    console.log('Server is listening on: ', server.application.address())
}).catch(error=>{
    console.log('Server failed to start')
    console.error(error)
    process.exit(1)
})