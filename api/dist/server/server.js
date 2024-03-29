"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const restify = require("restify");
const environment_1 = require("../common/environment");
const mongoose = require("mongoose");
const corsMiddleware = require("restify-cors-middleware");
class Server {
    initDb() {
        mongoose.Promise = global.Promise;
        return mongoose.connect(environment_1.environment.db.url, {
            useNewUrlParser: true
        });
    }
    initRoutes(routers) {
        return new Promise((resolve, reject) => {
            try {
                this.application = restify.createServer({
                    name: 'dito-challenge',
                    version: '1.0.0'
                });
                this.application.pre(restify.pre.sanitizePath());
                const corsOptions = {
                    preflightMaxAge: 10,
                    origins: ['*'],
                    allowHeaders: [],
                    exposeHeaders: []
                };
                const cors = corsMiddleware(corsOptions);
                this.application.pre(cors.preflight);
                this.application.use(cors.actual);
                this.application.use(restify.plugins.queryParser());
                this.application.use(restify.plugins.bodyParser());
                //routes
                for (let router of routers) {
                    router.applyRoutes(this.application);
                }
                this.application.listen(environment_1.environment.server.port, () => {
                    resolve(this.application);
                });
            }
            catch (error) {
                reject(error);
            }
        });
    }
    bootstrap(routers) {
        return this.initDb().then(() => {
            return this.initRoutes(routers).then(() => this);
        });
    }
}
exports.Server = Server;
