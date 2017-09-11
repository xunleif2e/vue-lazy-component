(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["VueContextMenu"] = factory();
	else
		root["VueContextMenu"] = factory();
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
Component.options.__file = "/Users/benzhao/Sites/@xunlei/vue-context-menu/src/VueContextMenu.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] VueContextMenu.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6f0575c0", Component.options)
  } else {
    hotAPI.reload("data-v-6f0575c0", Component.options)
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'context-menu',
  data: function data() {
    return {
      triggerShowFn: function triggerShowFn() {},
      triggerHideFn: function triggerHideFn() {},
      x: null,
      y: null,
      style: {},
      binded: false
    };
  },

  props: {
    target: null,
    show: Boolean
  },
  mounted: function mounted() {
    this.bindEvents();
  },

  watch: {
    show: function show(_show) {
      if (_show) {
        this.bindHideEvents();
      } else {
        this.unbindHideEvents();
      }
    },
    target: function target(_target) {
      this.bindEvents();
    }
  },
  methods: {
    // 初始化事件
    bindEvents: function bindEvents() {
      var _this = this;

      this.$nextTick(function () {
        if (!_this.target || _this.binded) return;
        _this.triggerShowFn = _this.contextMenuHandler.bind(_this);
        _this.target.addEventListener('contextmenu', _this.triggerShowFn);
        _this.binded = true;
      });
    },


    // 取消绑定事件
    unbindEvents: function unbindEvents() {
      if (!this.target) return;
      this.target.removeEventListener('contextmenu', this.triggerShowFn);
    },


    // 绑定隐藏菜单事件
    bindHideEvents: function bindHideEvents() {
      this.triggerHideFn = this.clickDocumentHandler.bind(this);
      document.addEventListener('mousedown', this.triggerHideFn);
      document.addEventListener('mousewheel', this.triggerHideFn);
    },


    // 取消绑定隐藏菜单事件
    unbindHideEvents: function unbindHideEvents() {
      document.removeEventListener('mousedown', this.triggerHideFn);
      document.removeEventListener('mousewheel', this.triggerHideFn);
    },


    // 鼠标按压事件处理器
    clickDocumentHandler: function clickDocumentHandler(e) {
      this.$emit('update:show', false);
    },


    // 右键事件事件处理
    contextMenuHandler: function contextMenuHandler(e) {
      this.x = e.clientX;
      this.y = e.clientY;
      this.layout();
      this.$emit('update:show', true);
      e.preventDefault();
    },


    // 布局
    layout: function layout() {
      this.style = {
        left: this.x + 'px',
        top: this.y + 'px'
      };
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
  return _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.show),
      expression: "show"
    }],
    staticStyle: {
      "display": "block"
    },
    style: (_vm.style),
    on: {
      "mousedown": function($event) {
        $event.stopPropagation();
      },
      "contextmenu": function($event) {
        $event.preventDefault();
      }
    }
  }, [_vm._t("default")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-6f0575c0", module.exports)
  }
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/**
  * vue-context-menu
  * (c) 2017 赵兵
  * @license MIT
  */
const VueContextMenu = __webpack_require__(0)
const vueContextMenu = {}

/**
 * Plugin API
 */
vueContextMenu.install = function (Vue, options) {
  Vue.component(VueContextMenu.name, VueContextMenu)
}

vueContextMenu.component = VueContextMenu

/**
 * Auto install
 */
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(vueContextMenu)
}

module.exports = vueContextMenu

/***/ })
/******/ ]);
});