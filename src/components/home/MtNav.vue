<template functional>
    <div class="mt-nav">
        <div class="title">美团导航</div>
        <dl
            v-for="nav in props.mtNavList"
            :key="nav.id"
        >
            <dt>{{ nav.title }}</dt>
            <div class="nav-content">
                <dd 
                    v-for="item in nav.items"
                    :key="item"
                >
                    <a href="#">{{ item }}</a>
                </dd>
            </div>
        </dl>
    </div>
</template>

<script>
export default {
    props: {
        mtNavList: {
            type: Array,
            required: true
        }
    }
}
</script>

<style lang="less" scoped>
.mt-nav {
    font-weight: 500;
    color: #222;
    background-color: #fff;
    padding-bottom: 20px;
    .center();
    margin-top: 40px;
    .title {
        height: 44px;
        line-height: 44px;
        font-size: 16px;
        font-weight: 500;
        text-align: left;
        padding-left: 20px;
        padding-top: 6px;
    }
    dl {
        display: flex;
        dt {
            flex-shrink: 0;
            width: 100px;
            text-align: center;
            font-weight: 500;
            font-size: 14px;
            padding-top: 18px;
        }
        .nav-content {
            flex-grow: 1;
            margin-left: 15px;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            padding-top: 12px;
            padding-bottom: 5px;
            border-bottom: 1px solid @h-banner-border;
            dd {
                width: 100px;
                font-size: 12px;
                margin-bottom: 13px;
                margin-right: 5px;
                a { 
                    display: block;
                    width: 75px;
                    height: 18px;
                    line-height: 18px;
                    .textHidden();
                    color: #666;
                    &:hover {
                        color: @t-hover;
                    }
                }
            }
        }
    }
}
</style>
