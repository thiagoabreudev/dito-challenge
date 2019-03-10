<template>
    <div >
        <b-row>
            <b-col cols="6">
                <autocomplete></autocomplete>
                <custom-table></custom-table>
            </b-col>
            <b-col cols="6">
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
    }
}
</script>
