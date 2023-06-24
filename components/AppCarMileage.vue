<template>
    <div class="app-card-mileage">
        <h4 class="text-lg weight-medium text-gray-500 mb-3">کارکرد ماشین را وارد کنید</h4>
        <div class="app-card-mileage-inner">
            <app-input
                v-model="mileage"
                placeholder="میزان مسافت کارکرد ماشین"
                type="text"
                size="sm"
                @input="changeCurrencyMask"
            >
                <template #append> کیلومتر </template>
            </app-input>

            <app-range-slider min="0" max="400000" v-model="mileage" @input="changeCurrencyMask" />
        </div>

        <div class="app-card-mileage-button">
            <app-button variant="default" size="md" color="aqua"> ادامه </app-button>
        </div>
    </div>
</template>

<script lang="ts" setup>
// * refs
const mileage = ref<string | undefined>();

// watchers
watch(mileage, (newMileage) => {
    mileage.value = newMileage?.toString().replace(/[^0-9$.,]/g, "");
});

// * methods
const addCurrencyMask = (value: string | undefined) => {
    if (value) {
        return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
};
const removeCurrencyMask = (value: string | undefined) => {
    if (value) {
        return value.toString().replace(/,/g, "");
    }
};
const changeCurrencyMask = () => {
    mileage.value = removeCurrencyMask(mileage.value);
    mileage.value = addCurrencyMask(mileage.value);
};
</script>

<style lang="scss">
.app-card-mileage {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    &-button {
        button {
            margin-right: auto;
        }
    }
    &-inner {
        width: 100%;
        height: 70%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
}
</style>
