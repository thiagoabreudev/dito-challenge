<template>
    <b-navbar toggleable="lg"  variant=light>
        <b-navbar-brand href="#">
            <img src='../assets/logo.png'/>
        </b-navbar-brand>
        <b-navbar-toggle target="nav_collapse" />        
        <b-navbar-nav>
            <b-nav-item to="/autocomplete">Autocomplete</b-nav-item>
            <b-nav-item to="/timeline">Timeline</b-nav-item>
        </b-navbar-nav>        
    </b-navbar>
</template>


<script>
export default {
    
}
</script>