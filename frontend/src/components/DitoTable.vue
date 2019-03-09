<template>
  <div>
    <b-table hover :items="dados" :fields="fields" :filter="query" v-if="query.length > 1 "/>
  </div>
</template>

<script>
export default {
    name: 'DitoTable', 
    data(){
        return {
            
        }
    }
}
</script>