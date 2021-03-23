<template>
    <div class="home">
        <h1>Göteborg</h1>
        <div id="temp">{{ currentTemp }}°C</div>
        <h2>{{ city }}</h2>
    </div>
</template>

<script>
// @ is an alias to /src

import TemperatureService from "../lib/TemperatureService.js"
import Data from "../lib/Data.js"

export default {
    name: "Current temperature",
    data() {
        return {
            currentTemp: {},
            city: Data.city,
        }
    },
    async created() {
        this.currentTemp = await TemperatureService.updateWeatherData()
    },
    watch: {
        async currentTemp() {
            this.currentTemp = await TemperatureService.updateWeatherData()
        },
    },
}
</script>

<style scoped>
#temp {
    font-size: xx-large;
}
</style>
