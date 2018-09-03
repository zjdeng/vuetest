<template>
  <div id="app">
      <!-- <img src="./assets/logo.png"> -->
    <el-container>
      <el-aside width="150px">
        <i class="logo"></i>
        <ul>
          <li>
            <router-link to="/" ><i class="icon-logs"></i><span>病史信息</span></router-link>
            <div></div>
          </li>
          <li>
            <router-link to="/Communication" ><i class="icon-communication"></i><span>沟通</span></router-link>
            <div></div>
          </li>
          <!-- <li>
            <router-link to="/"><i class="icon-check"></i><span>查体</span></router-link>
            <div></div>
          </li>
          <li>
            <router-link to="/"><i class="icon-treatment"></i><span>医嘱</span></router-link>
            <div></div>
          </li>
          <li>
            <router-link to="/"><i class="icon-diagnosis"></i><span>诊断</span></router-link>
            <div></div>
          </li> -->
        </ul>
      </el-aside>
      <el-container>
        <el-header>
          <img src="static/img/photo.png" alt="">
          <span @click="clickFun">姓名：陈文迪</span>
          <span>性别：女</span>
          <span>年龄：30岁</span>
          <span>主诉：体重减轻6月，伴反复咳嗽咳痰4月</span>
          <input type="button" value="进入观察">
        </el-header>
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})
export default {
  name: 'App',
  data: function () {
    return {
      current_node_id: ''
    }
  },
  methods: {
    init: function () {
      this.axios.get('/clinic/vspmanager/process/createProcess/20180420080000001')
        .then(function (response) {
          console.log(response)
          var data = response.data.responseData
          // this.current_node_id = data.current_node_id
          console.log(store.state.count)
        })
    },
    clickFun: function () {
      store.commit('increment')
      console.log(store.state.count)
    }
  },
  created: function () {
    this.init()
  }
}
</script>

<style lang="less">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    height: 100%;
  }
  .logo {
    background: url('../static/img/logo.png');
    width: 135px;
    height: 25px;
    display: block;
    margin: 17px auto;
  }
  .el-container {
    background-color: #f4f5f7;
    height: 100%;
  }
  .el-aside {
    background-color: #1d2637;
    color: #333;
    width: 150px;
  }
  .el-aside ul > li {
    position: relative;
  }
  .el-aside ul > li > div {
    background-color: #2d3953;
    border-left: solid 5px #4873e4;
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    display: none;
    z-index: 1;
  }
  .el-aside ul > li > a {
    display: block;
    color: #fff;
    width: 100%;
    height: 100%;
    text-decoration: none;
    padding-left: 26px;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 2;
  }
  .el-aside ul > li > a:hover + div {
    display: block;
  }
  .el-aside ul > li > a.active + div {
    display: block
  }
  .el-aside ul > li > a > i {
    display: inline-block;
    margin-right: 10px;
    vertical-align: -4px;
  }
  .icon-logs {
    background: url('../static/img/icon-logs.png');
    width: 20px;
    height: 20px;
  }
  .icon-communication {
    background: url('../static/img/icon-communication.png');
    width: 20px;
    height: 18px;
  }
  .icon-check {
    background: url('../static/img/icon-check.png');
    width: 19px;
    height: 23px;
  }
  .icon-treatment {
    background: url('../static/img/icon-treatment.png');
    width: 20px;
    height: 16px;
    vertical-align: -2px !important;
  }
  .icon-diagnosis {
    background: url('../static/img/icon-diagnosis.png');
    width: 18px;
    height: 20px;
  }

  .el-header {
    background-color: #fff;
    border-bottom: solid 1px #e6e6e8;
    color: #333;
    line-height: 60px;
    padding-left: 15px;
    padding-right: 0;
  }
  .el-header > img {
    border-radius: 50%;
    width: 46px;
    height: 46px;
    vertical-align: -18px;
  }
  .el-header > span {
    margin-left: 15px;
  }
  .el-header > input {
    background-color: #4873e4;
    color: #fff;
    width: 150px;
    height: 100%;
    float: right;
  }

  .el-main {
    height: calc(100% - 60px);
    padding: 10px;
  }

  .el-row {
    height: 100%;
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 2px;
    height: 100%;
  }
  .grid-content {
    background-color: #fff;
    border: solid 1px #e5e5e5;
    border-radius: 2px;
    min-height: 36px;
  }

  .box-title {
    border-bottom: solid 1px #e5e5e5;
    height: 45px;
    line-height: 44px;
    padding-left: 8px;
  }
  .box-title > i {
    background-color: #4873e4;
    display: inline-block;
    height: 16px;
    width: 5px;
    vertical-align: -3px;
    margin-right: 8px;
  }
</style>
