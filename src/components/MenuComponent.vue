<template>
    <div>
        <select v-model="selected">
            <option v-for="city in cities" :value="city" :key="city.name">
                {{ city.name }}
            </option>
        </select>
        <!-- <h1>{{ selected.name }}</h1> -->
    </div>
</template>

<script>
//import Data from "../lib/Data.js"
import CityList from "../lib/CityList.js"

export default {
    name: "MenuComponent",
    data() {
        return {
            cities: CityList,
            selected: CityList[0],
        }
    },
    watch: {
        selected() {
            // Data.city = this.selected + ""
            this.$store.commit("updateSelectedCity", this.selected)
        },
    },
}
</script>
