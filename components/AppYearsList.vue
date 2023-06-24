<template>
    <div class="app-years-list">
        <h4 class="text-lg weight-medium text-gray-500 mb-3">سال ساخت را انتخاب کنید</h4>

        <ul class="app-years-list-inner" v-if="years.length > 0">
            <template v-for="year in years" :key="year.id">
                <div class="app-years-list-item-inner mt-3">
                    <app-button color="aqua" size="sm" variant="flat" @click="selectTrimHandler(year)">
                        {{ year.year }}
                    </app-button>
                </div>
            </template>
        </ul>
    </div>
</template>

<script lang="ts" setup>
// * interfaces
import { Years } from "~/interfaces/years.interface";

// * store
import { useFiltersStore } from "~/store/filters.store";
import { useYearsStore } from "~/store/years.store";
const { addFilter, setActiveFilter } = useFiltersStore();
const { years } = useYearsStore();

// * methods
const selectTrimHandler = (year: Years) => {
    const payload = {
        name: year.year,
        entity: {
            id: year.id,
            name: "year",
        },
    };

    setActiveFilter("year");
    addFilter(payload);
};
</script>

<style lang="scss">
@import "~/assets/scss/components/app-years-list.scss";
</style>
