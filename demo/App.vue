<template>
  <div>
    <header class="page-header">
      <h1>Vue Lazy Component Demos</h1>
      <router-link class="link" to="/large-page">Demo1: 超长页面懒加载</router-link>
      <router-link class="link" to="/timeout">Demo2: 延时加载</router-link>
      <router-link class="link" to="/custom-transition">Demo3: 自定义过渡效果</router-link>
      <router-link class="link" to="/large-page-chunks">Demo4: 超长页面懒加载（分包）</router-link>
      <router-link class="link" to="/specific-viewport">Demo5: 特定视口内懒加载 </router-link>
    </header>
    <router-view class="page-container"></router-view>
    <a href="https://github.com/you" target="_blank">
      <img
        style="position: fixed; top: 0; right: 0; border: 0;z-index:1000;"
        src="https://camo.githubusercontent.com/e7bbb0521b397edbd5fe43e7f760759336b5e05f/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f677265656e5f3030373230302e706e67"
        alt="Fork me on GitHub"
        data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_right_orange_ff7600.png">
      </a>
  </div>
</template>

<script>
  import '@/assets/css/common.css'
  import '@/assets/css/d3.css'
  import '@/assets/css/acc.css'
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
    padding: 18px;
    text-align: center;
  }

  .page-container {
    margin-top: 120px;
  }

  h1 {
    font-size: 24px;
    line-height: 2em;
  }

  h1,
  h2 {
    color: #42b983;
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

