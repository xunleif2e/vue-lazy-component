<template>
    <div style="height: 100%;">
        <div class="index-d3 switch">
            <div class="d3-more" style="display: block;">
                <h2>组件即将可见时自动加载，配合 webpack 做到组件代码异步分包载入</h2>
                <details>
                  <summary>查看代码示例</summary>
                  <h3>Template</h3>
                  <pre v-highlightjs="template"><code class="html">{{ template }}</code></pre>

                  <h3>Script</h3>
                  <pre v-highlightjs="js"><code class="javascript">{{ js }}</code></pre>
                </details>
                <template v-for="i in 10">
                    <vue-lazy-component >
                      <template scope="scope">
                        <st-series-sohu v-if="scope.loading"/>
                      </template>
                      <st-series-sohu-skeleton slot="skeleton"/>
                    </vue-lazy-component>

                    <vue-lazy-component>
                      <template scope="scope">
                        <st-movie-qq v-if="scope.loading"/>
                      </template>
                      <st-movie-qq-skeleton slot="skeleton"/>
                    </vue-lazy-component>

                    <vue-lazy-component>
                      <template scope="scope">
                        <st-live v-if="scope.loading"/>
                      </template>
                      <st-live-skeleton slot="skeleton"/>
                    </vue-lazy-component>

                    <vue-lazy-component>
                      <template scope="scope">
                        <st-niux v-if="scope.loading"/>
                      </template>
                      <st-niux-skeleton slot="skeleton"/>
                    </vue-lazy-component>

                    <vue-lazy-component>
                      <template scope="scope">
                        <st-mo-jin v-if="scope.loading"/>
                      </template>
                      <st-mo-jin-skeleton slot="skeleton"/>
                    </vue-lazy-component>
                </template>
            </div>
        </div>
    </div>
</template>

<script>
import '@/assets/css/common.css'
import '@/assets/css/d3.css'
import '@/assets/css/load.css'
import '@/assets/css/load-sec.css'
import StMovieQqSkeleton from '@/components/StMovieQqSkeleton'
import StSeriesSohuSkeleton from '@/components/StSeriesSohuSkeleton'
import StLiveSkeleton from '@/components/StLiveSkeleton'
import StNiuxSkeleton from '@/components/StNiuxSkeleton'
import StMoJinSkeleton from '@/components/StMoJinSkeleton'

export default {
    components: {
      StMovieQqSkeleton,
      StSeriesSohuSkeleton,
      StLiveSkeleton,
      StNiuxSkeleton,
      StMoJinSkeleton,
      StMovieQq (resolve) {
        require(['@/components/StMovieQq'], resolve)
      },
      StSeriesSohu (resolve) {
        require(['@/components/StSeriesSohu'], resolve)
      },
      StLive (resolve) {
        require(['@/components/StLive'], resolve)
      },
      StNiux (resolve) {
        require(['@/components/StNiux'], resolve)
      },
      StMoJin (resolve) {
        require(['@/components/StMoJin'], resolve)
      }
    },

    data () {
      return {
        template: `<vue-lazy-component >
  <template scope="scope">
    <st-series-sohu v-if="scope.loading"/>
  </template>
  <st-series-sohu-skeleton slot="skeleton"/>
</vue-lazy-component>

<vue-lazy-component>
  <template scope="scope">
    <st-movie-qq v-if="scope.loading"/>
  </template>
  <st-movie-qq-skeleton slot="skeleton"/>
</vue-lazy-component>

<vue-lazy-component>
  <template scope="scope">
    <st-live v-if="scope.loading"/>
  </template>
  <st-live-skeleton slot="skeleton"/>
</vue-lazy-component>

<vue-lazy-component>
  <template scope="scope">
    <st-niux v-if="scope.loading"/>
  </template>
  <st-niux-skeleton slot="skeleton"/>
</vue-lazy-component>

<vue-lazy-component>
  <template scope="scope">
    <st-mo-jin v-if="scope.loading"/>
  </template>
  <st-mo-jin-skeleton slot="skeleton"/>
</vue-lazy-component>`,
        js: ` components: {
  StMovieQqSkeleton,
  StSeriesSohuSkeleton,
  StLiveSkeleton,
  StNiuxSkeleton,
  StMoJinSkeleton,
  StMovieQq (resolve) {
    require(['@/components/StMovieQq'], resolve)
  },
  StSeriesSohu (resolve) {
    require(['@/components/StSeriesSohu'], resolve)
  },
  StLive (resolve) {
    require(['@/components/StLive'], resolve)
  },
  StNiux (resolve) {
    require(['@/components/StNiux'], resolve)
  },
  StMoJin (resolve) {
    require(['@/components/StMoJin'], resolve)
  }
},`
      }
    }
}
</script>
