<template>
  <label
    :class="[
      'hm-radio',
      {
        'is-checked': label === model
      }
    ]"
  >
    <span class="hm-radio__input">
      <span class="hm-radio__inner"></span>
      <input class="hm-radio__original" type="radio" :value="label" :name="name" v-model="model" />
    </span>
    <span class="hm-radio__label">
      <slot></slot>
      <!-- 如果没有默认插槽 就把 label 属性作为默认展示 -->
      <template v-if="!$slots.default">{{ label }}</template>
    </span>
  </label>
</template>

<script>
export default {
  name: 'HmRadio',
  // 接收 RadioGroup 实例
  inject: {
    RadioGroup: {
      default: ''
    }
  },
  props: {
    label: {
      type: [String, Number, Boolean],
      default: ''
    },
    value: null,
    name: {
      type: String,
      default: ''
    }
  },
  // 需要提供一个计算属性 model
  computed: {
    model: {
      get() {
        return this.isGroup ? this.RadioGroup.value : this.value
      },
      set(newVal) {
        // 派发给父组件 input 事件
        // this.$emit('input', newVal)
        this.isGroup ? this.RadioGroup.$emit('input', newVal) : this.$emit('input', newVal)
      }
    },
    isGroup() {
      // 用于判断 radio 是否被 RadioGroup 所包裹
      return !!this.RadioGroup // “!!”将任何类型的值转换为相应的 Boolean 值
    }
  }
}
</script>

<style lang="scss">
@import 'index.scss';
</style>
