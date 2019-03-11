import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex)
Vue.use(VueAxios, axios)

export default new Vuex.Store({
  state: {
    currentPage: 1,
    query: '',
    events: {
      results: []
    },
    timeline: { timeline: [] }
  },
  mutations: {
    setEvents (state, payload) {
      state.events = payload
    },
    setTimeLine (state, payload) {
      state.timeline = payload
    }
  },
  actions: {
    addEvent ({ dispatch }, payload) {
      axios.post(`/events`, payload)
        .then(response => dispatch('loadEvents'))
    },
    loadEvents ({ commit, state }) {
      axios.get(`/events?_page=${state.currentPage}&q=${state.query}`)
        .then(response => commit('setEvents', response.data))
    },
    loadTimeLine ({ commit }) {
      axios.get('/timeline')
        .then(response => commit('setTimeLine', response.data))
    }

  }
})
