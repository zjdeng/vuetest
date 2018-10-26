<template>
  <div id="Example">
    <!-- 头部固定table -->
    <div class="tableBox" v-if="treatmentList_temp && treatmentList_temp.length != 0">
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

  </div>
</template>

<script>
import {mapGetters, Store} from 'vuex'
export default {
  name: 'Example',
	data: function () {
		return {
      patientList: []
		}
  },
  methods: {
  },
  created: function () {
  },
  watch: {
	}
}
</script>

<style lang="less">
</style>
