import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  initState: false,
  process_id: '',
  visData: {}, // 初始化process数据
  visFlowData: [], // 初始化操作记录数据
  virtual_time: null, // 虚拟时间(累加)
  diagList: [], // 已选诊断列表
  treatmentList: [
    // {
    //   flow_type: 1,
    //   flow_state: 1
    // },
    // {
    //   flow_type: 1,
    //   flow_state: 2
    // },
    // {
    //   flow_type: 1,
    //   flow_state: 3
    // },
    // {
    //   flow_type: 1,
    //   flow_state: 4
    // },
    // {
    //   flow_type: 1,
    //   flow_state: 5
    // }
  ], // 已选医嘱列表
  progressVal: 0, // 进度值
  transitionBool: false // 初始化是否显示过渡页面（从病人选择页进入则置为true）
}

const getters = {
  getInitState: state => {
    return state.initState
  },
  getProcessId: state => {
    return state.process_id
  },
  getVisData: state => {
    return state.visData
  },
  getVisFlowData: state => {
    return state.visFlowData
  },
  getVirtualTime: state => {
    return state.virtual_time
  },
  getDiagList: state => {
    return state.diagList
  },
  getTreatmentList: state => {
    return state.treatmentList
  },
  getProgressVal: state => {
    return state.progressVal
  },
  getTransitionBool: state => {
    return state.transitionBool
  }
}

const mutations = {
  setInitState (state, type) {
    state.initState = type
  },
  setProcessId (state, val) {
    state.process_id = val
  },
  setVisDataObj (state, obj) {
    state.visData = obj
  },
  assignVisDataObj (state, obj) {
    state.visData = Object.assign({}, state.visData, obj)
  },
  setEventList (state, index) {
    state.visData.eventInfoList[index].type = false
  },
  updateEventList (state, arr) {
    state.visData.eventInfoList = arr
  },
  setVisFlowDataObj (state, obj) {
    state.visFlowData = obj
  },
  assignFlowDataObj (state, obj) {
    state.visFlowData = Object.assign({}, state.visFlowData, obj)
  },
  setVirtualTime (state, val) {
    state.virtual_time = val
  },
  setDiagList (state, arr) {
    state.diagList = arr
  },
  insertDiagData (state, val) {
    state.diagList.push(val)
  },
  setTreatmentList (state, arr) {
    state.treatmentList = arr
  },
  insertTreatmentData (state, val) {
    state.treatmentList.push(val)
  },
  updateTreatmentData (state, obj) {
    state.treatmentList[obj.index].flow_state = obj.val
  },
  setProgressVal (state, val) {
    state.progressVal = val
  },
  setTransitionBool (state, val) {
    state.transitionBool = val
  }
}

const actions = {

}

export default new Vuex.Store({
  // modules: {
  //   cart,
  //   products
  // },
  // strict: debug,
  // plugins: debug ? [createLogger()] : []
  state,
  mutations,
  getters,
  actions
})
