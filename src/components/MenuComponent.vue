<template>
    <div>
        <ul>
            <li v-for="city in cities" :key="city.name">{{ city.name }}</li>
        </ul>
    </div>
</template>

<script>
import CityList from "../lib/CityList.js"

export default {
    name: "MenuComponent",
    data() {
        return {
            cities: CityList,
        }
    },
}
</script>
