<template>
    <div class="home">
        <h1>Göteborg</h1>
        <div id="temp">{{ currentTemp }}°C</div>
        <h2>{{ city.name }}</h2>
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
        // detta blev undefined
        // let city = Data.city
        // let lng = city.lng
        // let lat = city.lat
        // console.log(lng, " ", lat)

        //Här ville vi anropa med lng och lat som inparameter
        this.currentTemp = await TemperatureService.updateWeatherData()
    },
    watch: {
        async currentTemp() {
            // detta blev undefined
            // let city = Data.city
            // let lng = city.lng
            // let lat = city.lat
            // console.log(lng, " ", lat)
            //Här ville vi anropa med lng och lat som inparameter
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
