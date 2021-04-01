<template>
    <div>
        <div class="layout-content">
            <div class="content-section implementation">
                <div class="card">
                    <Slider v-model="value" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Slider from "primevue/slider/sfc"

export default {
    data() {
        return {
            value: null,
        }
    },
    // props: {
    //     value: Number,
    // },
    components: {
        Slider,
    },
}
</script>

<style>
.p-slider-horizontal,
.p-inputtext {
    width: 14rem;
    height: 14rem;
}
.p-slider-vertical {
    height: 14rem;
}
.layout-content {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
