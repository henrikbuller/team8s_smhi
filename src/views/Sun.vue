<template>
    <div class="home">
        <p class="top">12:00</p>
        <ve-progress
            :progress="(value1 * 100) / 24"
            color="white"
            :thickness="1"
            empty-thickness="1%"
            dash=" 24 1"
            :size="180"
            dot="10% #FFD604"
            :angle="80"
        >
            <div class="middle" style="display: flex; flex-direction: column">
                <div id="symbol">
                    <img
                        :src="imgUrl"
                        alt="a weather symbol"
                        style="flex: 1; height: 100px; justify-content: center; align-items: center"
                    />
                </div>
                <div id="currentTime" style="flex: 1; height: 100px; justify-content: center; align-items: center">
                    {{ value1 }}:00
                </div>
            </div>
        </ve-progress>
        <p class="bottom">00:00</p>
        <p class="sun">{{ sunrise }} | {{ sunset }}</p>
        <p class="sun-hours">Antal soltimmar:<br />13h</p>

        <!-- <h3>{{ timestamp }}</h3> -->

        <Slider v-model="value1" :min="1" :max="24" @change="updateData" style="margin: 10%" />
        <Carousel :items-to-show="3.5" :wrap-around="false" style="font-family: Open Sans Regular; margin: 15px">
            <Slide class="carousel__item" v-for="date in dates" :key="date.name">
                <div class="date">
                    {{ date.name }} <br />
                    {{ date.date }} {{ date.month }}
                </div>
                <div class="temp">{{ currentTemp }}°C</div>
                <div style="overflow-x: hidden; width: 100%; margin-bottom: 0px; position: absolute; bottom: 0">
                    <div style="float: left; font-size: 14px">L:-9°</div>
                    <div style="float: right; font-size: 14px">H:21°</div>
                </div>
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
import { getSunrise, getSunset } from "sunrise-sunset-js"

//import Data from "../lib/Data.js"

export default {
    name: "Current temperature",
    data() {
        return {
            currentTemp: {},
            currentWeatherSymbol: {},
            imgUrl: "",
            value: null,
            value1: 5,
            timestamp: "",
            dates: DateList,
            sunrise: "",
            sunHours: "",
            //  sunset: "",

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
        getSunrise() {
            this.sunrise = getSunrise(this.$store.state.city.lng, this.$store.state.city.lat)
        },
        getSunset() {
            this.sunset = getSunset(this.$store.state.city.lng, this.$store.state.city.lat)
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
        let values = await TemperatureService.updateWeatherData(this.$store.state.city, this.value1)
        this.currentTemp = values.currentTemp
        //Call current weather symbol
        this.currentWeatherSymbol = values.currentWeatherSymbol
        this.imgUrl = WeatherSymbol.setWeatherSymbol(this.currentWeatherSymbol)
        this.calculateTime()

        this.sunrise = getSunrise(this.$store.state.city.lat, this.$store.state.city.lng).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
        })
        this.sunset = getSunset(this.$store.state.city.lat, this.$store.state.city.lng).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
        })
        this.getSunHours()
    },

    watch: {
        async currentTemp() {
            let values = await TemperatureService.updateWeatherData(this.$store.state.city, this.value1)
            this.currentTemp = values.currentTemp
            this.currentWeatherSymbol = values.currentWeatherSymbol
            this.imgUrl = WeatherSymbol.setWeatherSymbol(this.currentWeatherSymbol)
            getSunrise()
            getSunset()
            this.getSunHours()
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
:root {
    --carousel-color-primary: lightgray;
}
.home {
    overflow-x: hidden;
}
body {
    overflow-x: hidden;
}

.layout-content {
    display: flex;
    justify-content: center;
    align-items: center;
}
.carousel {
    justify-content: center;
    align-items: center;
}
.carousel__pagination {
    padding: 0px;
    margin-bottom: 5px;
}
.carousel__item {
    min-height: 140px;
    width: 100%;
    /* background-color: var(--carousel-color-primary); */

    color: var(--carousel-color-white);
    font-size: 20px;
    border-radius: 8px;
    border-style: solid;
    border-color: white;
    border-radius: 0px;
    border-width: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto 5px;
    flex-flow: column nowrap;
}

.carousel__slide {
    padding: 0px;
    width: 100%;
}

.carousel__prev,
.carousel__next {
    background-color: lightgray;
    box-sizing: content-box;
    border: 5px solid white;
}
.carousel__viewport {
    position: absolute;
    bottom: 0;
}
.temp {
    font-size: 26px;
}
.top {
    margin: 5px;
}
.bottom {
    margin: 5px;
}
</style>
