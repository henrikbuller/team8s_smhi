<template>
    <div>
        <Slider v-model="value" />
    </div>
</template>

<script>
import Slider from "primevue/slider"

export default {
    data() {
        return {
            value: null,
        }
    },
    components: {
        Slider,
    },
}
</script>

<style>
.p-slider-horizontal,
.p-inputtext {
    width: 14rem;
}

.p-slider-vertical {
    height: 14rem;
}
</style>
