<template>
    <h1>SVEAVÄDER</h1>
    <img src="../assets/swedenMap.png" height="400" width="150" alt="sweden map" /><br /><br />
    <div class="home">
        <search-city />
        <menu-component />
        <button @click="$router.push('sun')">Nästa</button>
        <!-- <h1>{{ $store.state.city.name }}</h1> -->
    </div>
</template>

<script>
import MenuComponent from "../components/MenuComponent.vue"
import SearchCity from "../components/SearchCity.vue"
//import Data from "../lib/Data.js"

export default {
    name: "Home",
    components: {
        MenuComponent,
        SearchCity,
    },
    // data() {
    //     return {
    //         city: Data.city,
    //     }
    // },
}
</script>

<style>
#app {
    font-family: Open Sans Semibold;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: white;
}
body {
    background-image: linear-gradient(#002b50, #16374b);
    min-height: 100vh;
}
</style>
