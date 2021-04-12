<template>
    <h1>SVEAVÄDER</h1>
    <img src="../assets/sweden-map.jpg" height="400" width="150" alt="sweden map placeholder" />
    <div class="home">
        <search-city />
        <menu-component />
        <button type="button" @click="$router.push('sun')">Nästa</button>
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

<style scoped></style>
