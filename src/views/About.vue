<template>
    <div>
        <h3>Basic: {{ value1 }}</h3>
        <Slider v-model="value1" />

        <h3>Input: {{ value2 }}</h3>
        <InputText v-model.number="value2" />
        <Slider v-model="value2" />

        <h3>Step: {{ value3 }}</h3>
        <Slider v-model="value3" :step="20" />

        <h3>Range: {{ value4 }}</h3>
        <Slider v-model="value4" :range="true" />

        <h3>Vertical: {{ value5 }}</h3>
        <Slider v-model="value5" orientation="vertical" />
    </div>
</template>

<script>
import Slider from "primevue/slider"

export default {
    data() {
        return {
            value1: null,
            value2: 50,
            value3: 20,
            value4: [20, 80],
            value5: 50,
        }
    },
    components: {
        Slider,
    },
}
</script>

<style scoped>
.p-slider-horizontal,
.p-inputtext {
    width: 14rem;
}
.p-slider-vertical {
    height: 14rem;
}
</style>
