<template>
    <div class="app-models-list">
        <ul class="app-models-list-inner" v-if="models.length > 0">
            <template v-for="model in models" :key="model.id">
                <div class="app-models-list-item-inner" style="margin-top: 16px">
                    <app-button color="aqua" size="sm" variant="flat" @click="selectModelHandler(model)">
                        {{ model.name }}
                    </app-button>
                </div>
            </template>
        </ul>
    </div>
</template>

<script lang="ts" setup>
// * interfaces
import { Models } from "~/interfaces/models.interface";

// * store
import { useFiltersStore } from "~/store/filters.store";
import { useModelsStore } from "~/store/models.store";
import { useTrimsStore } from "~/store/trims.store";
import { useYearsStore } from "~/store/years.store";
const { addFilter, setActiveFilter } = useFiltersStore();
const { models } = useModelsStore();
const { findTrims } = useTrimsStore();
const { findYears } = useYearsStore();

// * methods
const selectModelHandler = (model: Models) => {
    const payload = {
        name: model.name,
        entity: {
            id: model.brand_id,
            name: "model",
        },
    };

    // addFilter(payload);
    findTrims(model.id)
        .then((response) => {
            if (response.length > 0) {
                setActiveFilter("trim");
            } else {
                findYears(model.id, "model")
                    .then(() => {
                        setActiveFilter("year");
                    })
                    .catch((error) => {
                        console.error(error);
                    });
            }
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
@import "~/assets/scss/components/app-models-list.scss";
</style>
