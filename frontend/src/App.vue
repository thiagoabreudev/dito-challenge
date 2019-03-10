<template>
  <div id="app">
    <nav-bar></nav-bar>
    <b-container fluid>
      <b-jumbotron>
        <router-view/>
      </b-jumbotron>
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
  .CodeMirror {
    height: 600px !important;
  }
</style>
