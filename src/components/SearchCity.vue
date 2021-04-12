<template>
    <div>
        <input
            type="text"
            id="Input"
            v-model="searchbox"
            @keyup="func"
            placeholder="Sök stad..."
            title="Skriv in en stad"
        />
    </div>
</template>

<script>
import CityList from "../lib/CityList.js"
//import myFunction from "../lib/SearchCity"

// function func() {
//     let input = document.getElementById("Input");
//     let filter = input.value.toUpperCase();
//     let list = CityList;
//     for (let i = 0; i < list.length; i++) {
//         let city = list[i].name;
//         if (city.toUpperCase() === filter.toUpperCase()) {
//             let data = list[i]
//             console.log("this is it: " + data)
//         }
//     }
// }

export default {
    name: "SearchCity",
    data() {
        return {
            cities: CityList,
            searchbox: "",
        }
    },
    watch: {
        searchbox() {
            // Data.city = this.selected + ""
            this.$store.commit("updateSelectedCity", this.searchbox)
        },
    },
}
</script>
