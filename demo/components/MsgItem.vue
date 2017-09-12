<template>
  <div>
    <p class="msg-time">
      <time>{{ time }}</time>
    </p>
    <div class="msg-dlg-box" :class="myself ? 'myself' : 'other'">
      <a class="user-pic">
        <vue-lazy-component
          :view-port="$parent.$el"
        >
          <img :src="`https://api.adorable.io/avatars/40/${userid}@adorable.png`">
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
</template>

<script>
  export default {
    props: {
      userid: String,
      msg: String,
      usernick: String,
      time: String,
      myself: Boolean
    }
  }
</script>

<style>
  .user-pic img {
    width: 35px;
  }
</style>
