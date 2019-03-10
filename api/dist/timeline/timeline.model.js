"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const timeline_event_model_1 = require("./timeline.event.model");
const environment_1 = require("../common/environment");
const request = require("request");
const products_model_1 = require("../products/products.model");
class TimeLine {
    constructor() {
        this.timeLine = [];
    }
    addEvent(event, products) {
        let timeLineEvent = new timeline_event_model_1.TimeLineEvent();
        timeLineEvent.timestamp = event.timestamp;
        timeLineEvent.revenue = event.revenue;
        timeLineEvent.transaction_id = this.extractCustomData(event.custom_data, 'transaction_id');
        timeLineEvent.store_name = this.extractCustomData(event.custom_data, 'store_name');
        timeLineEvent.products = this.addProducts(products);
        this.timeLine.push(timeLineEvent);
    }
    addProducts(products) {
        let eventProducts = [];
        for (let eventProduct of products) {
            let product = new products_model_1.Product();
            product.name = this.extractCustomData(eventProduct.custom_data, 'product_name');
            product.price = this.extractCustomData(eventProduct.custom_data, 'product_price');
            eventProducts.push(product);
        }
        return eventProducts;
    }
    getStoreName(customData) {
        return customData.filter(event => event.key == 'store_name').reduce(store => store).value;
    }
    extractCustomData(customData, keyName) {
        return customData.filter(event => event.key == keyName).reduce(store => store).value;
    }
    getEvents() {
        return new Promise((resolve, reject) => {
            request(environment_1.environment.ditoApi.url, (error, request, body) => {
                return resolve(JSON.parse(body).events);
            });
        });
    }
    extractTransactionId(event) {
        let transactionId = event.custom_data.filter(item => item.key == 'transaction_id');
        if (transactionId) {
            return transactionId[0].value;
        }
        return false;
    }
    extractProducts(transactionId, events) {
        let products = events.filter(event => this.extractCustomData(event.custom_data, 'transaction_id') == transactionId);
        return products;
    }
    extractEvents(events, eventName) {
        let filteredEvents = events.filter((event) => {
            return event.event == eventName;
        });
        return filteredEvents;
    }
    sortEvents(events) {
        return events.sort((a, b) => a.timestamp - b.timestamp).reverse();
    }
    createTimeLine() {
        return new Promise((resolve, reject) => {
            this.getEvents().then(events => {
                let eventsBuy = this.extractEvents(events, 'comprou');
                eventsBuy = this.sortEvents(eventsBuy);
                let eventsBuyProducts = this.extractEvents(events, 'comprou-produto');
                for (let eventBuy of eventsBuy) {
                    let transactionId = this.extractCustomData(eventBuy.custom_data, 'transaction_id');
                    if (transactionId) {
                        let products = this.extractProducts(transactionId, eventsBuyProducts);
                        this.addEvent(eventBuy, products);
                    }
                }
                resolve({ timeline: this.timeLine });
            });
        });
    }
}
exports.TimeLine = TimeLine;
