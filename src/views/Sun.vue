<template>
    <div class="home">
        <h1>{{ cityName }}</h1>
        <div id="temp">{{ currentTemp }}°C</div>
        <div id="symbol">
            <img :src="symbol" alt="a weather symbol" />
        </div>
    </div>
</template>

<script>
// @ is an alias to /src

import TemperatureService from "../lib/TemperatureService.js"
import symbol from "../assets/sun.png"

//import Data from "../lib/Data.js"

export default {
    name: "Current temperature",
    data() {
        return {
            currentTemp: {},
            currentWeatherSymbol: {},
            symbol: symbol,
            //  city: Data.city,
        }
    },
    async created() {
        console.log("store state city created: ", this.$store.state.city.name)
        let values = await TemperatureService.updateWeatherData(this.$store.state.city)
        this.currentTemp = values.currentTemp
        this.currentWeatherSymbol = values.currentWeatherSymbol
    },
    watch: {
        async currentTemp() {
            console.log("store state city watch: ", this.$store.state.city)
            let values = await TemperatureService.updateWeatherData(this.$store.state.city)
            this.currentTemp = values.currentTemp
            this.currentWeatherSymbol = values.currentWeatherSymbol
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
