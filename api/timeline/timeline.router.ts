import * as restify from 'restify'
import {Router} from '../common/router'
import {TimeLine} from '../timeline/timeline.model'
import {Product} from '../products/products.model'


class TimeLineRouter extends Router {
    applyRoutes(application: restify.Server) {
        application.get('/timeline', (req, resp, next) => {  
            const timeLine = new TimeLine()          
            timeLine.createTimeLine().then((events)=>{
                resp.json(events)
            })            
            return next()
        })
    }
}

export const timeLineRouter = new TimeLineRouter()