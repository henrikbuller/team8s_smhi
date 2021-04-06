<template>
    <router-view />
    <div id="nav">
        <router-link to="/">Starsida</router-link> | <router-link to="/about">Vind</router-link> |
        <router-link to="/sun">Soltimmar</router-link>
    </div>
</template>

<style>
#app {
    font-family: Open Sans Regular;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
body {
    background-image: linear-gradient(#000c2c, #001647);
    min-height: 100vh;
}

#nav {
    margin: 0px;
    padding: 5px;
}

#nav a {
    font-weight: bold;
    color: #2c3e50;
}

#nav a.router-link-exact-active {
    color: #42b983;
}
</style>
