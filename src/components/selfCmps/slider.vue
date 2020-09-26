<template>
    <div class="slider-wrapper"
         :style="oneStyle"
         @mouseenter="handleMouseenter"
         @mouseleave="handleMouseleave"
    >
        <ul
            :style="[{width: getUlWidth}, ulStyle]"
            @transitionend="ulTransitionend"
        >
            <li
                v-for="(img, index) in getImgList"
                :key="img.id"
                :class="{
                    opacity: mode === 'opacity',
                    translate: mode === 'translate',
                    active: activeIndex === index
                }"
            >
                <a href="#">
                    <img :src="img.url" :style="oneStyle" alt="">
                </a>
            </li>
        </ul>
        <div class="left-btn" @click="prevClick">
            <i class="el-icon-arrow-left"></i>
        </div>
        <div class="right-btn" @click="nextClick"> 
            <i class="el-icon-arrow-right"></i>
        </div>
        <div class="circle-container">
            <span
                v-for="item in imgList.length"
                :key="item"
                :class="{active: item - 1 === (activeIndex + imgList.length) % 5}"
                @mouseenter="spanMouseenter(item - 1)"
            >
            </span>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        imgList: {
            type: Array,
            required: true
        },
        aloneWidth: {
            type: Number,
            required: true
        },
        aloneHeight: {
            type: Number,
            required: true
        },
        mode: {
            type: String,
            default: "opacity"
        },
        duration: {
            type: Number,
            default: 3000
        }
    },
    data () {
        return {
            ulStyle: {
                transform: "translateX(0)"
            },
            oneStyle: {
                width: null,
                height: null
            },
            activeIndex: 0,
            timer: null,
            lock: false
        }
    },
    created () {
        this.oneStyle.width = this.aloneWidth + 'px';
        this.oneStyle.height = this.aloneHeight + 'px';
        if (this.mode === "translate") {
            this.ulStyle.transform = `translateX(${-this.aloneWidth}px)`;
        }
    },
    mounted () {
        this.autoMove();
    },
    computed: {
        getUlWidth () {
            let isOpacity = null;
            if (this.mode === "opacity") {
                isOpacity = true;
            } else if (this.mode === "translate") {
                isOpacity = false;
            }
                return isOpacity ? this.aloneWidth + 'px' : this.aloneWidth * (this.imgList.length + 2) + "px";
        },
        getImgList () {
            let newImgList = null;
            if (this.mode === "opacity") {
                newImgList = this.imgList;
            } else if (this.mode === "translate") {
                newImgList = [...this.imgList];
                const firstImg = { ...this.imgList[0] };
                firstImg.id = Math.random();
                const lastImg = { ...this.imgList[this.imgList.length - 1] };
                lastImg.id = Math.random();
                newImgList.push(firstImg);
                newImgList.unshift(lastImg);
            }
            return newImgList;
        }
    },
    methods: {
        autoMove () {
            if (this.timer) {
                return;
            }
            this.timer = setInterval(() => {
                const { imgList, mode, ulStyle, aloneWidth } = this;
                this.activeIndex++;
                if (mode === "opacity") {
                    if (this.activeIndex > imgList.length - 1) {
                        this.activeIndex = 0;
                    }
                } else if (mode === "translate") {
                    ulStyle.transition = `transform .3s ease-in-out`;
                    ulStyle.transform = `translateX(${-this.activeIndex * aloneWidth - aloneWidth}px)`;
                }
            }, this.duration)
        },
        handleMouseenter () {
            clearInterval(this.timer);
            this.timer = null;
        },
        handleMouseleave () {
            this.autoMove();
        },
        prevClick () {
            if (this.mode === "opacity") {
                this.activeIndex--;
                if (this.activeIndex < 0) {
                    this.activeIndex = this.imgList.length - 1;
                }
            } else if (this.mode === "translate") {
                if (!this.lock) {
                    this.lock = true;
                    this.activeIndex--;
                    this.ulStyle.transition = `transform .3s ease-in-out`;
                    this.ulStyle.transform = `translateX(${-this.activeIndex * this.aloneWidth - this.aloneWidth}px)`;
                }
            }
        },
        nextClick () {
            if (this.mode === "opacity") {
                this.activeIndex++;
                if (this.activeIndex > this.imgList.length - 1) {
                    this.activeIndex = 0;
                }
            } else if (this.mode === "translate") {
                if (!this.lock) {
                    this.lock = true;
                    this.activeIndex++;
                    this.ulStyle.transition = `transform .3s ease-in-out`;
                    this.ulStyle.transform = `translateX(${-this.activeIndex * this.aloneWidth - this.aloneWidth}px)`;
                }
            }
        },
        ulTransitionend () {
            if (this.mode !== "translate") {
                return;
            }
            if (this.activeIndex >= this.imgList.length) {
                this.activeIndex = 0;
                this.ulStyle.transition = "";
                this.ulStyle.transform = `translateX(-${this.aloneWidth}px)`;
            } else if (this.activeIndex < 0) {
                this.activeIndex = this.imgList.length - 1;
                this.ulStyle.transition = "";
                this.ulStyle.transform = `translateX(${-this.imgList.length * this.aloneWidth}px)`;
            }
            this.lock = false;
        },
        spanMouseenter (index) {
            this.activeIndex = index;
            if (this.mode === "translate") {
                this.ulStyle.transition = `transform .3s ease-in-out`;
                this.ulStyle.transform = `translateX(${-this.activeIndex * this.aloneWidth - this.aloneWidth}px)`;
            }
        }
    }
}
</script>

<style lang="less" scoped>
.slider-wrapper {
    overflow: hidden;
    position: relative;
    &:hover .left-btn,
    &:hover .right-btn{
        opacity: 1;
    }
    ul {
        position: relative;
        height: 100%;
        &::after {
            content: "";
            clear: both;
            display: block;
        }
        li {
            &.translate {
                float: left;
            }
            &.opacity {
                position: absolute;
                left: 0;
                top: 0;
                opacity: 0;
                transition: opacity .6s ease-in-out;
                &.active {
                    opacity: 1;
                }
            }
            a {
                display: block;
            }
        }
    }
    .left-btn,
    .right-btn {
        width: 40px;
        height: 40px;
        text-align: center;
        line-height: 40px;
        border-radius: 50%;
        background-color: rgba(0, 0, 0, .4);
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        transition: opacity .3s ease-in-out, background-color .15s ease-in-out;
        opacity: 0;
        cursor: pointer;
        .el-icon-arrow-left,
        .el-icon-arrow-right {
            color: #fff;
            font-weight: 800;
            font-size: 18px;
        }
        &:hover {
            background-color: rgba(0, 0, 0, .7);
        }
    }
    .left-btn {
        left: 15px;
    }
    .right-btn {
        right: 15px;
    }
    .circle-container {
        position: absolute;
        bottom: 18px;
        width: 100%;
        display: flex;
        justify-content: center;
        span {
            width: 10px;
            height: 2px;
            margin-right: 10px;
            background-color: rgba(255, 255, 255, .45);
            &.active {
                background: #fff;
            }
        }
    }
}
</style>
