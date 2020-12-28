<template>
  <div :class="['hm-switch', { 'is-checked': value }]" @click="handleClick">
    <span ref="core" class="hm-switch__core">
      <span class="hm-switch__button"></span>
    </span>
    <input ref="input" class="hm-switch__input" type="checkbox" :name="name" />
  </div>
</template>

<script>
export default {
  name: 'HmSwitch',
  props: {
    value: {
      // v-model 双向数据绑定
      type: Boolean,
      default: false
    },
    activeColor: {
      // 选中时颜色
      type: String,
      default: ''
    },
    inactiveColor: {
      // 未选中时颜色
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    }
  },
  mounted() {
    this.setColor() // 修改开关的颜色
    // 控制 CheckBox的value
    this.$refs.input.checked = this.value
  },
  methods: {
    setColor() {
      // 修改开关的颜色
      if (this.activeColor || this.inactiveColor) {
        const color = this.value ? this.activeColor : this.inactiveColor
        this.$refs.core.style.borderColor = color
        this.$refs.core.style.backgroundColor = color
      }
    },
    async handleClick(e) {
      this.$emit('input', !this.value)
      // 点击的时候还需要修改颜色
      // 要等待 value 发生了改变，再 setColor
      // 数据修改后，等待 DOM 更新，再修改 Switch 颜色
      await this.$nextTick()
      this.setColor()
      this.$refs.input.checked = this.value
    }
  }
}
</script>

<style lang="scss">
@import 'index.scss';
</style>
