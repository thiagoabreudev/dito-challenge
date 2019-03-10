"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const environment_1 = require("../common/environment");
const request = require("request");
class TimeLineEvent {
    createTimeline() {
        request(environment_1.environment.ditoApi.url, (error, request, body) => {
            console.log(body);
        });
    }
}
exports.TimeLineEvent = TimeLineEvent;
