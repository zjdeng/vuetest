<template>
  <div id="Example">
    <!-- 头部固定table -->
    <div class="tableBox">
      <table>
        <tr>
          <td>序号</td>
          <td>类型</td>
          <td>医嘱名称</td>
          <td>操作</td>
        </tr>
      </table>
      <div class="tableBox-table2">
        <table>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </table>
      </div>
    </div>
    <AlertDialog :params="AlertDialogBool" :AlertDialogObj="AlertDialogObj" @closeParams="triggerAlertDialog"></AlertDialog>
  </div>
</template>

<script>
import {mapGetters, Store} from 'vuex'
import AlertDialog from '../components/AlertDialog'
let echarts = require('echarts/lib/echarts')
require('echarts/lib/chart/pie')
export default {
  name: 'Example',
  components: { AlertDialog },
	data: function () {
		return {
      patientList: [],
      AlertDialogBool: false,
      AlertDialogObj: {},
		}
  },
  methods: {
    triggerAlertDialog: function (val) {
      this.AlertDialogBool = val
    }
  },
  created: function () {
  },
  watch: {
	}
}
</script>

<style lang="less">
</style>
