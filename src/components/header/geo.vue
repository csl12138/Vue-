<template>
    <div class="left">
        <div class="geo">
            <i class="el-icon-location"></i>
            {{ position }}
            <router-link class="change-city" :to="{name: 'changeCity'}">切换城市</router-link>
            <div class="near">
                [
                    <a href="#">泸县</a>
                    <a href="#">合江县</a>
                    <a href="#">赤水</a>
                ]
            </div>
        </div>
        <div class="login-box">
            <div class="unlogin" v-if="!isLogin">
                <router-link class="red" :to="{name: 'login'}">立即登录</router-link>
                <router-link :to="{name: 'register'}">注册</router-link>
            </div>
             <div class="logined" v-else>
                <span class="red">{{ userName }}</span>
                <span @click="onlogout">退出登录</span>
             </div>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex"
import cookie from "@/utils/cookie"

export default {
    computed: {
        ...mapState(["position", "isLogin"]),
        userName () {
            return cookie.get("user");
        }
    },
    methods: {
        onlogout () {
            this.$store.commit("logout");
            cookie.remove("user");
        }
    }
}
</script>
