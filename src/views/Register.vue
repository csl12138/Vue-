<template>
    <div class="register-wrapper">
        <header>
            <div class="header-content">
                <router-link :to="{name: 'home'}">
                    <img src="//s0.meituan.net/bs/file/?f=fe-sso-fs:build/assets/logo.6a89007.png" alt="">
                </router-link>
                <div class="right">
                    <span>已有美团账号？</span>
                    <router-link :to="{name: 'login'}">
                        立即登录
                    </router-link>
                </div>
            </div>
        </header>
        <div class="form">
            <div class="form-item">
                <label for="account">账号</label>
                <input  type="text" id="account"  
                        v-model="account" 
                        v-check:blur="validate(/\w{4,16}/g, 'checkAccount', 'isPassAccount', 'account')"
                >
                <div class="checked" v-if="checkAccount">
                    <p class="el-icon-success" v-if="isPassAccount"></p>
                    <p class="error" v-else>
                        <i class="el-icon-error"></i>
                        账号为4-16位数字字母或下划线组成
                    </p>
                </div>
            </div>
            <div class="form-item">
                <label for="pwd">创建密码</label>
                <input  type="password" id="pwd" 
                        v-model="pwd"
                        v-check:blur="validate(/\w{6,16}/g, 'checkPwd', 'isPassPwd', 'pwd')"
                >
                <div class="checked" v-if="checkPwd">
                    <p class="el-icon-success" v-if="isPassPwd"></p>
                    <p class="error" v-else>
                        <i class="el-icon-error"></i>
                        密码为6-16位数字字母或下划线组成
                    </p>
                </div>
            </div>
            <div class="pwd-strength">
                <div :class="['bar', strengthClass]"></div>
                <span>弱</span>
                <span>中</span>
                <span>强</span>
            </div>
            <div class="form-item">
                <label for="repwd">确认密码</label>
                <input  type="password" id="repwd" 
                        v-model="repwd"
                        v-check:blur="validateRepwd"
                >
                <div class="checked" v-if="checkRepwd">
                    <p class="el-icon-success" v-if="isPassRepwd"></p>
                    <p class="error" v-else>
                        <i class="el-icon-error"></i>
                        两次密码不一致
                    </p>
                </div>
            </div>
            <button @click="onsubmitregister">同意以下协议并注册</button>
        </div>
        <div class="protocol">
            <span>《美团点评用户服务协议》</span>
            <span>《美团点评隐私政策》</span>
        </div>
        <footer>
            ©meituan.com  京ICP证070791号  京公网安备11010502025545号
        </footer>
    </div>
</template>

<script>
export default {
    data () {
        return {
            account: "",
            checkAccount: false,
            isPassAccount: false,
            pwd: "",
            checkPwd: false,
            isPassPwd: false,
            repwd: "",
            checkRepwd: false,
            isPassRepwd: false,
            strengthClass: ""
        }
    },
    methods: {
        validate (rule, checkBox, isPass, which) {
            this[checkBox] = true;
            const reg = rule;
            this[isPass] = reg.test(this[which]);
        },
        validateRepwd () {
            this.checkRepwd = true;
            this.isPassRepwd = this.pwd === this.repwd;
        },
        onsubmitregister () {
            this.$axios.get("/api/meituan/register", {
                baseURL: "http://open.duyiedu.com",
                params: {
                    userName: this.account,
                    password: this.pwd,
                    rePassword: this.repwd,
                    appkey: "csl1_1590830311858"
                }
            }).then(resp => {
                if (resp.status === "success") {
                    this.$router.push({ name: 'login' })
                } else {
                    alert(resp.msg);
                }
            })
        }
    },
    watch: {
        pwd: {
            handler () {
                if (this.pwd.length > 13) {
                    this.strengthClass = "strong";
                } else if (this.pwd.length > 8) {
                    this.strengthClass = "normal";
                } else if (this.pwd.length > 4) {
                    this.strengthClass = "week";
                } else {
                    this.strengthClass = "";
                }
            }
        }
    }
}
</script>

<style lang="less">
@import "~styles/register/index";
</style>
