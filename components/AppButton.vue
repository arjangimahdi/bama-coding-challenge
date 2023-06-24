<template>
    <button
        class="app-button"
        :style="colorVariables"
        :class="[`size-${size}`, `variant-${variant}`, square ? 'square' : '']"
    >
        <slot />
    </button>
</template>

<script lang="ts" setup>
// * types
import { Sizes, Variants, Colors } from "~/types/app-button.type";

// * interfaces
interface Props {
    size: Sizes;
    color: Colors;
    square?: boolean;
    variant: Variants;
}

// * props
const props = withDefaults(defineProps<Props>(), {
    size: "md",
    color: "aqua",
    square: false,
    variant: "default",
});

// * computed properties
const colorVariables = computed(() => {
    return {
        "--btn-primary-color": `var(--theme-${props.color}-300)`,
        "--btn-accent-color": `var(--theme-${props.color}-100)`,
    };
});
</script>

<style lang="scss">
@import "~/assets/scss/components/app-button.scss";
</style>
