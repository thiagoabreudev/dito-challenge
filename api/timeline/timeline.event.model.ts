import {environment} from '../common/environment'
import * as request from 'request'
import {Product} from '../products/products.model'

export class TimeLineEvent {
    timestamp: Date
    revenue: Number
    transaction_id: String
    store_name: String        
    products: Product[]


    createTimeline() {
        request(environment.ditoApi.url, (error, request, body) => {
            console.log(body)
        })
    }
}