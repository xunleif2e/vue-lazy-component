(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["VueLazyComponent"] = factory();
	else
		root["VueLazyComponent"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(1),
  /* template */
  __webpack_require__(3),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/benzhao/Sites/@xunlei/vue-lazy-component/src/VueLazyComponent.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] VueLazyComponent.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-175ab158", Component.options)
  } else {
    hotAPI.reload("data-v-175ab158", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'VueLazyComponent',

  props: {
    timeout: {
      type: Number
    },
    tagName: {
      type: String,
      default: 'div'
    },
    viewport: {
      type: typeof window !== 'undefined' ? window.HTMLElement : Object,
      default: function _default() {
        return null;
      }
    },
    threshold: {
      type: String,
      default: '0px'
    },
    direction: {
      type: String,
      default: 'vertical'
    },
    maxWaitingTime: {
      type: Number,
      default: 50
    }
  },

  data: function data() {
    return {
      isInit: false,
      timer: null,
      io: null,
      loading: false
    };
  },
  created: function created() {
    var _this = this;

    // 如果指定timeout则无论可见与否都是在timeout之后初始化
    if (this.timeout) {
      this.timer = setTimeout(function () {
        _this.init();
      }, this.timeout);
    }
  },
  mounted: function mounted() {
    if (!this.timeout) {
      // 根据滚动方向来构造视口外边距，用于提前加载
      var rootMargin = void 0;
      switch (this.direction) {
        case 'vertical':
          rootMargin = this.threshold + ' 0px';
          break;
        case 'horizontal':
          rootMargin = '0px ' + this.threshold;
          break;
      }

      // 观察视口与组件容器的交叉情况
      this.io = new window.IntersectionObserver(this.intersectionHandler, {
        rootMargin: rootMargin,
        root: this.viewport,
        threshold: [0, Number.MIN_VALUE, 0.01]
      });
      this.io.observe(this.$el);
    }
  },
  beforeDestroy: function beforeDestroy() {
    // 在组件销毁前取消观察
    if (this.io) {
      this.io.unobserve(this.$el);
    }
  },


  methods: {
    // 交叉情况变化处理函数
    intersectionHandler: function intersectionHandler(entries) {
      if (
      // 正在交叉
      entries[0].isIntersecting ||
      // 交叉率大于0
      entries[0].intersectionRatio) {
        this.init();
        this.io.unobserve(this.$el);
      }
    },


    // 处理组件和骨架组件的切换
    init: function init() {
      var _this2 = this;

      // 此时说明骨架组件即将被切换
      this.$emit('beforeInit');
      this.$emit('before-init');

      // 此时可以准备加载懒加载组件的资源
      this.loading = true;

      // 由于函数会在主线程中执行，加载懒加载组件非常耗时，容易卡顿
      // 所以在requestAnimationFrame回调中延后执行
      this.requestAnimationFrame(function () {
        _this2.isInit = true;
        _this2.$emit('init');
      });
    },
    requestAnimationFrame: function requestAnimationFrame(callback) {
      var _this3 = this;

      // 防止等待太久没有执行回调
      // 设置最大等待时间
      setTimeout(function () {
        if (_this3.isInit) return;
        callback();
      }, this.maxWaitingTime);

      // 兼容不支持requestAnimationFrame 的浏览器
      return (window.requestAnimationFrame || function (callback) {
        return setTimeout(callback, 1000 / 60);
      })(callback);
    }
  }
});

/***/ }),
/* 2 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate
    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('transition-group', {
    staticStyle: {
      "position": "relative"
    },
    attrs: {
      "tag": _vm.tagName,
      "name": "lazy-component"
    },
    on: {
      "before-enter": function (el) { return _vm.$emit('before-enter', el); },
      "before-leave": function (el) { return _vm.$emit('before-leave', el); },
      "after-enter": function (el) { return _vm.$emit('after-enter', el); },
      "after-leave": function (el) { return _vm.$emit('after-leave', el); }
    }
  }, [(_vm.isInit) ? _c('div', {
    key: "component"
  }, [_vm._t("default", null, {
    loading: _vm.loading
  })], 2) : (_vm.$slots.skeleton) ? _c('div', {
    key: "skeleton"
  }, [_vm._t("skeleton")], 2) : _c('div', {
    key: "loading"
  })])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-175ab158", module.exports)
  }
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/**
  * vue-lazy-component
  * (c) 2017 赵兵
  * @license MIT
  */
const VueLazyComponent = __webpack_require__(0)
const vueLazyComponent = {}

/**
 * Plugin API
 */
vueLazyComponent.install = function (Vue, options) {
  Vue.component(VueLazyComponent.name, VueLazyComponent)
}

vueLazyComponent.component = VueLazyComponent

/**
 * Auto install
 */
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(vueLazyComponent)
}

module.exports = vueLazyComponent

/***/ })
/******/ ]);
});