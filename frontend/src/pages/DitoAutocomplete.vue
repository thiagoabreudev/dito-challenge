<template>
    <div >
        <b-row>
            <b-col>
                <h2>Autocomplete</h2>
                <autocomplete></autocomplete>
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
export default {
    components: {
        Autocomplete, 
        CustomTable, 
        AutocompletePayload
    },
    created() {
        this.$store.dispatch('loadEvents')       
    },
    beforeDestroy() {
      this.$store.state.query = ''  
      this.$store.dispatch('loadEvents')
    },
}
</script>
