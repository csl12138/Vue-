<template>
    <header>
        <top-content />
        <search-content />
    </header>
</template>

<script>
import TopContent from "cmp/header/TopContent"
import SearchContent from "cmp/header/SearchContent"

export default {
    components: {
        TopContent,
        SearchContent
    }
}
</script>

<style lang="less">
@import "~styles/header/index.less";
</style>
