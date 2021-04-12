<template>
    <div class="row justify-content-between">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container">
                <div class="row justify-content-between">
                    <div class="col-sm-4">
                        <a class="navbar-brand mx-1" href="#">SVEAVÄDER</a>

                        <button
                            class="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNavAltMarkup"
                            aria-controls="navbarNavAltMarkup"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span class="navbar-toggler-icon"></span>
                        </button>
                    </div>

                    <div class="col-sm-3" id="drop">
                        <menu-component />
                    </div>

                    <div class="row justify-content-evenly">
                        <div class="col-12" id="nav-text">
                            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                                <div class="text-decoration-none">
                                    <router-link style="text-decoration: none; color: inherit" to="/"
                                        >Starsida</router-link
                                    >
                                    |
                                    <router-link style="text-decoration: none; color: inherit" to="/sun"
                                        >Soltimmar</router-link
                                    >
                                    |
                                    <router-link style="text-decoration: none; color: inherit" to="/about"
                                        >Om oss</router-link
                                    >
                                    <!--<a class="nav-link active" aria-current="page" href="/sun">Soltimmar |</a>
                                        <a class="nav-link" href="#">Jämför städer |</a>
                                        <a class="nav-link" href="/about">Om oss </a>-->
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
import MenuComponent from "../components/MenuComponent.vue"
export default {
    name: "Navbar",
    components: {
        MenuComponent,
    },
}
</script>

<style scoped></style>
