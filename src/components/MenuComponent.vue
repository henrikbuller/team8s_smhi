<template>
    <div>
        <select class="box" v-model="selected">
            <option v-for="city in cities" :value="city" :key="city.name">{{ city.name }}</option>
        </select>
    </div>
</template>

<script>
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
            this.$store.commit("updateSelectedCity", this.selected)
        },
    },
}
</script>
