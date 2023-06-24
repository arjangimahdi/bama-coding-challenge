<template>
    <div id="home" class="home">
        <div class="home-heading mb-7">
            <h1 class="text-xl weight-bold text-gray-500">ماشین حساب</h1>
            <div class="vertical-separator mr-3 ml-3 bg-gray-300"></div>
            <h2 class="text-md weight-normal text-gray-400">محاسبه قیمت خودرو کارکرده</h2>
        </div>

        <div class="home-body">
            <aside class="home-body-sidebar ml-5">
                <p class="text-gray-400 text-md font-normal">
                    براسال
                    <span class="text-2xl weight-medium text-fuchsia-400">{{ _totalDealsCount }}</span>
                    معامله صورت گرفته
                </p>
                <div class="home-body-filters-list mt-3">
                    <template v-for="filter in filters" :key="filter.index">
                        <app-list-item @remove="removeFilterHandler(filter)">
                            {{ filter.name }}
                        </app-list-item>
                    </template>
                </div>
            </aside>
            <section class="home-body-content">
                <div class="home-body-content-inner mb-6 pr-6">
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
