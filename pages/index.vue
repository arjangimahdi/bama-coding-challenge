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
            <section class="home-body-content">
                <div class="home-body-content-inner" style="padding-right: 20px">
                    <app-brands-list v-if="activeFilter == 'brand'" />
                    <app-models-list v-if="activeFilter == 'model'" />
                    <app-trims-list v-if="activeFilter == 'trim'" />
                    <app-years-list v-if="activeFilter == 'year'" />
                </div>

                <p class="home-body-content-paragraph text-sm text-gray-300">
                    قیمت خودرو ها براسال پایش، تجمیع و تحلیل قیمت های اعلام شده توسط نمایندگی ها ، قیمت معاملات انجام
                    شده در بیش از 150 نمایشگاه فعال سطح کشور و مراکز خرید و قروش پایتخت و نیز بررسی های میدانی در بازار
                    خودرو به صورت روزانه استخراج می شود.
                </p>
            </section>
        </div>
    </div>
</template>

<script lang="ts" setup>
// * data
import { totalDealsCount } from "~/data";

// * interfaces
import { Filters } from "~/interfaces/filters.interface";

// * components
import AppListItem from "~/components/AppListItem.vue";
import AppBrandsList from "~/components/AppBrandsList.vue";
import AppModelsList from "~/components/AppModelsList.vue";
import AppTrimsList from "~/components/AppTrimsList.vue";
import AppYearsList from "~/components/AppYearsList.vue";

// * store
import { useFiltersStore } from "~/store/filters.store";
const { filters, removeFilter, activeFilter, setActiveFilter } = useFiltersStore();

setActiveFilter("brand");

// * computed properties
const _totalDealsCount = computed(() => {
    return totalDealsCount.toLocaleString();
});

// * methods
const removeFilterHandler = (filter: Filters) => {
    setActiveFilter(filter.entity.name);

    removeFilter(filter.index);
};
</script>

<style lang="scss">
@import "~/assets/scss/pages/home.scss";
</style>
