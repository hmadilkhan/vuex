<template>
  <div>
      <ul>
          <li v-for="(student,index) in students" :key="student.id">
            {{student.name}}
            <i> {{student.games.length}} games he plays </i>
            <button :disabled="student.selected" @click="addTeamMember('A',index)">Team 1 </button>
            <button :disabled="student.selected" @click="addTeamMember('B',index)">Team 2 </button>
          </li>
      </ul>
      <hr/>
      <team-component  type="A"></team-component>
      <team-component  type="B"></team-component>
  </div>
</template>

<script>
import store from '../store/index'
import TeamComponent from '../components/TeamComponent'
export default {
  components: { TeamComponent },
  computed: {
    students () {
      return store.state.students
    }
  },
  created () {
    store.dispatch('getStudents')
  },
  methods: {
    addTeamMember (type, index) {
      store.dispatch('addTeamMember', {type, index})
    }

  }
}
</script>

<style>

</style>
