import tools from '@/tools/index.js'
import axios from 'axios'
import { Toast } from 'mint-ui'
import md5 from 'js-md5'

export default {
  data () {
    return {
      phoneNum: '',
      phoneNumState: '',
      password: ''
    }
  },
  methods: {
    login() {
      if (this.phoneNumState != 'success') {
        Toast('请确保手机号是正确的')
        return
      }
      this.password = md5(this.password)
      console.log(this.password)

      //提交数据
      axios.get(tools.baseUrl + "/api/loginUserAction?phoneNum="+this.phoneNum+"&password="+ this.password)
        .then((res) => {
          if (res.data == 1) {
            Toast('登录成功')
            this.phoneNum = ''
            this.code = ''
            this.password = ''
          } else {
            Toast('账号或密码错误')
          }
        })
    }
  },
  watch: {
    phoneNum (newVal, oldVal) {
      if (tools.isPoneAvailable(newVal)) {
        this.phoneNumState = 'success'
      } else {
        this.phoneNumState = 'error'
      }
      if (newVal == '') {
        this.phoneNumState = ''
      }
    },
    password (newVal, oldVal) {
      if (newVal.length >= 6) {
        this.passwordState = 'success'
      } else {
        this.passwordState = 'error'
      }
      if (newVal == '') { // 如果输入为空，取消状态显示
        this.passwordState = ''
      }
    },
    code (newVal, oldVal) {
      if (newVal.length == 4 && newVal == this.admincode) {
        this.codeState = 'success'
      } else {
        this.codeState = 'error'
      }
      if (newVal == '') { // 如果输入为空，取消状态显示
        this.codeState = ''
      }
    }
  }
}