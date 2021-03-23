<template>
    <div>
        <select v-model="selected">
            <option v-for="city in cities" :value="city" :key="city.name">{{ city.name }}</option>
        </select>
        <h1>{{ selected }}</h1>
    </div>
</template>

<script>
import Data from "../lib/Data.js"
import CityList from "../lib/CityList.js"

export default {
    name: "MenuComponent",
    data() {
        return {
            cities: CityList,
            selected: {},
        }
    },
    watch: {
        selected() {
            Data.city = this.selected + ""
            console.log(Data.city)
        },
    },
}
</script>
