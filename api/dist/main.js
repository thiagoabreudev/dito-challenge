"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./server/server");
const events_router_1 = require("./events/events.router");
const timeline_router_1 = require("./timeline/timeline.router");
const server = new server_1.Server();
server.bootstrap([events_router_1.eventsRouter, timeline_router_1.timeLineRouter]).then(server => {
    console.log('Server is listening on: ', server.application.address());
}).catch(error => {
    console.log('Server failed to start');
    console.error(error);
    process.exit(1);
});
