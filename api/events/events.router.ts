import {Router} from '../common/router'
import * as restify from 'restify'
import {Event} from '../events/events.model'

class EventRouter extends Router {
    applyRoutes(application: restify.Server) {
        application.get('/events', (req, resp, next) => {
            Event.find().then(users => {
                resp.json(users)
                return next()
            })
        }), 

        application.post('/events', (req, resp, next) => {
            let event = new Event(req.body)
            event.save().then(event => {
                resp.json(event)
                return next()
            })
        })
    }
}

export const eventsRouter = new EventRouter()