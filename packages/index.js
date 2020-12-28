// 整个包的入口
// 引入按钮组件
import Button from './button'
// 引入对话框组件
import Dialog from './dialog'
// 引入 Input 组件
import Input from './input'
// 引入 Switch 组件
import Switch from './switch'
// 引入 Radio 组件
import Radio from './radio'
// 引入 RadioGroup 组件
import RadioGroup from './radio-group'
// 引入 checkbox 组件
import Checkbox from './checkbox'
// 引入 checkboxGroup 组件
import CheckboxGroup from './checkbox-group'
// 引入 form 组件
import Form from './form'
// 引入 form-item 组件
import FormItem from './form-item'
// 引入字体图标
import './fonts/font.scss'

// 存储组件列表
const components = [Form, FormItem, Button, Dialog, Input, Switch, Radio, RadioGroup, Checkbox, CheckboxGroup]

// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
const install = Vue => {
  // 遍历注册全局组件
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

// 判断是否是直接引入文件，如果是，就不调用 Vue.use()
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default { install }
