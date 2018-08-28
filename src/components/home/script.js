import axios from 'axios';
import Vue from 'vue'
import { Indicator, SwipeItem, Swipe, Loadmore, Search } from 'mint-ui'

Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(Loadmore)
Vue.use(Search)

export default {
  data () {
    return {
      movieList: [],
      bannerList: [],
      allLoaded: false,
      skipNum: 0,
      serchValue: '',
      fairyTale: []
    }
  },
  methods: {
    loadTop () {
      setTimeout(() => {
        axios.get('http://localhost:3030/api/bookpaging?limitNum=5&skipNum=0')
          .then((res) => {
            this.movieList = res.data
            console.log(this.movieList)
            this.$refs.loadmore.onTopLoaded()
          })
      }, 2000)
    },
    loadBottom () {
      console.log(this.skipNum)
      setTimeout(() => {
        axios.get('http://localhost:3030/api/bookpaging?limitNum=5&skipNum=' + this.skipNum)
          .then((res) => {
            this.movieList = [...this.movieList, ...res.data]
            res.data == 0 ? this.allLoaded == true : this.allLoaded == false
            this.$refs.loadmore.onBottomLoaded()
            this.skipNum += 1
          })
      }, 2000)
    },
    goMovieDetail (id) {
      this.$router.push('/bookDetil?id=' +id ); 
    },
    getBannerData () {
      return axios.get('http://localhost:3030/api/banner')
    },
    getFairyTale () {
      return axios.get('http://localhost:3030/api/fairyTale')
    }
  },
  mounted () {
    Indicator.open('加载中...')
    axios.all([this.getBannerData(),this.getFairyTale()])
      .then(axios.spread((banner, fairyTale) => {
        Indicator.close()
        // console.log(list)
        // this.castsList = list.data
        this.bannerList = banner.data
        this.fairyTale = fairyTale.data
        console.log(this.bannerList)
      }))
    // axios.get('http://localhost:8000/api/casts')
    //   .then(this.getDataSuccess)
    //   .catch(this.getDataFail)

  }
}