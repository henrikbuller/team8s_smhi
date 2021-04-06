<template>
    <div id="nav">
        <router-link to="/">Home</router-link> | <router-link to="/about">About</router-link> |
        <router-link to="/sun">Sun</router-link>
    </div>
    <router-view />
</template>

<style>
#app {
    font-family: Open Sans Regular;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: white;
}
body {
    background-image: linear-gradient(#005baa, #40a4dc);
    min-height: 100vh;
}

#nav {
    margin: 0px;
    padding: 5px;
    width: 100%;
}

#nav a {
    font-weight: bold;
    color: #2c3e50;
}

#nav a.router-link-exact-active {
    color: #42b983;
}
</style>
