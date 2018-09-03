<template>
  <div id="communication">
    <el-row :gutter="10">
      <el-col :span="16">
        <div class="grid-content communication-left">
          <div class="box-title">
            <i></i>
            <span @click="add">沟通</span>
          </div>
          <div class="communication-left-content">
            <communication-box :prop1="params1"></communication-box>
          </div>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content communication-right">
          <div class="box-title">
            <i></i>
            <span>沟通操作</span>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import CommunicationBox from '../components/CommunicationBox'
export default {
  name: 'he1',
  data: function () {
    return {
      params1: [
        {
					record_question: '问问问问问问问问问问问问',
					record_answer: '答答答答答答答答答答答答'
				},
				{
					record_question: '问问问问问问问问问问问问',
					record_answer: '答答答答答答答答答答答答'
				},
				{
					record_question: '问问问问问问问问问问问问',
					record_answer: '答答答答答答答答答答答答'
				},
				{
					record_question: '问问问问问问问问问问问问',
					record_answer: '答答答答答答答答答答答答'
        }
      ]
    }
  },
  components: {
    CommunicationBox
  },
  methods: {
    init: function () {
      this.axios.get('/clinic/vspmanager/process/createProcess/20180420080000001')
        .then(function (response) {
          console.log(response)
        })
    },
    add: function () {
      this.params1.push({
        record_question: '问问问问问问问问问问问问2',
				record_answer: '答答答答答答答答答答答答2'
      })
    }
  },
  created: function () {

  }
}
</script>

<style lang="less">
#communication {
  height: 100%;
}
.communication-left {
  height: 100%;
  .communication-left-content {
    height: calc(100% - 45px);
    overflow: auto;
  }
}

.communication-right {
  height: 100%;
}
</style>
