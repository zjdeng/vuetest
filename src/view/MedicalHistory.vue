<template>
  <div id="medicalHistory">
    <el-row :gutter="10">
      <el-col :span="16">
        <div class="grid-content medicalHistory-left">
          <div class="medicalHistory-box">
            <div class="box-title">
              <i></i>
              <span>现病史</span>
            </div>
            <div></div>
          </div>
          
        </div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content medicalHistory-diagnosis">
          <div class="box-title">
            <i></i>
            <span>诊断</span>
          </div>
        </div>
        <div class="grid-content medicalHistory-doctorAdvice">
          <div class="box-title">
            <i></i>
            <span>医嘱</span>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<style lang="less">
  #medicalHistory {
    height: 100%;
  }
  .medicalHistory-left {
    height: 100%;
  }
  .medicalHistory-diagnosis {
    height: calc(50% - 5px);
    margin-bottom: 10px;
  }
  .medicalHistory-doctorAdvice {
    height: calc(50% - 5px);
  }
</style>

<script>
export default {
  data () {
    const item = {
      date: '2016-05-02',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄'
    }
    return {
      tableData: Array(20).fill(item)
    }
  }
}
</script>
