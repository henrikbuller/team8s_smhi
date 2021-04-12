<template>
    <div class="home">
        <navbar />
        <h1>SVEAVÄDER</h1>
        <img src="../assets/swedenMap.png" height="500" width="187" alt="sweden map" /><br /><br />
        <p>Se vädret i</p>
        <menu-component class="box" />
        <button class="box" type="button" @click="$router.push('sun')">Nästa</button>
    </div>
</template>

<script>
import MenuComponent from "../components/MenuComponent.vue"
import Navbar from "../components/Navbar.vue"

export default {
    name: "Home",
    components: {
        MenuComponent,
        Navbar,
    },
}
</script>

<style>
#app {
    font-family: Open Sans Semibold;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: black;
}

.box {
    width: 120px;
    height: 30px;
    border: 1px solid #999;
    font-size: 14px;
    background-color: #eee;
    border-radius: 5px;
    text-align: center;
    display: inline;
}
body {
    background-image: linear-gradient(#002b50, #16374b);
    min-height: 100vh;
}
</style>
