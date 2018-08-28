let expect = require('chai').expect
let request = require('supertest')

var postArr = [
  {
    info: '测试登录接口',
    address: 'http://localhost:3030',
    path: '/api/loginUserAction',
    data: {
      phoneNum: '17839192936',
      password: '8521419'
    }
  }
]

function checkPostApi (config) {
  const {info, address, path, data} = config
  it(info, function (done) {
    request(address)
      .post(path)
      .send(data)
      .expect(200)
      .expect('Content-Type', /html/)
      .end(function (err, res) {
        // console.log(res)
        expect(res).to.be.an('object')
        done()
      })
  })
}
describe('api 接口 测试', () => {

  for (var item of postArr) {
    checkPostApi(item)
  }
})

/**
 *  通过mocha api.test.js --timeout 5000
 */
