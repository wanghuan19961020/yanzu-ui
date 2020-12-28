<template>
  <div :class="['hm-input', { 'hm-input--suffix': showSuffix }]">
    <!-- 如果传了showPassword, 判断是否需要切换密码的显示 如果不传 不判断 -->
    <input
      :type="showPassword ? (passwordVisiable ? 'text' : 'password') : type"
      :placeholder="placeholder"
      :name="name"
      :disabled="disabled"
      :value="value"
      :class="[
        'hm-input__inner',
        {
          'is-disabled': disabled
        }
      ]"
      @input="handleInput"
    />
    <span v-if="showSuffix" class="hm-input__suffix">
      <!-- 清空按钮 -->
      <i v-if="clearable && value" class="hm-input__icon hm-icon-circle-close" @click="clear"></i>
      <!-- 显示密码 -->
      <i
        v-if="showPassword"
        :class="[
          'hm-input__icon',
          'hm-icon-view',
          {
            'hm-icon-view-active': passwordVisiable
          }
        ]"
        @click="handlePassword"
      ></i>
    </span>
  </div>
</template>

<script>
export default {
  name: 'HmInput',
  props: {
    placeholder: {
      type: String,
      default: ''
    },
    type: {
      // input 类型
      type: String,
      default: 'text'
    },
    name: {
      type: String,
      default: ''
    },
    disabled: {
      // 禁用
      type: Boolean,
      default: false
    },
    value: {
      type: String,
      default: ''
    },
    clearable: {
      // 可清空
      type: Boolean,
      default: false
    },
    showPassword: {
      // 显示密码
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      // 用于控制是否显示密码框
      passwordVisiable: false
    }
  },
  computed: {
    showSuffix() {
      return this.clearable || this.showPassword
    }
  },
  methods: {
    handleInput(e) {
      this.$emit('input', e.target.value)
    },
    clear() {
      // 把内容清空
      this.$emit('input', '')
    },
    handlePassword() {
      this.passwordVisiable = !this.passwordVisiable
    }
  }
}
</script>

<style lang="scss">
@import 'index.scss';
</style>
