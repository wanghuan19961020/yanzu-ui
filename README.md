- 初始化项目
```bash
vue create demo
```
- 安装组件库
```bash
npm install yanzu-ui
```
- 全局导入
```js
import YanzuUI from 'yanzu-ui'
import 'yanzuui/lib/yanzuui.css'

Vue.use(YanzuUI)
```
- 使用组件
```html
<template>
  <div id="app">
    <hm-form :model="model" label-width="100px">
      <hm-form-item label="用户名">
        <hm-input placeholder="请输入用户名" v-model="model.username"></hm-input>
      </hm-form-item>
      <hm-form-item label="选择">
        <hm-switch v-model="model.active"></hm-switch>
      </hm-form-item>
    </hm-form>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      model: {
        username: '',
        active: true
      }
    }
  }
}

···