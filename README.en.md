# Vue Lazy Component


[![npm](https://img.shields.io/npm/v/@xunlei/vue-lazy-component.svg)](https://www.npmjs.com/package/@xunlei/vue-lazy-component)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![Git flow work flow](https://img.shields.io/badge/git--flow-workflow-brightgreen.svg)](https://github.com/nvie/gitflow/)
[![GitHub stars](https://img.shields.io/github/stars/xunleif2e/vue-lazy-component.svg)](https://github.com/xunleif2e/vue-lazy-component/stargazers)
[![GitHub issues](https://img.shields.io/github/issues/xunleif2e/vue-lazy-component.svg)](https://github.com/xunleif2e/vue-lazy-component/issues)
[![GitHub forks](https://img.shields.io/github/forks/xunleif2e/vue-lazy-component.svg)](https://github.com/xunleif2e/vue-lazy-component/network)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/xunleif2e/vue-lazy-component/master/LICENSE)

> 🐌 Vue.js 2.x component level lazy loading component


## Features

- Support load component when componet visible or will soon be visible
- Support load compoent for time delay
- Support load skeleton component before real component load to improve the user experience
- Support code split to load components asynchronously

## Installation
```
npm install @xunlei/vue-lazy-component
```

## Online demo

https://xunleif2e.github.io/vue-lazy-component/demo/dist/index.html

## Usage

### Registration

#### Use plugin to register a global component

```javascript
import VueLazyComponent from '@xunlei/vue-lazy-component'
import Vue from 'vue'

Vue.use(VueLazyComponent)
```
#### Local Registration

```javascript
import { component as VueLazyComponent } from '@xunlei/vue-lazy-component'

export default {
  // ...
  components: {
    'vue-lazy-component': VueLazyComponent
  }
}
```

####  Direct `<script>` Include
>  The premise is that Vue is also use direct `<script>` include.

```html
<script src="https://unpkg.com/@xunlei/vue-lazy-component@1.0.7/dist/vue-lazy-component.js"></script>
```

### Template syntax
```html
 <vue-lazy-component
  @init="init"
  @beforeInit="beforeInit"
 >
  <!-- real component-->
  <st-series-sohu/>
  <!-- skeleton component -->
  <st-series-sohu-skeleton slot="skeleton"/>
</vue-lazy-component>
```

## Props
| Parameter                    | Description  | Type | Optional | Default value |
|-------------------------|-------|------|--------|--------|
| viewport | Viewport where componet is in. Default is the window viewport.| HTMLElement | true      | `null` means window viewport |
| direction | Direction of the viewport scolls. `vertical` or  `horizontal` | String | true      | `vertical` |
| threshold | Threshold of preload, in css synax. | String | true      | `0px` |
| tagName | Tag name of the wrapper element.  | String | true  | `div` |
| timeout | Delay time. If set this, whether visible or not, automatically load after the specified time  | Number | true    | - |

## Events

| Event Name                    | Description  | Args
|-------------------------|-------|------|
| before-init | Component visible or delayed cut-off caused to begin loading the real component. | - |
| init | Start to load real componet | - |
| before-enter | Real component begin enter | el |
| before-leave | Skeleton component begin leave | el |
| after-leave | Skeleton component leaved | el |
| after-enter | Real component entered | el |
| after-init |  Initialization is complete | - |

## Notes

> 1. The project relies on [IntersectionObserver API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API). To run in an earlier version of the browser, you need to include **IntersectionObserver API polyfill**

### IntersectionObserver API polyfill

https://github.com/w3c/IntersectionObserver/tree/master/polyfill

> 2. Using `Scoped Component Slots` require Vue 2.1.0+

- https://vuejs.org/v2/guide/components.html#Scoped-Slots

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

# commit use commitizen
npm run commit

# pre publish
npm run prepublish

# generate changelog
npm run changelog
```
## License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2017 XunleiF2E
