<template>
    <div class="login-wrapper">
        <div class="logo">
            <router-link :to="{name: 'home'}">
                <img src="//s0.meituan.net/bs/file/?f=fe-sso-fs:build/assets/logo.6a89007.png" alt="">
            </router-link>
        </div>
        <div class="content">
            <div class="left-img">
                <img src="//s0.meituan.net/bs/file/?f=fe-sso-fs:build/page/static/banner/www.jpg" alt="">
            </div>
            <div class="form">
                <div class="tips" v-if="errorBoxShow">
                    <i class="el-icon-error"></i>
                    请输入账号和密码！
                </div>
                <p class="account">账号登录</p>
                <input type="text" placeholder="请输入账号" v-model="account">
                <input type="password" placeholder="请输入密码" v-model="pwd">
                <p class="forget">忘记密码？</p>
                <button @click="onsubmitlogin">登录</button>
                <p class="register">
                    还没有账号？
                    <router-link :to="{name: 'register'}">免费注册</router-link>
                </p>
                <p class="title"></p>
                <div class="other-login">
                    <span class="qq"></span>
                    <span class="wb"></span>
                </div>
            </div>
        </div>
        <footer>
            ©2020 美团网团购 meituan.com 京ICP证070791号 京公网安备11010502025545号
        </footer>
    </div>
</template>

<script>
import cookie from "@/utils/cookie"

export default {
    data () {
        return {
            pwd: "",
            account: "",
            errorBoxShow: false
        }
    },
    methods: {
        onsubmitlogin () {
            if (!this.pwd || !this.account) {
                this.errorBoxShow = true;
                return;
            }
            this.$axios.get("/api/meituan/login", {
                baseURL: "http://open.duyiedu.com",
                params: {
                    userName: this.account,
                    password: this.pwd,
                    appkey: "csl1_1590830311858"
                }
            }).then(resp => {
                if (resp.status === "success") {
                    cookie.set('user', this.account, 259200);
                    this.$store.commit("login");
                    this.$router.go(-1);
                } else {
                    alert(resp.msg)
                }
            })
        }
    }
}
</script>

<style lang="less">
@import "~styles/login/index";
</style>
