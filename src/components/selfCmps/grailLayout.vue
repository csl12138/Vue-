<template>
    <div class="grail-wrapper" :style="wrapperStyle">
        <div class="main-wrapper">
            <div class="main" :style="getFullStyle.main" >
                <slot name="main"></slot>
            </div>
        </div>
        <div class="left" :style="getFullStyle.left">
            <slot name="left"></slot>
        </div>
        <div class="right" :style="getFullStyle.right">
            <slot name="right"></slot>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        leftWidth: {
            type: String,
            required: true
        },
        rightWidth: {
            type: String,
            required: true
        },
        wrapperStyle: {
            type: Object,
            required: true
        }
    },
    computed: {
        getFullStyle () {
            const leftWidth = this.leftWidth;
            const rightWidth = this.rightWidth;
            const fullStyle = {
                left: {
                    width: leftWidth
                },
                right: {
                    width: rightWidth,
                    'margin-left': `-${rightWidth}`
                },
                main: {
                    'margin-right': rightWidth,
                    'margin-left': leftWidth
                }
            };
            return fullStyle;
        }
    }
}
</script>

<style lang="less" scoped>
.grail-wrapper {
    &::after {
        content: "";
        display: block;
        clear: both;
    }
    .main-wrapper {
        width: 100%;
        float: left;
    }
    .left {
        float: left;
        margin-left: -100%;
    }
    .right {
        float: left;
    }
}

</style>
