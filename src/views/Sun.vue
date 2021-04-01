<template>
    <div class="home">
        <h1>{{ cityName }}</h1>
        <div id="temp">{{ currentTemp }}°C</div>
        <div id="symbol">
            <img :src="imgUrl" alt="a weather symbol" style="height: 250px" />
        </div>

        <h3>Slider value: {{ value1 }}</h3>
        <Slider v-model="value1" @change="updateData" />
    </div>
</template>

<script>
// @ is an alias to /src

import TemperatureService from "../lib/TemperatureService.js"
import WeatherSymbol from "../lib/WeatherSymbol.js"
//import Slider from "../components/SliderComponent.vue"
import Slider from "primevue/slider"

//import Data from "../lib/Data.js"

export default {
    name: "Current temperature",
    data() {
        return {
            currentTemp: {},
            currentWeatherSymbol: {},
            imgUrl: "",
            value: null,
            value1: 1,

            //  city: Data.city,
        }
    },
    methods: {
        async updateData() {
            let values = await TemperatureService.updateWeatherData(this.$store.state.city, this.value1)
            this.currentTemp = values.currentTemp
            //Call current weather symbol
            this.currentWeatherSymbol = values.currentWeatherSymbol
            this.imgUrl = WeatherSymbol.setWeatherSymbol(this.currentWeatherSymbol)
        },
    },
    components: {
        Slider,
    },
    async created() {
        console.log("store state city created: ", this.$store.state.city.name)
        let values = await TemperatureService.updateWeatherData(this.$store.state.city, this.value1)
        this.currentTemp = values.currentTemp
        //Call current weather symbol
        this.currentWeatherSymbol = values.currentWeatherSymbol
        this.imgUrl = WeatherSymbol.setWeatherSymbol(this.currentWeatherSymbol)
        console.log(this.imgUrl)
    },

    watch: {
        async currentTemp() {
            console.log("store state city watch: ", this.$store.state.city)
            let values = await TemperatureService.updateWeatherData(this.$store.state.city, this.value1)
            this.currentTemp = values.currentTemp
            this.currentWeatherSymbol = values.currentWeatherSymbol
            this.imgUrl = WeatherSymbol.setWeatherSymbol(this.currentWeatherSymbol)
            console.log(this.imgUrl)
        },
        async change() {},
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
.layout-content {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
