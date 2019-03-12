import * as restify from 'restify'
import {environment} from '../common/environment'
import {Router} from '../common/router'
import * as mongoose from 'mongoose'
import * as corsMiddleware from 'restify-cors-middleware'

export class Server {
    application: restify.Server
    initDb() {
        (<any>mongoose).Promise = global.Promise
        return mongoose.connect(environment.db.url, {
            useNewUrlParser: true
        })
    }
    initRoutes(routers: Router[]): Promise<any> {
        return new Promise((resolve, reject) => {
            try {
                this.application = restify.createServer({
                    name:'dito-challenge', 
                    version: '1.0.0'
                })
                this.application.pre(restify.pre.sanitizePath());
                const corsOptions: corsMiddleware.Options = {
                    preflightMaxAge: 10, 
                    origins: ['*'], 
                    allowHeaders: [], 
                    exposeHeaders: []
                }                
                const cors: corsMiddleware.CorsMiddleware = corsMiddleware(corsOptions)
                this.application.pre(cors.preflight)
                this.application.use(cors.actual)
                this.application.use(restify.plugins.queryParser())
                this.application.use(restify.plugins.bodyParser())

                //routes
                for (let router of routers) {
                    router.applyRoutes(this.application)
                }
                this.application.listen(environment.server.port, ()=> {
                    resolve(this.application)
                })
            } catch (error) {
                reject(error)
            }
        })
    }

    bootstrap(routers: Router[]): Promise<Server> {
        return this.initDb().then(()=> {
            return this.initRoutes(routers).then(()=> this)
        })            
    }
}


