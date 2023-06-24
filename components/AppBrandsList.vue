<template>
    <div class="app-brands-list" v-if="data">
        <h4 class="text-lg weight-medium text-gray-500 mb-3">برند خود را انتخاب کنید</h4>

        <ul class="app-brands-list-inner">
            <template v-for="category in data" :key="category.id">
                <div class="app-brands-list-item-outer" v-if="category.brands?.length > 0">
                    <li class="app-brands-list-item text-aqua-300 text-md weight-bold mt-3">
                        {{ category.title }}
                    </li>
                    <template v-for="brand in category.brands" :key="brand.id">
                        <div class="app-brands-list-item-inner mt-3">
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
import { useBrandsStore } from "~/store/brands.store";
import { useModelsStore } from "~/store/models.store";
const { addFilter, setActiveFilter } = useFiltersStore();
const { fetchBrands } = useBrandsStore();
const { findModels } = useModelsStore();

// fetching brands that merged with their brandCategory
const { data } = await useAsyncData('brands', () => fetchBrands(brands, categories));

// * methods
const selectBrandHandler = (brand: Brands) => {
    const payload = {
        name: brand.name,
        entity: {
            id: brand.category_id,
            name: "brand",
        },
    };

    findModels(brand.id)
        .then(() => {
            setActiveFilter("model");
            addFilter(payload);
        })
        .catch((error) => {
            console.error(error);
        })
        .finally(() => {
            // process done
        });
};
</script>

<style lang="scss">
@import "~/assets/scss/components/app-brands-list.scss";
</style>
~/store/brands.store
