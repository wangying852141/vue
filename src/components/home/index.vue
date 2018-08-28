<template>
  <div>
    <mt-loadmore bottomPullText="上拉加载" bottomDropText="释放加载" :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
      <mt-swipe :auto="4000">
        <mt-swipe-item v-for="item in bannerList" :key="item.bannerid">
            <img :src="item.bannerurl" />
        </mt-swipe-item>
      </mt-swipe>
      <h3>童话</h3>
      <ul class="fairyTale">
        <router-link tag="li" :to="{path:'/bookDetil',query:{id:item.id}}" v-for="item in fairyTale" :key="item.id">
          <img :src="item.images.small" />
          <div>
            <h2>{{item.title}}</h2>
            <span>￥{{item.price}}</span>
          </div>
        </router-link>
      </ul>
      <ul class="movieList">
        <!--<router-link tag="li" :to="{name:'movieDetil',params:{id:item.id}}" v-for="item in movieList" :key="item.id">
          {{item.title}}-----{{item.id}}
        </router-link>-->
        <router-link tag="li" :to="{path:'/bookDetil',query:{id:item.id}}" v-for="item in movieList" :key="item.id">
          <img :src="item.images.small" />
          <div>
            <h2>{{item.title}}</h2>
            <span>￥{{item.price}}</span>
          </div>
        </router-link>
      </ul>
    </mt-loadmore>
  </div>
</template>

<script src="./script.js"></script>

<style lang="scss" scoped src="./style.scss"></style>
