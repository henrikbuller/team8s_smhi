<template>
    <div class="home">
        <h1>{{ cityName }}</h1>
        <div id="temp">{{ currentTemp }}°C</div>
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
        console.log("store state city created: ", this.$store.state.city.name)
        this.currentTemp = await TemperatureService.updateWeatherData(this.$store.state.city)
    },
    watch: {
        async currentTemp() {
            console.log("store state city watch: ", this.$store.state.city)
            this.currentTemp = await TemperatureService.updateWeatherData(this.$store.state.city)
        },
    },
    computed: {
        cityName() {
            return this.$store.state.city.name
        },
    },
}
</script>

<style scoped>
#temp {
    font-size: xx-large;
}
</style>
