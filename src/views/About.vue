<template>
    <div class="about">
        <navbar />
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
import Navbar from "../components/Navbar.vue"
export default {
    name: "About",
    components: {
        Navbar,
    },
}
</script>

<style scoped></style>
