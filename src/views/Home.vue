<template>
    <div class="home">
        <temperature-component />
    </div>
</template>

<script>
// @ is an alias to /src

import TemperatureComponent from "../components/TemperatureComponent.vue"

export default {
    name: "Home",
    components: {
        TemperatureComponent,
    },
}
</script>
