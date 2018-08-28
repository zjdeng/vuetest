<template>
  <div id="app">
      <!-- <img src="./assets/logo.png"> -->
    <el-container>
      <el-aside width="150px">
        <ul>
          <li><router-link to="/">hello1</router-link></li>
          <li><router-link to="/1">hello2</router-link></li>
        </ul>
      </el-aside>
      
      <el-container>
        <el-header style="text-align: right; font-size: 12px">
          <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>查看</el-dropdown-item>
              <el-dropdown-item>新增</el-dropdown-item>
              <el-dropdown-item>删除</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span>王小虎</span>
        </el-header>
        
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    height: 100%;
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
  .el-header {
    background-color: #fff;
    border-bottom: solid 1px #e6e6e8;
    color: #333;
    line-height: 60px;
  }
  .el-main {
    height: calc(100% - 60px);
    padding: 10px;
  }

  .el-aside ul > li > a {
    color: #fff;
  }
</style>