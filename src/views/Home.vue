<template>
    <div class="home">
        <navbar /><br />
        <img src="../assets/swedenMap.png" height="500" width="187" alt="sweden map" /><br /><br />
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
    color: white;
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
</style>
