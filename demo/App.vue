<template>
  <div id="app">
    <img ref="logo"src="./assets/logo.png">
    <context-menu class="right-menu" 
      :target="contextMenuTarget" 
      :show="contextMenuVisible" 
      @update:show="(show) => contextMenuVisible = show">
      <a href="javascript:;" @click="copyMsg">复制</a>
      <a href="javascript:;" @click="quoteMsg">引用</a>
      <a href="javascript:;" @click="deleteMsg">删除</a>
    </context-menu>

    <h1>Vue Context Menu</h1>

    <h3>右键体验</h3>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      contextMenuTarget: document.body,
      contextMenuVisible: false,
    }
  },
  methods: {
    copyMsg () {
      alert('copy')
      this.contextMenuVisible = false
    },
    quoteMsg () {
      alert('quote')
      this.contextMenuVisible = false
    },
    deleteMsg () {
      alert('delete')
      this.contextMenuVisible = false
    }
  }
}
</script>

<style>

body {
  height: 100%;
  font-size: 14px;
}
#app {
  font-family: 'Microsoft Yahei', 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  height: 100%;
}
h1,
h2 {
  font-weight: normal;
}
a {
  color: #333;
}
.right-menu {
  position: fixed;
  background: #fff;
  border: solid 1px rgba(0, 0, 0, .2);
  border-radius: 3px;
  z-index: 999;
  display: none;
}
.right-menu a {
  width: 75px;
  height: 28px;
  line-height: 28px;
  text-align: center;
  display: block;
  color: #1a1a1a;
}
.right-menu a:hover {
  background: #eee;
  color: #fff;
}
html,
body {
    height: 100%;
}
.right-menu {
    border: 1px solid #eee;
    box-shadow: 0 0.5em 1em 0 rgba(0,0,0,.1);
    border-radius: 1px;
}
a {
    text-decoration: none;
}
.right-menu a {
    padding: 2px;
}
.right-menu a:hover {
    background: #42b983;
}
</style>
