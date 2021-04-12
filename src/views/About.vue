<template>
    <div class="about">
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
                                        <router-link to="/">Starsida</router-link> |
                                        <router-link to="/sun">Soltimmar</router-link> |
                                        <router-link to="/about">Om oss</router-link>
                                        <!--<a class="nav-link active" aria-current="page" href="#">Soltimmar |</a>
                                        <a class="nav-link" href="#">Jämför städer |</a>
                                        <a class="nav-link" href="#">Om oss </a>-->
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
        <div class="outer">
            <div class="container" id="marg">
                <div class="row" id="content">
                    <div class="col-sm">
                        <div class="text">
                            <h3><strong>Om oss</strong></h3>
                            <p>
                                Sveaväder är en väderapp som bland annat visar dagens och närliggande dagars antal
                                soltimmar, väder och temperatur. Du kan även jämföra olika städer när det kommer till
                                temperatur. Detta är version 2.0 Den bästa och sista versionen kommer finnas tillgänglig
                                den 12/4. Vi som är grundare av denna är UX-studenterna Moa, Josephine och Viktor och
                                Java-studenterna Alexander, Jens och Henkrik. Tillsammans bildar vi Team8s. För att
                                denna väderapp ska fungera har vi använt oss av SMHI:s API.
                            </p>
                        </div>
                    </div>
                    <div class="col-sm">
                        <img src="../assets/OmOss.png" class="img-fluid" alt="..." />
                    </div>
                </div>
                <div class="bottomright">&copy;2021 Team8s</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "About",
}
</script>

<style scoped></style>
