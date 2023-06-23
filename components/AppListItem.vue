<template>
    <div class="app-list-item bg-gray-100">
        <div class="app-list-item-title text-sm text-gray-300">
            <span> <slot /> </span>
        </div>
        <app-button size="md" variant="plain" color="gray" square @click="emit('remove')">
            <Icon name="material-symbols:close" />
        </app-button>
    </div>
</template>

<script lang="ts" setup>
// * components
import AppButton from "./AppButton.vue";

// * emits
const emit = defineEmits(["remove"]);
</script>

<style lang="scss">
@import "~/assets/scss/components/app-list-item.scss";
</style>
