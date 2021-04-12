<template>
    <h1>SVEAVÄDER</h1>
    <img src="../assets/swedenMap.png" height="500" width="187" alt="sweden map" /><br /><br />
    <div class="home">
        <p>Se vädret i</p>
        <menu-component class="box" />
        <button class="box" type="button" @click="$router.push('sun')">Nästa</button>
        <!-- <h1>{{ $store.state.city.name }}</h1> -->
    </div>
    <!-- <div>
        <input
            type="text"
            id="myInput"
            onkeyup="myFunction()"
            placeholder="Search for names.."
            title="Type in a name"
        />
    </div> -->
    <!-- <div>
        <ul id="myUL">
            <li><a href="#">Adele</a></li>
            <li><a href="#">Agnes</a></li>

            <li><a href="#">Billy</a></li>
            <li><a href="#">Bob</a></li>

            <li><a href="#">Calvin</a></li>
            <li><a href="#">Christina</a></li>
            <li><a href="#">Cindy</a></li>
        </ul>
    </div> -->
</template>

<script>
import MenuComponent from "../components/MenuComponent.vue"
//import Data from "../lib/Data.js"

export default {
    name: "Home",
    components: {
        MenuComponent,
    },
    // data() {
    //     return {
    //         city: Data.city,
    //     }
    // },
}
</script>

<!-- <script>
// function myFunction() {
//     var input, filter, ul, li, a, i, txtValue;
//     input = document.getElementById("myInput");
//     filter = input.value.toUpperCase();
//     ul = document.getElementById("myUL");
//     li = ul.getElementsByTagName("li");
//     for (i = 0; i < li.length; i++) {
//         a = li[i].getElementsByTagName("a")[0];
//         txtValue = a.textContent || a.innerText;
//         if (txtValue.toUpperCase().indexOf(filter) > -1) {
//             li[i].style.display = "";
//         } else {
//             li[i].style.display = "none";
//         }
//     }
// }
// </script> -->

<style>
#app {
    font-family: Open Sans Semibold;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: white;
}
body {
    background-image: linear-gradient(#002b50, #16374b);
    min-height: 100vh;
}
.box {
    width: 120px;
    height: 30px;
    border: 1px solid #999;
    font-size: 14px;
    background-color: #eee;
    border-radius: 5px;
    text-align: center;
    display: inline;
}
</style>
