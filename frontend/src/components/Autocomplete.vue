<template>
  <div>
    <vue-bootstrap-typeahead placeholder="Pesquisar..." v-model="query" :data="search"/>
  </div>
</template>

<script>
export default {
  name: 'DitoAutocomplete',
  computed: {
    query: {
      get () {
        return this.$store.state.query
      },
      set (value) {
        this.$store.state.currentPage = 1
        this.$store.state.query = value
        this.$store.dispatch('loadEvents')
      }
    },
    search () {
      if (this.$store.state.events.results) {
        const itemSets = new Set(this.$store.state.events.results.map((event) => event.event))
        return Array.from(itemSets)
      }
      return []
    }
  }
}
</script>
