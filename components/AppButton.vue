<template>
    <button class="app-button" :class="[`size-${size}`, `variant-${variant}`]" :style="colorVariables">
        <slot />
    </button>
</template>

<script lang="ts" setup>
// * types
import { Colors } from "~/types/colors.type";
import { Sizes, Variants } from "~/types/app-button.type";
// * interfaces
interface Props {
    size: Sizes;
    color: Colors;
    variant: Variants;
}
// * props
const props = withDefaults(defineProps<Props>(), {
    size: "md",
    color: "aqua",
    variant: "default",
});

const colorVariables = computed(() => {
    return {
        "--btn-primary-color": `var(--theme-${props.color}-300)`,
        "--btn-accent-color": `var(--theme-${props.color}-100)`,
    };
});
</script>

<style lang="scss">
.app-button {
    color: var(--theme-gray-500);
    &.size {
        &-sm {
            border-radius: 3px;
            font-size: 0.75rem;
            min-width: 45px;
            padding: 2px 8px;
        }
        &-md {
            border-radius: 5px;
            font-size: 0.875rem;
            min-width: 80px;
            padding: 6px 10px;
        }
        &-lg {
            border-radius: 8px;
            font-size: 1rem;
            min-width: 100px;
            padding: 8px 12px;
        }
    }
    &.variant {
        &-outlined {
            background: transparent;
            color: var(--btn-primary-color);
            border: 1px solid var(--btn-primary-color);
        }
        &-flat {
            background: transparent;
            color: var(--theme-gray-300);
            border: 1px solid transparent;
            &:hover {
                color: var(--theme-gray-400);
                border: 1px solid var(--btn-primary-color);
            }
        }
        &-default {
            border: none;
            color: white;
            background: var(--btn-primary-color);
        }
    }

    &:hover {
        cursor: pointer;
    }
}
</style>
~/types/colors.type~/types/app-button.type