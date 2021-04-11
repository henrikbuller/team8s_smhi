<template>
    <div class="home">
        <h1>SVEAVÄDER</h1>
        <img src="../assets/sweden-map.jpg" height="400" width="150" alt="sweden map placeholder" />
        <menu-component />
        <!-- <h1>{{ $store.state.city.name }}</h1> -->
    </div>
</template>

<script>
import MenuComponent from "../components/MenuComponent.vue"
//import Data from "../lib/Data.js"

export default {
    name: "Home",
    components: {
        MenuComponent,
    },
    // data() {
    //     return {
    //         city: Data.city,
    //     }
    // },
}
</script>

<style scoped></style>
