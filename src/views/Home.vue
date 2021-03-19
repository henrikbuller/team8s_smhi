<template>
    <div class="home">
        <div>{{ currentTemp }}</div>
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
