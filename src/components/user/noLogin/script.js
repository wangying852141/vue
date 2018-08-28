import Vue from 'vue'
import { Button } from 'mint-ui'

Vue.use(Button)
export default {
  methods: {
    goRegister () {
      this.$router.push('/register' ); 
    },
    goLogin () {
      this.$router.push('/loginUser' ); 
    }
  }
}