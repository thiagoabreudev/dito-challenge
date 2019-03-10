<template>
  <div>
    <b-container>
      <b-jumbotron>
        <b-row>
          <b-col>
            <dito-autocomplete></dito-autocomplete>
          </b-col>
        </b-row>
        <hr>
        <b-row>
          <b-col>
            <dito-table></dito-table>
          </b-col>
        </b-row>
      </b-jumbotron>
    </b-container>
  </div>
</template>

<script>
import DitoAutocomplete from '@/components/DitoAutocomplete'
import DitoTable from '@/components/DitoTable'
export default {
  components: {
    DitoAutocomplete,
    DitoTable
  },  
  created() {
    this.$store.dispatch('loadEvents')
  },
  computed: {
    events() {
      return this.$store.state.events
    }
  },
};
</script>
