<template>
  <div>
    <vue-bootstrap-typeahead placeholder="Pesquisar..." v-model="query" :data="[]"/>
  </div>
</template>

<script>
export default {
  name: "DitoAutocomplete",  
  computed: {
    query: {
      get() {
        return this.$store.state.query;
      },
      set(value) {
        this.$store.state.query = value;
      }
    }
  }
};
</script>