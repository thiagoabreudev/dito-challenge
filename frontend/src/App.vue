<template>
  <div id="app">
    <nav-bar></nav-bar>
    <b-container fluid>
      <router-view/>
    </b-container>
  </div>        
</template>

<script>
import NavBar from '@/components/NavBar'
export default {
  name: 'App', 
  components: {
    NavBar
  }
}
</script>

<style>
  body {
    background-color: #e6ecf2 !important;
  }
  .container-fluid {    
    margin-top: 20px;
  }
</style>
