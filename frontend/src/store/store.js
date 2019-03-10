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
    },
    mutations: {
        setEvents(state, payload) {
            state.events = payload
        }
    },
    actions: {
        loadEvents({commit}) {
            axios.get('http://localhost:3000/events')
                .then(response => commit('setEvents', response.data))
        }
    }    
})