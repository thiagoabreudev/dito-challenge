"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = require("../common/router");
const events_model_1 = require("../events/events.model");
class EventRouter extends router_1.Router {
    applyRoutes(application) {
        application.get('/events', (req, resp, next) => {
            events_model_1.Event.find().then(users => {
                resp.json(users);
                return next();
            });
        }),
            application.post('/events', (req, resp, next) => {
                let event = new events_model_1.Event(req.body);
                event.save().then(event => {
                    resp.json(event);
                    return next();
                });
            });
    }
}
exports.eventsRouter = new EventRouter();
