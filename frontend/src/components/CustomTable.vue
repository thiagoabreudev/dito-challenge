<template>
  <div>
    <div v-if="query.length > 1 && data.results && data.results.length > 0">
      <b-table hover :items="data.results" :fields="fields" striped/>
      <b-row>
        <b-col md="6" class="my-1">
          <b-pagination
            :total-rows="data._link.count"
            :per-page="data._link.perPage"
            v-model="currentPage"
            class="my-0"
          />
        </b-col>
      </b-row>
    </div>
    <div v-else>
      <b-alert show variant="info" v-if="query.length < 2">
        Informe no mínimo 2 caracters na pesquisa
      </b-alert>
      <b-alert v-else show variant="warning">
        Não foi encontrado registros de acordo com a pesquisa
      </b-alert>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DitoTable',
  data () {
    return {
      fields: ['event', 'timestamp']
    }
  },
  computed: {
    currentPage: {
      set (value) {
        this.$store.state.currentPage = value
        this.$store.dispatch('loadEvents')
      }
    },
    query () {
      return this.$store.state.query
    },
    data () {
      return this.$store.state.events
    }
  }
}
</script>
