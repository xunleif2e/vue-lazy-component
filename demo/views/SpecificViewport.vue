<template>
    <div style="height: 100%;">
        <div class="index-d3 switch">
            <div class="d3-more" style="display: block;">
              <h2>特定视口内懒加载，只有在该视口内可见或者即将可见时进行加载</h2>
              <details>
                  <summary>查看代码示例</summary>
                  <h3>父组件</h3>
                  <pre v-highlightjs="code1"><code class="html">{{ code1 }}</code></pre>
                  <h3>子组件</h3>
                  <pre v-highlightjs="code2"><code class="html">{{ code2 }}</code></pre>
                </details>
                <div class="team-msg">
                  <div class="msg-dlg-wp">
                    <p class="msg-load"><span class="ico-load"></span>消息收取中...</p>
                    <a class="btn-more btn-msg" style="display: flex;">
                      <i class="ico-arw-s"></i><span>99+</span>条新消息
                      <i class="line">| </i> <i class="close" title="关闭"></i>
                    </a>
                    <msg-item
                      v-for="item in lists"
                      :key="item.userid"
                      :userid="item.userid"
                      :msg="item.msg"
                      :usernick="item.usernick"
                      :time="item.time"
                      :myself="item.myself"
                    ></msg-item>
                  </div>

                  <div class="msg-dlg-input">
                    <textarea class="area-msg-dlg"></textarea>
                    <p class="area-msg-null"><a href="javascript:;">验证手机号</a>轻松发送消息！</p>
                    <a href="javascript:;" class="btn-msg-send disable">发送</a>
                  </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import MsgItem from '@/components/MsgItem'
import MsgItemSkeleton from '@/components/MsgItemSkeleton'
import msgLists from '@/assets/json/msg-lists.json'
export default {
    components: {
      MsgItem,
      MsgItemSkeleton
    },

    data () {
      return {
        viewport: null,
        lists: msgLists.data.slice(0, 1000),
        code1: `<div class="team-msg">
  <div class="msg-dlg-wp">
    <p class="msg-load"><span class="ico-load"></span>消息收取中...</p>
    <a class="btn-more btn-msg" style="display: flex;">
      <i class="ico-arw-s"></i><span>99+</span>条新消息
      <i class="line">| </i> <i class="close" title="关闭"></i>
    </a>
    <msg-item
      v-for="item in lists"
      :key="item.userid"
      :userid="item.userid"
      :msg="item.msg"
      :usernick="item.usernick"
      :time="item.time"
      :myself="item.myself"
    ></msg-item>
  </div>
</div>`,
        code2: `<template>
  <div>
    <p class="msg-time">
      <time>{{ time }}</time>
    </p>
    <div class="msg-dlg-box" :class="myself ? 'myself' : 'other'">
      <a class="user-pic">
        <vue-lazy-component
          v-if="root"
          :viewport="root"
        >
          <img :src="'https://api.adorable.io/avatars/40/'+ userid + '@adorable.png'">
          <img slot="skeleton" src="../assets/img/timg.jpeg">
        </vue-lazy-component>
      </a>

      <div class="other-info" v-if="!myself">
        <p class="user-name">{{ usernick }}</p>
        <span class="level-box level3">
          <i class="ico-level ico-lev3"></i>马路杀手</span>
      </div>
      <div class="bubble">{{ msg }}</div>
    </div>
  </div>
<\/template>

<script>
  export default {
    props: {
      userid: String,
      msg: String,
      usernick: String,
      time: String,
      myself: Boolean
    },

    data () {
      return {
        root: null
      }
    },

    mounted () {
      this.root = this.$parent.$el
    }
  }
<\/script>

<style>
  .user-pic img {
    width: 35px;
  }
</style>
`
      }
    }
}
</script>

<style>
  .team-msg {
    height: 450px;
    width: 70%;
    margin: 0 15%;
  }

  .msg-dlg-box {
    padding: 0 0 0 45px;
  }

  .msg-dlg-box.myself .bubble {
    margin: 0 45px 0 0;
  }
</style>

