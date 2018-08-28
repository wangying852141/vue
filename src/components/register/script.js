import tools from '@/tools/index.js'
import axios from 'axios'
import { Toast } from 'mint-ui'
import md5 from 'js-md5'

export default {
  data () {
    return {
      phoneNum: '',
      phoneNumState: '',
      code: '',
      codeState: '',
      password: '',
      passwordState: '',
      codeStr: '发送验证码',
      flag: true,
      admincode: ''
    }
  },
  methods: {
    register () {
      if (this.phoneNumState != 'success') {
        Toast('请确保手机号是正确的')
        return
      }
      if (this.codeState != 'success') {
        Toast('请确保验证码的正确性')
        return
      }
      if (this.code != this.admincode) {
        Toast('验证码错误')
        return
      }
      if (this.passwordState != 'success') {
        Toast('请确保密码是有效的')
        return
      }
      
      this.password = md5(this.password)

      //提交数据
      axios.post(tools.baseUrl + '/api/registerUserAction',{phoneNum: this.phoneNum, password: this.password})
        .then((res) => {
          if (res.data == 1) {
            Toast('注册成功')
            this.phoneNum = ''
            this.code = ''
            this.password = ''
          } else {
            Toast('注册失败')
          }
        })
    },
    startTime (time) {
      var timer = setInterval(() => {
        time--
        if (time == 0) {
          this.codeStr = '发送验证码'
          clearInterval(timer)
        } else {
          this.codeStr = time + 's后重新发送'
          this.flag = false  // 防止用户连续点击
        }
      }, 1000)
    },
    sendCode () {
      axios.get(tools.baseUrl + '/api/getPhoneCode?phoneNum=' + this.phoneNum)
        .then((res) => {
          console.log(res.data)
          if (res.data.state == 0) {
            this.phoneNumState = 'warning'
            Toast('该手机号已经注册，请直接登录')
          } else {
            this.admincode = res.data.code
            if (this.flag) {
              this.startTime(20)
            }
          }
        })
        .catch((err) => {
          console.log(err)
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