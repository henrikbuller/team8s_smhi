<template>
    <div class="home">
        <h1>{{ cityName }}</h1>
        <p class="top">12:00</p>
        <ve-progress :progress="50" color="#FFD604" :thickness="5" empty-thickness="1%" dash=" 24 1">
            <div id="symbol">
                <img :src="imgUrl" alt="a weather symbol" style="height: 100px" />
            </div>
        </ve-progress>
        <p class="">00:00</p>
        <div id="temp">{{ currentTemp }}°C</div>

        <h3>{{ timestamp }}</h3>
        <Slider v-model="value1" :min="1" :max="24" @change="updateData" />
        <Carousel :items-to-show="2.5" :wrap-around="true">
            <Slide class="carousel__item" v-for="date in dates" :key="date.name">
                <div class="date">
                    {{ date.name }} <br />
                    {{ date.date }} {{ date.month }}
                </div>
                <div class="temp">{{ currentTemp }}°C</div>
            </Slide>

            <template #addons>
                <navigation />
                <pagination />
            </template>
        </Carousel>
    </div>
</template>

<script>
// @ is an alias to /src

import TemperatureService from "../lib/TemperatureService.js"
import WeatherSymbol from "../lib/WeatherSymbol.js"
//import Slider from "../components/SliderComponent.vue"
import Slider from "primevue/slider"

import { VeProgress } from "vue-ellipse-progress"

import "vue3-carousel/dist/carousel.css"
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel"
import "vue3-carousel/dist/carousel.css"
import DateList from "../lib/DateList.js"

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
            timestamp: "",
            dates: DateList,

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
            this.calculateTime()
        },
        calculateTime: function () {
            const today = new Date()
            let time = today.getHours()

            if (this.value1 > 1) {
                time = time + this.value1 - 1
            }
            this.formatTime(time)
        },
        formatTime(time) {
            if (time < 24) {
                this.timestamp = time + ":00"
                return
            }
            if (time >= 24) {
                this.timestamp = time - 24 + ":00"
                return
            }
        },
    },
    components: {
        Slider,
        Carousel,
        Slide,
        Pagination,
        Navigation,
        VeProgress,
    },
    async created() {
        console.log("store state city created: ", this.$store.state.city.name)
        let values = await TemperatureService.updateWeatherData(this.$store.state.city, this.value1)
        this.currentTemp = values.currentTemp
        //Call current weather symbol
        this.currentWeatherSymbol = values.currentWeatherSymbol
        this.imgUrl = WeatherSymbol.setWeatherSymbol(this.currentWeatherSymbol)
        console.log(this.imgUrl)
        this.calculateTime()
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
.carousel__item {
    min-height: 150px;
    width: 100%;
    /* background-color: var(--carousel-color-primary); */

    color: var(--carousel-color-white);
    font-size: 20px;
    border-radius: 8px;
    border-style: solid;
    border-color: white;
    border-radius: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 5px;
    flex-flow: column nowrap;
}

.carousel__slide {
    padding: 0px;
}

.carousel__prev,
.carousel__next {
    box-sizing: content-box;
    border: 5px solid white;
}
.carousel__viewport {
    position: absolute;
    bottom: 0;
}
.temp {
    font-size: xx-large;
}
</style>
