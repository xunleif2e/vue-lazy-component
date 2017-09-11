# Vue Lazy Component

> Vue.js 2.0 组件级懒加载方案

![Preview](https://github.com/binggg/vue-lazy-component/blob/master/demo/assets/demo.jpeg?raw=true)

## 安装
```
npm install @xunlei/vue-lazy-component
```

## 在线Demo

https://xunleif2e.github.io/vue-lazy-component/demo/dist

## 使用

### 1. 注册组件

#### 方式1 利用插件方式全局注册

```javascript
import VueContextMenu from '@xunlei/vue-lazy-component'
import Vue from 'vue'

Vue.use(VueContextMenu)
```
#### 方式2 局部注册

```javascript
import { component as VueContextMenu } from '@xunlei/vue-lazy-component'

export default {
  // ...
  components: {
    'vue-lazy-component': VueContextMenu
  }
}
```

#### 方式3 独立版本引入，自动全局注册
> 前提是 vue 也是独立版本通过script标签引入

```html
<script src="./node_modules/dist/vue-lazy-component.js"></script>
```

### 2. 模版语法
```html
 <context-menu class="right-menu"
    :target="contextMenuTarget"
    :show="contextMenuVisible"
    @update:show="(show) => contextMenuVisible = show">
    <a href="javascript:;" @click="copyMsg">复制</a>
    <a href="javascript:;" @click="quoteMsg">引用</a>
    <a href="javascript:;" @click="deleteMsg">删除</a>
</context-menu>
```

## Props

| 参数                    | 说明  | 类型 | 可选值 | 默认值 |
|-------------------------|-------|------|--------|--------|
| target | 触发右键事件的元素  | Element | -      | -      |
| show | 是否显示右键菜单  | Boolean | -      | false      |


## Events

| 事件名                    | 说明  | 事件参数
|-------------------------|-------|------|
| update:show | 右键菜单显示/隐藏时触发  | 是否显示 |


## 注意

如果target是某个兄弟元素，可以使用 `$refs`来访问，但是注意请在父组件mounted 之后获取。

参考 https://cn.vuejs.org/v2/guide/components.html#子组件索引


## ChangeLog
- [1.0.1] 2017-07-10
  - 修复 target 为空时可能出错的bug

- [1.0.0] 2017-06-23
  - 实现右键菜单基本功能

## Development Setup

``` bash
# install deps
npm install

# serve demo at localhost:8080
npm run dev

# build library and demo
npm run build

# build library
npm run build:library

# build demo
npm run build:demo
```

## License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2017 赵兵
