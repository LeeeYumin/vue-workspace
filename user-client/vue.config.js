const { defineConfig } = require('@vue/cli-service')
const target = "http://localhost:3000"; // 대체될 origin 넣을 것임 (오류)
module.exports = defineConfig({
  transpileDependencies: true,
  devServer : {
    proxy : {
      '^/api' : { // /api 로 시작해야 함을 의미
        target, // 타겟
        changeOrigin : true, // 특정 오리진
        ws : false, // 웹소켓 무력화시킴 의미 (기본값은 사용). 오류 가능성 대비
        pathRewrite : {'^/api' : '/'} // 객체 형태로 입력
      }
    }
  }
})
