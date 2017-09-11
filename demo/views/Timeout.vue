<template>
    <div style="height: 100%;">
        <div class="index-d3 switch">
            <div class="d3-more" style="display: block;">
              <h2>组件2s后加载</h2>
              <details>
                  <summary>查看代码示例</summary>
                  <pre v-highlightjs="code"><code class="html">{{ code }}</code></pre>
                </details>
              <vue-lazy-component :timeout="2000">
                <st-series-sohu/>
                <st-series-sohu-skeleton slot="skeleton"/>
              </vue-lazy-component>
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

    data () {
      return {
        code: `<vue-lazy-component>
    <st-series-sohu :timeout="2000"/>
    <st-series-sohu-skeleton slot="skeleton"/>
</vue-lazy-component>
`
      }
    },

    methods: {
        reportFirstScreen () {

        }
    }
}
</script>
