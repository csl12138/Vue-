<template>
    <div class="near-store-wrapper">
        <h4>附近商家</h4>
        <div class="content">
            <near-store-card 
                v-for="store in data"
                :key="store.id"
                :perCardData="store"
            />
        </div>
    </div>
</template>

<script>
import NearStoreCard from "cmp/detail/NearStoreCard"

export default {
    props: {
        data: {
            type: Array,
            required: true
        }
    },
    components: {
        NearStoreCard
    }
}
</script>

<style lang="less">
@import "~styles/detail/nearStore";
</style>
