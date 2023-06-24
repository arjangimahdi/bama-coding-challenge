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
@import '~/assets/scss/components/app-range-slider.scss';
</style>
