import Vue from "vue"

// 表单验证
Vue.directive("check", {
    bind (el, binding) {
        el.addEventListener(binding.arg, binding.value, false)
    }
})
