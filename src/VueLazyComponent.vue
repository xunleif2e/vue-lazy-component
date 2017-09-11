<template>
  <transition-group :tag="tagName" name="lazy-component" style="position: relative;">
    <div v-if="isInit" key="component">
      <slot></slot>
    </div>
    <div v-else-if="$slots.skeleton" key="skeleton">
      <slot name="skeleton"></slot>
    </div>
    <div v-else key="loading">
      loading
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
        type: window.HTMLElement,
        default: () => null
      },
      threshold: {
        type: String,
        default: '0px'
      },
      direction: {
        type: String,
        default: 'vertical'
      }
    },

    data () {
      return {
        isInit: false,
        timer: null,
        io: null
      }
    },

    created () {
      if (this.timeout) {
        this.timer = setTimeout(() => {
          this.init()
        }, this.timeout)
      }
    },

    mounted () {
      if (!this.timeout) {
        let rootMargin
        switch (this.direction) {
          case 'vertical':
            rootMargin = `${this.threshold} 0px`
            break
          case 'horizontal':
            rootMargin = `0px ${this.threshold}`
            break
        }
        this.io = new window.IntersectionObserver(this.intersectionHandler, {
          rootMargin,
          root: this.viewport
        })
        this.io.observe(this.$el)
      }
    },

    beforeDestroy () {
      if (!this.io) {
        this.io.unobserve(this.$el)
      }
    },

    methods: {
      intersectionHandler ([ {
        time,
        rootBounds,
        boundingClientRect,
        intersectionRect,
        intersectionRatio,
        target
      } ]) {
        if (intersectionRatio > 0) {
          this.init()
          this.io.unobserve(this.$el)
        }
      },

      init () {
        this.$emit('beforeInit')
        this.requestIdleCallback((deadline) => {
          // console.log('idleCallback', deadline.timeRemaining(), window.performance.now() - start)
          this.isInit = true
          this.$emit('init')
        }, {
          timeout: 50
        })
      },

      requestIdleCallback (...args) {
        return (window.requestIdleCallback || ((cb) => {
          let start = Date.now()
          return setTimeout(() => {
            cb({
              didTimeout: false,
              timeRemaining: function () {
                return Math.max(0, 50 - (Date.now() - start))
              }
            })
          }, 1)
        }))(...args)
      }
    }
  }
</script>

<style>
    .lazy-component-enter {
      opacity: 0;
    }

    .lazy-component-enter-to {
       opacity: 1;
    }

    .lazy-component-enter-active {
      transition: opacity 0.3s 0.2s;
      position: absolute;
      top: 0;
      width: 100%;
    }

    .lazy-component-leave {
      opacity: 1;
    }

    .lazy-component-leave-to {
      opacity: 0;
    }

    .lazy-component-leave-active {
      transition: opacity 0.5s;
    }
</style>

