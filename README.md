# Vue Lazy Component

> Vue.js 2.0 组件级懒加载方案

![](cover.jpg)

- 支持 组件可见或即将可见时懒加载
- 支持 组件延时加载
- 支持 加载组件前展示组件骨架，提高用户体验
- 支持 懒加载组件分包异步加载

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
import VueLazyComponent from '@xunlei/vue-lazy-component'
import Vue from 'vue'

Vue.use(VueLazyComponent)
```
#### 方式2 局部注册

```javascript
import { component as VueLazyComponent } from '@xunlei/vue-lazy-component'

export default {
  // ...
  components: {
    'vue-lazy-component': VueLazyComponent
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
 <vue-lazy-component
  @init="init"
  @beforeInit="beforeInit"
 >
  <!--需要懒加载的组件-->
  <st-series-sohu/>
  <!--在加载之前展示的骨架组件-->
  <st-series-sohu-skeleton slot="skeleton"/>
</vue-lazy-component>
```

## Props

| 参数                    | 说明  | 类型 | 可选值 | 默认值 |
|-------------------------|-------|------|--------|--------|
| viewport | 组件的视口，如果组件是在页面容器内滚动，视口就是该容器 | HTMLElement | true      | `null`，代表window |
| direction | 视口的滚动方向, `vertical`代表垂直方向，`horizontal`代表水平方向  | String | true      | `vertical` |
| threshold | 预加载阀值, css单位  | String | true      | `0px` |
| tagName | 包裹组件的外层容器的标签名  | String | true  | `div` |
| timeout | 等待时间，如果指定了时间，不论可见与否，在指定时间之后自动加载  | Number | true    | - |

## Events

| 事件名                    | 说明  | 事件参数
|-------------------------|-------|------|
| before-init | 模块可见或延时截止导致准备开始加载懒加载模块 | - |
| init | 开始加载懒加载模块，此时骨架组件开始消失 | - |
| before-enter | 懒加载模块开始进入 | el |
| before-leave | 骨架组件开始离开 | el |
| after-leave | 骨架组件已经离开 | el |
| after-enter | 懒加载模快已经进入 | el |
| after-init | 初始化完成 | - |


## 注意

> 该项目依赖 [IntersectionObserver API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)，如需在较低版本浏览器运行，需要引入 polyfill

### IntersectionObserver API 桌面端兼容性

| Feature       | Chrome | Edge | Firefox (Gecko) | Internet Explorer | Opera | Safari (WebKit)   |
|---------------|--------|------|-----------------|-------------------|-------|-------------------|
| Basic support | 51     | 15   | 55 (55)[1][2]   | No support        | 38    | WebKit bug 159475 |


### IntersectionObserver API 移动端兼容性

| Feature       | Android Webview | Chrome for Android | Firefox Mobile (Gecko) | Firefox OS | IE Mobile  | Opera Mobile | Safari Mobile     |
|---------------|-----------------|--------------------|------------------------|------------|------------|--------------|-------------------|
| Basic support | 51              | 51                 | 55.0 (55)[1][2]        | No support | No support | 38           | WebKit bug 159475 |

### IntersectionObserver API polyfill

https://github.com/w3c/IntersectionObserver/tree/gh-pages/polyfill

> webpack 分包异步加载方式依赖 `scope slot`, 需要 Vue 版本大于2.1.0

## ChangeLog
- [1.0.0] 2017-09-11
  - 实现懒加载组件的基本功能

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
