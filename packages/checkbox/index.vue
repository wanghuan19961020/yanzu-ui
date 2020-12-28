<template>
  <label :class="['hm-checkbox', { 'is-checked': isChecked }]">
    <span class="hm-checkbox__input">
      <span class="hm-checkbox__inner"></span>
      <input type="checkbox" class="hm-checkbox__original" :value="label" :name="name" v-model="model" />
    </span>
    <span class="hm-checkbox__label">
      <slot></slot>
      <template v-if="!$slots.default">{{ label }}</template>
    </span>
  </label>
</template>

<script>
export default {
  name: 'HmCheckbox',
  inject: {
    CheckboxGroup: {
      default: ''
    }
  },
  props: {
    value: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    }
  },
  computed: {
    model: {
      get() {
        return this.isGroup ? this.CheckboxGroup.value : this.value
      },
      set(newVal) {
        // 派发给父组件 input 事件
        this.isGroup ? this.CheckboxGroup.$emit('input', newVal) : this.$emit('input', newVal)
      }
    },
    isGroup() {
      return !!this.CheckboxGroup
    },
    isChecked() {
      // 如果 group 包裹 判断 label 是否在 model 中
      // 如果没有 group 包裹，直接使用 model
      return this.isGroup ? this.model.includes(this.label) : this.model
    }
  }
}
</script>

<style lang="scss">
@import 'index.scss';
</style>
