<template>
    <div
        class="app-input bg-element_scheme_background text-element_scheme_placeholder"
        :class="[`size-${size}`, hasAppend ? 'has-append' : '', hasPrepend ? 'has-prepend' : '']"
    >
        <div v-if="hasPrepend" class="app-input-prepend">
            <slot name="prepend" />
        </div>

        <input
            :id="id"
            :type="type"
            autocomplete="off"
            :value="modelValue"
            @input="InputHandler"
            :placeholder="placeholder"
            class="bg-element_scheme_background text-element_scheme_text placeholder-element_scheme_placeholder"
        />

        <div v-if="hasAppend" class="app-input-append">
            <slot name="append" />
        </div>
    </div>
</template>

<script setup lang="ts">
// * interfaces
interface Props {
    id?: string;
    type?: string;
    size?: string;
    modelValue: string;
    placeholder?: string;
}

// * props
withDefaults(defineProps<Props>(), {
    type: "text",
    size: "md",
});

// * slots
const slots = useSlots();

// * emits
const emit = defineEmits(["update:modelValue", "append-click", "prepend-click"]);

// * computed properties
const hasAppend = computed(() => !!slots.append);
const hasPrepend = computed(() => !!slots.prepend);

// * methods
function InputHandler(event: Event) {
    emit("update:modelValue", (event.target as HTMLInputElement).value);
}
</script>

<style lang="scss">
@import "~/assets/scss/components/app-input.scss";
</style>
