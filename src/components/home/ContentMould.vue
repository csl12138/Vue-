<template>
    <div :class="['content-wrapper', className]">
        <div class="top-nav" :style="topNavBg">
            <dl class="nav">
                <template
                    v-for="nav in navList"
                    
                 >
                    <dt :key="nav.title">
                        {{ nav.title }}
                    </dt>
                    <dd 
                        v-for="(item, index) in nav.items"
                        :key="item.name"
                        :class="{active: index === activeIndex}"
                        @mouseenter="handleMouseenter(index, item.type)"
                    >
                        {{ item.name }}
                    </dd>
                </template>
            </dl>
            <div class="more">
                <span>更多</span>
                <i class="el-icon-arrow-right"></i>
            </div>
        </div>
        <slot name="content"></slot>
    </div>
</template>

<script>
export default {
    props: {
        navList: {
            type: Array,
            required: true
        },
        topNavBg: Object,
        className: String,
        triggerMouseenter: {
            type: Boolean,
            default: true
        }
    },
    data () {
        return {
            activeIndex: 0
        }
    },
    methods: {
        handleMouseenter (index, type) {
            if (this.triggerMouseenter) {
                this.activeIndex = index;
                this.$emit("updateContent", type);
            }
        }
    }
}
</script>

<style lang="less" scoped>
.content-wrapper {
    .center();
    margin-top: 40px;
    .top-nav {
        padding: 10px 20px;
        background-image: linear-gradient(to right, rgb(250, 60, 104) 2%, rgb(254, 70, 77) 97%);
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #fff;
        .nav {
            display: flex;
            align-items: center;
            dt {
                font-family: "YouYuan" !important;
                font-size: 18px;
                margin-right: 20px;
            }
            dd {
                margin-right: 15px;
                font-size: 14px;
                cursor: pointer;
                position: relative;
                &.active::after {
                    content: "";
                    position: absolute;
                    width: 0;
                    height: 0;
                    left: 50%;
                    transform: translateX(-50%);
                    bottom: -12px;
                    border: 9px solid transparent;
                    border-bottom-color: #fff;
                }
            }
        }
        .more {
            font-size: 14px;
            cursor: pointer;
        }
    }
}
</style>
