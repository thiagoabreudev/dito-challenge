<template>
    <div>
        <autocomplete></autocomplete>
        <custom-table></custom-table>
    </div>
</template>

<script>
import Autocomplete from '@/components/Autocomplete'
import CustomTable from '@/components/CustomTable'
export default {
    components: {
        Autocomplete, 
        CustomTable
    },
    created() {
        this.$store.dispatch('loadEvents')       
    }
}
</script>
