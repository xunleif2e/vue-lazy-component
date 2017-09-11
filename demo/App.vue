<template>
  <div>
    <header class="page-header">
      <h1>Vue Lazy Component Demo</h1>
      <router-link class="link" to="/large-page">Demo1: 超长页面懒加载</router-link>
      <router-link class="link" to="/timeout">Demo2: 延时加载</router-link>
      <router-link class="link" to="/custom-transition">Demo3: 自定义过渡效果</router-link>
      <router-link class="link" to="/large-page-chunks">Demo4: 超长页面懒加载（分包）</router-link>
    </header>
    <router-view class="page-container"></router-view>
  </div>
</template>

<script>
  import '@/assets/css/common.css'
  import '@/assets/css/d3.css'
  import '@/assets/css/load.css'
  import '@/assets/css/load-sec.css'
  import Vue from 'vue'

  Vue.directive('highlightjs', {
    deep: true,
    bind: function (el, binding) {
      let targets = el.querySelectorAll('code')
      targets.forEach((target) => {
        if (binding.value) {
          target.textContent = binding.value
        }
        window.hljs.highlightBlock(target)
      })
    },
    componentUpdated: function (el, binding) {
      let targets = el.querySelectorAll('code')
      targets.forEach((target) => {
        if (binding.value) {
          target.textContent = binding.value
          window.hljs.highlightBlock(target)
        }
      })
    }
  })
  export default {}
</script>

<style>
  .page-header {
    position: fixed;
    top: 0;
    z-index: 199;
    width: 100%;
    background: rgba(255, 255, 255, .95);
    padding: 24px;
    text-align: center;
  }

  .page-container {
    margin-top: 120px;
  }
  h1,
  h2 {
    color: #42b983;
    font-weight: lighter!important;
    font-family: sans-serif!important;
  }

  .link {
    padding:0 24px 0 0;
  }

  .link:hover {
    color: #42b983;
  }

  code.hljs {
    font-family: 'Roboto Mono', Monaco, courier, monospace;
    font-size: 0.8em;
    background-color: rgba(255, 255, 255, .5);
    -webkit-font-smoothing: initial;
    padding: 1.2em 1.4em;
    line-height: 1.5em;
    margin: 0;
  }

  .router-link-active {
    color: #42b983;
    font-weight: bold;
  }

  summary {
    font-size: 14px;
    cursor: pointer;
    line-height: 3;
    background:rgba(255,255,255,.9);
    padding: 10px 16px;
    margin: 8px 0;
  }

  summary:focus {
    outline: none;
  }
</style>

