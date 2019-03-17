import Vue from 'vue';
import Vuex from 'vuex';
import Api from '@/utils/http';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    courses: [],
    course: {}
  },
  mutations: {
    setCourses(state, value){
      state.courses = value.data
      console.log(state.courses)
    },
    setCourse(state, value){
      state.course = value.data
    }
  },
  getters: {
    courses(state){return state.courses},
    course(state){return state.course}
  },
  actions: {
    async getCourses({ commit }){
      var url = 'http://localhost:3000/courses'
      await Api.get(url, {}).then(
        (value) => {
         commit('setCourses', value)
        }
      )
    },
    async getCourse({ commit }, id){
      console.log(id)
      var url = `http://localhost:3000/courses/${id}`
      await Api.get(url, {}).then(
        (value) => {
         commit('setCourse', value)
        }
      )
    }
  }
});