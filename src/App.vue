<template>
  <div id="App">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less">
@import './assets/icon/demo.css';
@import './assets/icon/iconfont.css';
#App {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 14px;
  color: #2c3e50;
  height: 100%;
  min-height: 650px;
}
// table样式
table {
  width: 100%;
  border-spacing: 0;
  border-collapse: collapse;
  table-layout: fixed;
}
.tableBox {
  height: 100%;
  width: 100%;
  // position: relative;
  table tr {
    height: 45px;
    text-align: left;
    td:first-child {
      padding-left: 10px;
    }
  }
  & > table:first-child {
    background-color: #7891c7;
    color: #fff;
    width: 100%;
    height: 45px;
  }
  & > .tableBox-table2 {
    height: calc(100% - 45px);
    overflow-y: auto;
    tr {
      border-bottom: solid 1px #d5d5d5;
    }
    tr:nth-child(2n) {
      background: #f3f4f8;
    }
  }
}

// 弹框样式
.modal-talent {
	background-color: rgba(0, 0, 0, 0.5);
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
  left: 0;
  z-index: 90;
  min-height: 650px;
}
.modal-dialog {
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
  margin: auto;
}
.modal-content {
  height: 100%;
  position: relative;
}
.icon-cha {
  cursor: pointer;
}
</style>
