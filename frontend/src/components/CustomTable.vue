<template>    
  <div v-if="query.length > 1">
    <b-table hover :items="dados" :fields="fields" :filter="query"/>
  </div>
</template>

<script>
export default {
  name: "DitoTable",
  data() {
    return {
      fields: ["event", "timestamp"]
    };
  },
  created() {
    this.$store.state.query = "";
  },
  computed: {
    query() {
      return this.$store.state.query;
    },
    dados() {
      return this.$store.state.events;
    }
  }
};
</script>