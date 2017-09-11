<template>
    <div style="height: 100%;">
        <div class="index-d3 switch">
            <div class="d3-more" style="display: block;">
                <h2>模块即将可见时自动加载</h2>
                <details open="true">
                  <summary>查看代码示例</summary>
                  <pre v-highlightjs="code"><code class="html">{{ code }}</code></pre>
                </details>
                <template v-for="i in 10">
                    <vue-lazy-component>
                        <st-series-sohu/>
                        <st-series-sohu-skeleton slot="skeleton"/>
                    </vue-lazy-component>

                    <vue-lazy-component>
                        <st-movie-qq/>
                        <st-movie-qq-skeleton slot="skeleton"/>
                    </vue-lazy-component>

                    <vue-lazy-component>
                        <st-live/>
                        <st-live-skeleton slot="skeleton"/>
                    </vue-lazy-component>

                    <vue-lazy-component>
                        <st-niux/>
                        <st-niux-skeleton slot="skeleton"/>
                    </vue-lazy-component>

                    <vue-lazy-component>
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

    data () {
      return {
        code: `<vue-lazy-component>
    <st-series-sohu/>
    <st-series-sohu-skeleton slot="skeleton"/>
</vue-lazy-component>

<vue-lazy-component>
    <st-movie-qq/>
    <st-movie-qq-skeleton slot="skeleton"/>
</vue-lazy-component>

<vue-lazy-component>
    <st-live/>
    <st-live-skeleton slot="skeleton"/>
</vue-lazy-component>

<vue-lazy-component>
    <st-niux/>
    <st-niux-skeleton slot="skeleton"/>
</vue-lazy-component>

<vue-lazy-component>
    <st-mo-jin/>
    <st-mo-jin-skeleton slot="skeleton"/>
</vue-lazy-component>`
      }
    },

    methods: {
        reportFirstScreen () {

        }
    }
}
</script>
