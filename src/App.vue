<template>
  <div class="container">
    <header>
      <router-view name="header"></router-view>
    </header>
    <div class="content">
      <router-view name="content"></router-view>
    </div>
    <footer>
      <v-footer></v-footer>
    </footer>
  </div>
</template>

<script>
import MainFooter from '@/components/mainfooter/index.vue'

export default {
  data () {
    return {
    }
  },
  components: {
    'v-footer': MainFooter
  }
}
</script>

<style lang="scss">
  @import '@/lib/reset.scss';
  footer {
    @include border(1px 0 0 0, #ddd, solid);
    ul {
      @include rect(100%, 100%);
      @include flexbox();
      li {
        @include flex();
        @include rect(auto, 100%);
        @include flexbox();
        @include justify-content();
        @include align-items();
      }
    }
  }
</style>
