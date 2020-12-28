<template>
  <div class="hm-radio-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'HmRadioGroup',
  provide() {
    return {
      RadioGroup: this
    }
  },
  props: {
    // 接收到了一个 value
    // 将来还需要触发 当前组件的 input 事件
    // provide 与 inject
    /*
      provide 和 inject 主要在开发高阶插件/组件库时使用。
      并不推荐用于普通应用程序代码中。
      这对选项需要一起使用，以允许一个祖先组件向其所有子孙后代注入一个依赖，
      不论组件层次有多深，并在其上下游关系成立的时间里始终生效。
    */
    value: null
  }
}
</script>

<style lang="scss">
</style>
