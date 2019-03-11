"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = require("../common/router");
const events_model_1 = require("../events/events.model");
class EventRouter extends router_1.Router {
    paginate(documents, options = {}) {
        let resources = {
            _link: {
                page: options.page,
                count: options.count,
                perPage: options.pageSize
            },
            results: documents
        };
        if (options.page) {
            if (options.page > 1) {
                resources._link['previous'] = `/events?_page=${options.page + 1}&q=${options.q}`;
            }
            const remaining = options.count - (options.page * options.pageSize);
            if (remaining > 0) {
                resources._link['next'] = `/events?_page=${options.page + 1}&q=${options.q}`;
            }
        }
        return resources;
    }
    applyRoutes(application) {
        application.get('/events', (req, resp, next) => {
            let page = parseInt(req.query._page || 1);
            let pageSize = 10;
            let skip = (page - 1) * pageSize;
            let results;
            let eventName = req.query.q;
            if (eventName && eventName.length > 1) {
                events_model_1.Event.count({ event: { '$regex': eventName } })
                    .exec()
                    .then(count => {
                    results = events_model_1.Event.find({ event: { '$regex': eventName } })
                        .skip(skip)
                        .limit(pageSize);
                    results.then(events => {
                        resp.json(this.paginate(events, {
                            q: eventName,
                            page,
                            count,
                            pageSize
                        }));
                    });
                });
            }
            else {
                resp.json([]);
            }
            return next();
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
