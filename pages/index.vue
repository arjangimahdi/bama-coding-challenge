<template>
    <div id="home" class="home">
        <div class="home-heading">
            <h1 class="home-heading-title text-xl weight-bold text-gray-500">ماشین حساب</h1>
            <div class="vertical-separator bg-gray-300"></div>
            <h2 class="home-heading-subtitle text-md weight-normal text-gray-400">محاسبه قیمت خودرو کارکرده</h2>
        </div>

        <div class="home-body">
            <aside class="home-body-sidebar">
                <p class="text-gray-400 text-md font-normal">
                    براسال
                    <span class="text-2xl weight-medium text-aqua-400">{{ _totalDealsCount }}</span>
                    معامله صورت گرفته
                </p>
                <div class="home-body-filters-list" style="margin-top: 10px">
                    <template v-for="filter in filters" :key="filter.index">
                        <app-list-item @remove="removeFilterHandler(filter)">
                            {{ filter.name }}
                        </app-list-item>
                    </template>
                </div>
            </aside>
            <section class="home-body-content" style="padding-right: 24px">
                <h4 class="text-lg weight-medium text-gray-500" style="margin-bottom: 30px">برند خود را انتخاب کنید</h4>
                <app-brands-list />
            </section>
        </div>
    </div>
</template>

<script lang="ts" setup>
// * data
import { totalDealsCount } from "~/data";

// * components
import AppListItem from "~/components/AppListItem.vue";
import AppBrandsList from "~/components/AppBrandsList.vue";

// * store
import { useFiltersStore } from "~/store/filters.store";
const { filters, removeFilter } = useFiltersStore();

// * computed properties
const _totalDealsCount = computed(() => {
    return totalDealsCount.toLocaleString();
});

// * methods
const removeFilterHandler = ({ index }) => {
    removeFilter(index);
};
</script>

<style lang="scss">
@import "~/assets/scss/pages/home.scss";
</style>
