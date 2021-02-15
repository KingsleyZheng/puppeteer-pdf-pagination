// 自定义组件全局安装
import PlaceHolder from './place-holder'
// import CKEditor from './CKEditor.vue'
// 安装
const install = {
  install: function(Vue) {
    Vue.component('placeholder', PlaceHolder)
  }
}

// 导出安装插件
export default install
