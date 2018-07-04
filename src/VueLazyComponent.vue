<template>
  <transition-group :tag="tagName" name="lazy-component" style="position: relative;"
    @before-enter="(el) => $emit('before-enter', el)"
    @before-leave="(el) => $emit('before-leave', el)"
    @after-enter="(el) => $emit('after-enter', el)"
    @after-leave="(el) => $emit('after-leave', el)"
  >
    <div v-if="loading" key="component">
      <slot :loading="loading"></slot>
    </div>
    <div v-else-if="$slots.skeleton" key="skeleton">
      <slot name="skeleton"></slot>
    </div>
    <div v-else key="loading">
    </div>
  </transition-group>
</template>

<script>
  export default {
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
        default: () => null
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
      },
      isAutoDestory: {  // destory after not visible
        type: Boolean,
        default: false
      }
    },

    data () {
      return {
        timer: null,
        io: null,
        loading: false
      }
    },

    created () {
      // 如果指定timeout则无论可见与否都是在timeout之后初始化
      if (this.timeout) {
        this.timer = setTimeout(() => {
          this.init()
        }, this.timeout)
      }
    },

    mounted () {
      if (!this.timeout) {
        // 根据滚动方向来构造视口外边距，用于提前加载
        let rootMargin
        switch (this.direction) {
          case 'vertical':
            rootMargin = `${this.threshold} 0px`
            break
          case 'horizontal':
            rootMargin = `0px ${this.threshold}`
            break
        }

        // 观察视口与组件容器的交叉情况
        this.io = new window.IntersectionObserver(this.intersectionHandler, {
          rootMargin,
          root: this.viewport,
          threshold: [ 0, Number.MIN_VALUE, 0.01]
        })
        this.io.observe(this.$el)
      }
    },

    beforeDestroy () {
      // 在组件销毁前取消观察
      if (this.io) {
        this.io.unobserve(this.$el)
      }
    },

    methods: {
      // 交叉情况变化处理函数
      intersectionHandler (entries) {
        const  isIntersecting = entries[0].isIntersecting || entries[0].intersectionRatio
        if ( isIntersecting ) {
          this.init()
        }else{
          this.isAutoDestory && this.destory()
        }
      },

      // 处理组件和骨架组件的切换
      init () {
        // 此时说明骨架组件即将被切换
        this.$emit('beforeInit')

        // 此时可以准备加载懒加载组件的资源
        this.loading = true

        this.$emit('init')
      },
      /**
       * destory after not intersecting
       */
      destory () {
        this.$emit('beforeDestory')

        this.loading = false

        this.$emit('destory')
      }
    }
  }
</script>

