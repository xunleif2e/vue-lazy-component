<template>
    <div style="height: 100%;">
        <div class="index-d3 switch">
            <div class="center-box" style="margin-top: -353px; height: 353px;">
                <div class="screen">
                    <header class="header nav-type2">
                        <div class="head">
                            <nav class="nav">
                                <a target="_blank" href="javascript:;">
                                    <span class="ico-nav ico-vip ani-nav"></span>
                                    <span class="text">会员</span>
                                </a>
                                <a target="_blank" href="javascript:;">
                                    <span class="ico-nav ico-movie "></span>
                                    <span class="text">电影</span>
                                </a>
                                <a target="_blank" href="javascript:;">
                                    <span class="ico-nav ico-tv "></span>
                                    <span class="text">电视剧</span>
                                </a>
                                <a target="_blank" href="javascript:;">
                                    <span class="ico-nav ico-game "></span>
                                    <span class="text">游戏</span>
                                </a>
                                <a target="_blank" href="javascript:;">
                                    <span class="ico-nav ico-show "></span>
                                    <span class="text">美女</span>
                                </a>
                                <a target="_blank" href="javascript:;">
                                    <span class="ico-nav ico-lx "></span>
                                    <span class="text">离线空间</span>
                                </a>
                                <a target="_blank" href="javascript:;">
                                    <span class="ico-nav ico-home "></span>
                                    <span class="text">我的主页</span>
                                </a>
                            </nav>
                            <div class="search">
                                <div class="sea-box"><input type="text" class="ipt-sea">
                                    <a href="javascript:;" title="搜资源" class="btn-sea bg-com">
                                        <span class="ico-t-sea"></span>
                                    </a>
                                    <a href="javascript:;" title="清除" class="btn-sea-clear"></a>
                                    <div class="drop-sea" style="display: none;">
                                        <!---->
                                        <!---->
                                        <!---->
                                    </div>
                                </div>
                                <span class="ico-sea"></span>
                            </div>
                            <a href="javascript:;" class="ico-h-play"></a>
                        </div>
                    </header>
                    <div style="position: relative;">
                        <div>
                            <div class="d3-wrap mask-ani">
                                <!---->
                                <div class="show-more">
                                    <a href="javascript:;" title="更多精彩内容" class="link-show-more hidden">
                                        <span class="ico-scroll-arw"></span>
                                    </a>
                                    <!---->
                                </div>
                                <a href="javascript:;" title="视频偏好" class="btn-fav"></a>
                                <a href="javascript:;" title="收起视频模块" class="close-top"></a>
                            </div>
                        </div>
                    </div>
                    <div class="wrap-mask" style="display: none;">
                        <div class="mask-part-1"></div>
                        <div class="mask-part-2"></div>
                        <div class="mask-part-3">
                            <ul>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="d3-more" style="display: block;">
                <template v-for="i in 10">
                  <st-series-sohu :key="i"/>
                  <st-movie-qq :key="i"/>
                  <st-live :key="i"/>
                  <st-niux :key="i"/>
                  <st-mo-jin :key="i"/>
                </template>
            </div>
        </div>
    </div>
</template>

<script>
import StMovieQq from '@/components/StMovieQq'
import StSeriesSohu from '@/components/StSeriesSohu'
import StLive from '@/components/StLive'
import StNiux from '@/components/StNiux'
import StMoJin from '@/components/StMoJin'

export default {
    components: {
      StMovieQq,
      StSeriesSohu,
      StLive,
      StNiux,
      StMoJin
    },

    methods: {
      reportFirstScreen () {

      }
    }
}
</script>
