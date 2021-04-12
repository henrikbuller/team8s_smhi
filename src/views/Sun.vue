<template>
    <div class="mainsun">
        <navbar />
        <p class="top">12:00</p>
        <ve-progress
            :progress="(value * 100) / 24"
            color="white"
            :thickness="1"
            empty-thickness="1%"
            dash="24 3"
            :size="200"
            dot="10% #FFD604"
            :angle="90"
        >
            <div class="middle" style="display: flex; flex-direction: column">
                <div id="symbol">
                    <img
                        :src="imgUrl"
                        alt="a weather symbol"
                        style="flex: 1; height: 100px; justify-content: center; align-items: center"
                    />
                </div>
                <div
                    id="currentTime"
                    style="flex: 1; height: 100px; justify-content: center; align-items: center; font-size: 28px"
                >
                    {{ sortedDateObjects[currentSlide][value].time }}
                </div>
            </div>
        </ve-progress>
        <p class="bottom">00:00</p>
        <p class="sun">
            <img src="../assets/sun_rise_set.png" alt="sunrise" style="height: 10px" />
            {{ sortedDateObjects[currentSlide][0].sunrise }} | {{ sortedDateObjects[currentSlide][0].sunset }}
            <img src="../assets/sun_rise_set.png" alt="sunrise" style="height: 10px" />
        </p>
        <p class="sun-hours">Antal soltimmar: <br />{{ sortedDateObjects[currentSlide][0].sunDuration }}h</p>

        <Slider v-model="value" :min="1" :max="23" @change="updateData" style="margin: 10%" />
        <Carousel
            :items-to-show="1"
            :wrap-around="false"
            :currentSlide="currentSlide"
            :settings="settings"
            style="font-family: Open Sans Regular; margin: 15px"
            @click="carouselClickHandler($event)"
        >
            <Slide
                class="carousel__item"
                v-for="date in sortedDateObjects"
                :key="date.name"
                :currentSlide="currentSlide"
            >
                <div class="date">
                    {{ date[0].name }} <br />
                    {{ date[0].date }} {{ date[0].month }}
                </div>
                <div class="temp">{{ date[value].temperature }}°C</div>
                <div
                    style="
                        overflow-x: hidden;
                        width: 100%;
                        margin-bottom: 0px;
                        position: absolute;
                        bottom: 0;
                        display: flex;
                        justify-content: space-between;
                    "
                >
                    <div style="font-size: 14px; margin-left: 1em">
                        L:{{ sortedDateObjects[currentSlide][value].lowest }}°
                    </div>
                    <div style="font-size: 14px; margin-right: 1em">
                        H:{{ sortedDateObjects[currentSlide][value].lowest }}°
                    </div>
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
import Slider from "primevue/slider"
import { VeProgress } from "vue-ellipse-progress"
import "vue3-carousel/dist/carousel.css"
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel"
import "vue3-carousel/dist/carousel.css"
import DateList from "../lib/DateList.js"
import Navbar from "../components/Navbar.vue"

//Binds the slider to current time
function getSliderPosition() {
    const date = new Date()
    return date.getHours()
}

export default {
    name: "Current temperature",
    data() {
        return {
            currentTemp: {},
            currentWeatherSymbol: {},
            sortedDateObjects: [],
            imgUrl: "",
            value: getSliderPosition(),
            timestamp: "",
            dates: DateList,
            sunrise: "",
            sunset: "",
            sunDuration: "",
            currentSlide: 0,
            settings: {
                snapAlign: "center",
            },
            time: "",
            dayLength: "",
        }
    },
    methods: {
        async updateData() {
            let values = await TemperatureService.updateWeatherData(this.$store.state.city, this.value)

            //Call current weather symbol
            this.currentWeatherSymbol = values.currentWeatherSymbol
            this.imgUrl = WeatherSymbol.setWeatherSymbol(this.currentWeatherSymbol)
            this.calculateTime()
        },
        calculateTime: function () {
            const today = new Date()
            let time = today.getHours()

            if (this.value > 1) {
                time = time + this.value - 1
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

        carouselClickHandler() {
            // Sets time to noon on the next slide
            this.value = 12
            if (this.currentSlide >= 10) {
                return
            }
            // keeps count of the current slide index
            this.currentSlide += 1
            console.log(this.currentSlide)
        },
        getDayLength() {
            return this.sortedDateObjects[this.currentSlide].length
        },
        getHour() {
            const today = new Date()
            let time = today.getHours()
            return time
        },
    },
    components: {
        Slider,
        Carousel,
        Slide,
        Pagination,
        Navigation,
        VeProgress,
        Navbar,
    },
    async created() {
        let values = await TemperatureService.updateWeatherData(this.$store.state.city, this.value)
        this.currentTemp = values.currentTemp
        this.sortedDateObjects = values.sortedDateObjects
        this.currentWeatherSymbol = values.currentWeatherSymbol
        this.imgUrl = WeatherSymbol.setWeatherSymbol(this.currentWeatherSymbol)
        this.calculateTime()
        console.log("klockan: ", this.value)
    },

    watch: {
        async currentTemp() {
            let values = await TemperatureService.updateWeatherData(this.$store.state.city, this.value)
            this.currentTemp = values.currentTemp
            this.currentWeatherSymbol = values.currentWeatherSymbol
            this.imgUrl = WeatherSymbol.setWeatherSymbol(this.currentWeatherSymbol)
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
    box-sizing: border-box;
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
