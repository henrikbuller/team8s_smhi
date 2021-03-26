<template>
    <div class="home">
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
