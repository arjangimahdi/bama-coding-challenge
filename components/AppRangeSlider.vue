<template>
    <div class="app-range-slider">
      <span>{{ min }}</span>
      <input type="range" class="app-range-slider-input mr-3 ml-3" @input="InputHandler" :min="min" :max="max" />
      <span>{{ _max }}</span>
    </div>
</template>

<script lang="ts" setup>
// * interfaces
interface Props {
    min: number;
    max: number;
    modelValue: string;
}

// * props
const props = defineProps<Props>();

// * computed properties
const _max = computed(() => {
  return props.max.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
})

// * emits
const emit = defineEmits(["update:modelValue"]);

// * methods
const InputHandler = (event: Event) => {
    emit("update:modelValue", (event.target as HTMLInputElement).value);
}
</script>

<style lang="scss">
.app-range-slider {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    &-input {
        -webkit-appearance: none;
        min-width: 250px;
        height: 100px;
        outline: none;
        -webkit-transition: 0.2s;
        transition: opacity 0.2s;
        position: relative;
        &::before {
            content: "";
            position: absolute;
            width: 100%;
            height: 2px;
            background: var(--theme-gray-200);
            top: 50%;
            transform: translateY(-50%);
        }

        &::-webkit-slider-thumb {
            -webkit-appearance: none;
            appearance: none;
            width: 25px;
            height: 25px;
            background: var(--theme-gray-100);
            border: 2px solid var(--theme-aqua-400);
            border-radius: 25px;
            cursor: pointer;
            position: relative;
            z-index: 10;
        }

        &::-moz-range-thumb {
            width: 25px;
            height: 25px;
            background: var(--theme-gray-100);
            position: relative;
            z-index: 10;
            border: 2px solid var(--theme-aqua-400);
            border-radius: 25px;
            cursor: pointer;
        }
    }
}
</style>
