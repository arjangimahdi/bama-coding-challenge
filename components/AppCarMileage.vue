<template>
    <div class="app-card-mileage">
        <h4 class="text-lg weight-medium text-gray-500 mb-7">کارکرد ماشین را وارد کنید</h4>
        <div class="app-card-mileage-inner">
            <app-input
                v-model="mileage"
                placeholder="میزان مسافت کارکرد ماشین"
                type="text"
                size="sm"
                @input="changeCurrencyMask"
                @change="addMileageFilter"
            >
                <template #append> کیلومتر </template>
            </app-input>

            <app-range-slider
                min="0"
                max="400000"
                v-model="mileage"
                @change="addMileageFilter"
                @input="changeCurrencyMask"
            />
        </div>

        <div class="app-card-mileage-button">
            <app-button variant="default" size="md" color="aqua"> ادامه </app-button>
        </div>
    </div>
</template>

<script lang="ts" setup>
// * store
import { useFiltersStore } from "~/store/filters.store";
const { addFilter, findFilter, updateFilter } = useFiltersStore();

// * refs
const mileage = ref<string>("");

// watchers
watch(mileage, (newMileage) => {
    mileage.value = newMileage?.toString().replace(/[^0-9$.,]/g, "");
});

// * methods
const addCurrencyMask = (value: string) => {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
const removeCurrencyMask = (value: string) => {
    return value.toString().replace(/,/g, "");
};
const changeCurrencyMask = () => {
    mileage.value = removeCurrencyMask(mileage.value);
    mileage.value = addCurrencyMask(mileage.value);
};
const addMileageFilter = () => {
    const filter = findFilter("mileage");

    const payload = {
        name: mileage.value,
        entity: {
            id: 1,
            name: "mileage",
        },
    };
    if (filter) {
        updateFilter("mileage", payload);
    } else {
        addFilter(payload);
    }
};
</script>

<style lang="scss">
@import "~/assets/scss/components/app-car-mileage.scss";
</style>
