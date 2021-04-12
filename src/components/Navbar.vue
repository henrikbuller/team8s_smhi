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
                            <span class="navbar-toggler-icon" id="ham"></span>
                        </button>
                    </div>

                    <div class="col-sm-3" id="drop">
                        <select class="form-select" id="inlineFormSelectPref">
                            <span class="navbar-text">Visa väder i</span>
                            <option selected>Visa väder i...</option>
                            <option value="1">Göteborg</option>
                            <option value="2">Helsingborg</option>
                            <option value="3">Jönköping</option>
                            <option value="4">Linköping</option>
                            <option value="5">Malmö</option>
                            <option value="6">Stockholm</option>
                            <option value="7">Uppsala</option>
                            <option value="8">Västerås</option>
                        </select>
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
export default {
    name: "Navbar",
}
</script>

<style scoped></style>
