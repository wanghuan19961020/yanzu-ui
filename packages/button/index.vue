<template>
  <button
    class="hm-button"
    :class="[
      `hm-button-${type}`, // 按钮类型
      {
        'is-plain': plain, // 控制镂空
        'is-round': round, // 控制圆角
        'is-circle': circle, // 圆型按钮
        'is-disabled': disabled // 按钮是否禁用
      }
    ]"
    :disabled="disabled"
    @click="handleClick"
  >
    <div class="mask" v-if="disabled"></div>
    <!-- 使用字体图标 -->
    <i v-if="icon" :class="`hm-icon-${icon}`"></i>
    <!-- 如果没有传入任何的内容 即我们没有传入插槽的时候 -->
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>

<script>
export default {
  name: 'HmButton',
  // 需要对传过来的 props 进行校验
  props: {
    type: {
      // 按钮类型
      type: String, // 数据类型-字符串
      default: 'default'
    },
    plain: {
      // 镂空属性
      type: Boolean,
      default: false
    },
    round: {
      // 圆角属性
      type: Boolean,
      default: false
    },
    circle: {
      // 圆型按钮
      type: Boolean,
      default: false
    },
    icon: {
      // 图标属性
      type: String,
      default: ''
    },
    disabled: {
      // 按钮是否禁用
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClick(e) {
      this.$emit('click', e)
    }
  }
}
</script>

<style lang="scss">
@import 'index.scss';
</style>
