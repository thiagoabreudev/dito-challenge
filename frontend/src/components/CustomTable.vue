<template>    
  <div>
    <div v-if="query.length > 1 && data.length > 0">
      <b-table hover :items="data" :fields="fields" striped/>
    </div>    
    <div v-else>
      <b-alert show variant="info" v-if="query.length < 2">
        Informe pelomenos 2 caracters na pesquisa
      </b-alert>
      <b-alert v-else show variant="warning">
        Não foi encontrado registros de acordo com a pesquisa
      </b-alert>      
    </div>
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
  computed: {
    query() {
      return this.$store.state.query;
    },
    data() {
      return this.$store.state.events;
    }
  }
};
</script>