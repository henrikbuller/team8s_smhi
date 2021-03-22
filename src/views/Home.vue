<template>
    <div class="home">
        <menu-component />
    </div>
</template>

<script>
import MenuComponent from "../components/MenuComponent.vue"

export default {
    name: "Home",
    components: {
        MenuComponent,
    },
}
</script>

<style scoped></style>
