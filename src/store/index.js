import Vuex from 'vuex'
import Vue from 'vue'
import data from '../api/data'

Vue.use(Vuex)
// eslint-disable-next-line new-cap
export default new Vuex.Store({
  state: { // data
    students: [],
    teamA: [],
    teamB: []
  },
  getters: {

  },
  actions: {
    getStudents (context) {
      context.commit('setStudents')
    },
    addTeamMember (context, data) {
      context.commit('pushMemberToTeam', data)
      context.commit('enableButtonState', data.index)
    },
    removeFromTeam (context, data) {
      context.commit('spliceFromTeam', data)
      context.commit('disableButtonState', data)
    }
  },
  mutations: { // Used for changing the state
    setStudents (state) {
      state.students = data.getStudents()
    },
    pushMemberToTeam (state, data) {
      if (data.type === 'A') {
        state.teamA.push(state.students[data.index])
      } else {
        state.teamB.push(state.students[data.index])
      }
    },
    enableButtonState (state, index) {
      state.students[index].selected = true
    },
    disableButtonState (state, data) {
      state.students.forEach((student) => {
        // eslint-disable-next-line no-unused-expressions
        student.id === data.member.id ? student.selected = false : ''
      })
    },
    spliceFromTeam (state, data) {
      if (data.type === 'A') {
        state.teamA.splice(data.index, 1)
      } else {
        state.teamB.splice(data.index, 1)
      }
    }
  }
})
