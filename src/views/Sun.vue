<template>
    <div class="home">
        <h1>Göteborg</h1>
        <div id="temp">{{ currentTemp }}°C</div>
    </div>
</template>

<script>
// @ is an alias to /src

import TemperatureService from "../lib/TemperatureService.js"

export default {
    name: "Current temperature",
    data() {
        return {
            currentTemp: {},
        }
    },
    async created() {
        this.currentTemp = await TemperatureService.updateWeatherData()
        console.log("current temp inside Home.vue created(): " + this.currentTemp)
    },
    watch: {
        async currentTemp() {
            this.currentTemp = await TemperatureService.updateWeatherData()
            console.log("current temp inside Home.vue watch(): " + this.currentTemp)
        },
    },
}
</script>

<style scoped>
#temp {
    font-size: xx-large;
}
</style>
