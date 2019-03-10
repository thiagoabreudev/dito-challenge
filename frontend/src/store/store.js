import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex)
Vue.use(VueAxios, axios)

export default new Vuex.Store({
    state: {
        query: '',
        events: [],
        timeline: {timeline: []}
    },
    mutations: {
        setEvents(state, payload) {
            state.events = payload
        },
        setTimeLine(state, payload) {
            state.timeline = payload
        }
    },
    actions: {
        loadEvents({commit, state}) {
            axios.get(`http://localhost:3000/events?q=${state.query}`)
                .then(response => commit('setEvents', response.data))
        }, 
        loadTimeLine({commit}) {
            axios.get('http://localhost:3000/timeline')
                .then(response=>commit('setTimeLine', response.data))
        }, 
        
    }    
})