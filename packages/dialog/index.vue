<template>
  <!-- 对话框的遮罩 .self代表只有点击自己才触发 -->
  <!-- 官方解释：
      只当在 event.target 是当前元素自身时触发处理函数
      即事件不是从内部元素触发的
  -->
  <transition name="dialog-fade">
    <div class="hm-dialog__wrapper" v-show="visiable" @click.self="handleClose">
      <!-- 对话框 width和top设置成动态样式-->
      <div class="hm-dialog" :style="{ width, marginTop: top }">
        <!-- 对话框顶部 标题 + 关闭按钮 -->
        <div class="hm-dialog__header">
          <slot name="title">
            <span class="hm-dialog__title">
              {{ title }}
            </span>
          </slot>
          <button class="hm-dialog__headerbtn" @click="handleClose">
            <i class="hm-icon-close"></i>
          </button>
        </div>
        <!-- 对话框内容 -->
        <div class="hm-dialog__body">
          <!-- 默认插槽 -->
          <slot></slot>
        </div>
        <!-- 对话框底部 一般都是一些操作 这里定义成具名插槽 有则显示 -->
        <div v-if="$slots.footer" class="hm-dialog__footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'HmDialog',
  props: {
    // 弹框标题
    title: {
      type: String,
      default: '提示'
    },
    // 弹框宽度
    width: {
      type: String,
      default: '30%'
    },
    // 弹框距离顶部距离
    top: {
      type: String,
      default: '15vh'
    },
    // 弹框的显示和隐藏
    visiable: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClose() {
      this.$emit('update:visiable', false)
    }
  }
}
</script>

<style lang='scss'>
@import 'index.scss';
</style>
