<template>
    <div >
        <b-row>
            <b-col>
                <h2>Autocomplete</h2>
                <b-row>
                    <b-col cols=8><autocomplete></autocomplete></b-col>
                    <b-col cols=2><new-event></new-event></b-col>
                </b-row>
                <hr>
                <custom-table></custom-table>
            </b-col>
            <b-col>
                <h2>Payload</h2>
                <autocomplete-payload></autocomplete-payload>
            </b-col>
        </b-row>
    </div>
</template>

<script>
import Autocomplete from '@/components/Autocomplete'
import CustomTable from '@/components/CustomTable'
import AutocompletePayload from '@/components/AutocompletePayload'
import NewEvent from '@/components/NewEvent'

export default {
  components: {
    Autocomplete,
    CustomTable,
    AutocompletePayload,
    NewEvent
  },
  created () {
    this.$store.dispatch('loadEvents')
  },
  beforeDestroy () {
    this.$store.state.query = ''
    this.$store.dispatch('loadEvents')
  }
}
</script>
