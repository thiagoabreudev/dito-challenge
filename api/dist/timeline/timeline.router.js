"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = require("../common/router");
const timeline_model_1 = require("../timeline/timeline.model");
class TimeLineRouter extends router_1.Router {
    applyRoutes(application) {
        application.get('/timeline', (req, resp, next) => {
            const timeLine = new timeline_model_1.TimeLine();
            timeLine.createTimeLine().then((events) => {
                resp.json(events);
            });
            return next();
        });
    }
}
exports.timeLineRouter = new TimeLineRouter();
