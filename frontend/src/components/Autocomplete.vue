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
        this.$store.state.query = value
        this.$store.dispatch('loadEvents')
      }
    },
    search () {
      const itemSets = new Set(this.$store.state.events.map((event) => event.event))
      return Array.from(itemSets)
    }
  }
}
</script>
