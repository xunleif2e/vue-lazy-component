<template>
    <div style="height: 100%;" class="custom-transition">
        <div class="index-d3 switch">
            <div class="d3-more" style="display: block;">
                <h2>自定义骨架组件和真实组件切换的过渡效果</h2>
                <details>
                  <summary>查看代码示例</summary>
                  <pre v-highlightjs="code"><code class="css">{{ code }}</code></pre>
                </details>
                <template v-for="i in 10">
                    <vue-lazy-component class="custom-transition">
                        <st-series-sohu/>
                        <st-series-sohu-skeleton slot="skeleton"/>
                    </vue-lazy-component>

                    <vue-lazy-component class="custom-transition">
                        <st-movie-qq/>
                        <st-movie-qq-skeleton slot="skeleton"/>
                    </vue-lazy-component>

                    <vue-lazy-component class="custom-transition">
                        <st-live/>
                        <st-live-skeleton slot="skeleton"/>
                    </vue-lazy-component>

                    <vue-lazy-component class="custom-transition">
                        <st-niux/>
                        <st-niux-skeleton slot="skeleton"/>
                    </vue-lazy-component>

                    <vue-lazy-component class="custom-transition">
                        <st-mo-jin/>
                        <st-mo-jin-skeleton slot="skeleton"/>
                    </vue-lazy-component>
                </template>
            </div>
        </div>
    </div>
</template>

<script>
import StMovieQq from '@/components/StMovieQq'
import StMovieQqSkeleton from '@/components/StMovieQqSkeleton'
import StSeriesSohu from '@/components/StSeriesSohu'
import StSeriesSohuSkeleton from '@/components/StSeriesSohuSkeleton'
import StLive from '@/components/StLive'
import StLiveSkeleton from '@/components/StLiveSkeleton'
import StNiux from '@/components/StNiux'
import StNiuxSkeleton from '@/components/StNiuxSkeleton'
import StMoJin from '@/components/StMoJin'
import StMoJinSkeleton from '@/components/StMoJinSkeleton'

export default {
    components: {
      StMovieQq,
      StMovieQqSkeleton,
      StSeriesSohu,
      StSeriesSohuSkeleton,
      StLive,
      StLiveSkeleton,
      StNiux,
      StNiuxSkeleton,
      StMoJin,
      StMoJinSkeleton
    },

    methods: {
        reportFirstScreen () {

        }
    },

    data () {
      return {
        code: `.custom-transition .lazy-component-enter {
  opacity: 0;
  transform: scale(0.4) translate(100%);
}

.custom-transition .lazy-component-enter-to {
  opacity: 1;
}

.custom-transition .lazy-component-enter-active {
  transition: all 0.5s;
  position: absolute;
  top: 0;
  width: 100%;
}

.custom-transition .lazy-component-leave {
  opacity: 1;
}

.custom-transition .lazy-component-leave-to {
  opacity: 0;
  transform: scale(0.4) translate(-100%);
}

.custom-transition .lazy-component-leave-active {
  transition: all 0.5s;
}`
      }
    }
}
</script>

<style>
  .custom-transition .lazy-component-enter {
    opacity: 0;
    transform: scale(0.4) translate(100%);
  }

  .custom-transition .lazy-component-enter-to {
    opacity: 1;
  }

  .custom-transition .lazy-component-enter-active {
    transition: all 0.5s;
    position: absolute;
    top: 0;
    width: 100%;
  }

  .custom-transition .lazy-component-leave {
    opacity: 1;
  }

  .custom-transition .lazy-component-leave-to {
    opacity: 0;
    transform: scale(0.4) translate(-100%);
  }

  .custom-transition .lazy-component-leave-active {
    transition: all 0.5s;
  }
</style>

