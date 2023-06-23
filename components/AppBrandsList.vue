<template>
    <div class="app-brands-list" v-if="brandsCategories">
        <ul class="app-brands-list-inner">
            <!-- TODO - fix flex issue -->
            <template v-for="category in brandsCategories" :key="category.id">
                <div class="app-brands-list-item-outer">
                    <li class="app-brands-list-item text-aqua-300 text-md weight-bold" style="margin-top: 16px">
                        {{ category.title }}
                    </li>
                    <template v-for="brand in category.brands" :key="brand.id">
                        <div class="app-brands-list-item-inner" style="margin-top: 16px">
                            <app-button color="aqua" size="sm" variant="flat" @click="selectBrandHandler(brand)">
                                {{ brand.name }}
                            </app-button>
                        </div>
                    </template>
                </div>
            </template>
        </ul>
    </div>
</template>

<script lang="ts" setup>
// * data
import { brands, brandCategories as categories } from "~/data";

// * interfaces
import { Brands } from "~/interfaces/brands.interface";

// * store
import { useFiltersStore } from "~/store/filters.store";
import { useBrandsListStore } from "~/store/brands-list.store";
const { addFilter } = useFiltersStore();
const { brandsCategories, fetchBrands } = useBrandsListStore();

// fetching brands that merged with their brandCategory
fetchBrands(brands, categories);

// * methods
const selectBrandHandler = (brand: Brands) => {
    const payload = {
        name: brand.name,
        entity: {
            id: brand.category_id,
            name: "brand",
        },
    };

    addFilter(payload)
};
</script>

<style lang="scss">
@import "~/assets/scss/components/app-brands-list.scss";
</style>
