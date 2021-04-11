<!--<template>
    <div class="about">
        <div class="container">
            <div class="row align-items-start">
                <div class="col">One of three columns</div>
                <div class="col">One of three columns</div>
                <div class="col">One of three columns</div>
            </div>
            <div class="row align-items-center">
                <div class="col">One of three columns</div>
                <div class="col">One of three columns</div>
                <div class="col">One of three columns</div>
            </div>
        </div>
    </div>
</template>-->

<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">SVEAVÄDER</a>

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

            <div class="visa pull-right">
                <form class="row row-cols-lg-auto g-3 align-items-right">
                    <span class="navbar-text">Visa väder i</span>
                    <div class="col-12">
                        <select class="form-select" id="inlineFormSelectPref">
                            <option selected>Välj stad...</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                </form>
            </div>
            <button type="button" class="btn btn-outline-dark" style="margin-right: 5em">Om oss</button>
        </div>
    </nav>

    <nav class="navbar2 navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav align-items-right">
                    <a class="nav-link active" aria-current="page" href="#">Soltimmar |</a>
                    <a class="nav-link" href="#">Vind |</a>
                    <a class="nav-link" href="#">Jämför städer</a>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: "About",
}
</script>

<style scoped>
.about {
    background-color: white;
}
</style>
