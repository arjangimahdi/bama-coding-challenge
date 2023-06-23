<template>
    <div class="app-trims-list">
        <ul class="app-trims-list-inner" v-if="trims.length > 0">
            <template v-for="trim in trims" :key="trim.id">
                <div class="app-trims-list-item-inner" style="margin-top: 16px">
                    <app-button color="aqua" size="sm" variant="flat" @click="selectTrimHandler(trim)">
                        {{ trim.name }}
                    </app-button>
                </div>
            </template>
        </ul>
    </div>
</template>

<script lang="ts" setup>
// * interfaces
import { Trims } from "~/interfaces/trims.interface";

// * store
import { useFiltersStore } from "~/store/filters.store";
import { useTrimsStore } from "~/store/trims.store";
import { useYearsStore } from "~/store/years.store";
const { addFilter, setActiveFilter } = useFiltersStore();
const { trims } = useTrimsStore();
const { findYears } = useYearsStore();

// * methods
const selectTrimHandler = (trim: Trims) => {
    const payload = {
        name: trim.name,
        entity: {
            id: trim.model_id,
            name: "trim",
        },
    };

    findYears(trim.id, "trim")
        .then(() => {
            setActiveFilter("year");
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
@import "~/assets/scss/components/app-trims-list.scss";
</style>
