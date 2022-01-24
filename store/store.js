/* eslint-disable */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dataJuegos: [],
    opinionUser: [],
    
  },

  getters:{
    opinionUserVacio: state => {
      return state.opinionUser.length
    },
    getOpinionIndex: state => index => {
      return state.opinionUser[index]
    }


  },
  mutations: {
    nombreDeLaMutacionParaAgregarAlState(state, data) {
      state.dataJuegos = data;
    },
    agregarOpinion(state, data) {
      state.opinionUser.push(data);
		  console.log(state.opinionUser);
    },
    guardarEditado(state, data) {
      console.log(data)
      state.opinionUser[data.index] = {
        nombre: data.nombre,
        opinion: data.opinion,
        nombreJuego: data.nombreJuego
      },
    
      /*state.opinionUser[data.index].nombre = data.nombre;
      state.opinionUser[data.index].opinion = data.opinion;
      state.opinionUser[data.index].nombreJuego = data.nombreJuego;*/
      console.log(data)
    },
    borrarOpinion(state,index){
      state.opinionUser.splice(index, 1)
    }
  },
  actions: {

    async get_jueguitos({ commit }) {
      // GET request using fetch with async/await
      const response = await fetch("https://rawg.io/api/games?key=f74d6b3080384ee18e6c22c360014901");
      const data = await response.json();
      commit('nombreDeLaMutacionParaAgregarAlState', data.results);
    },
    guardarInfo({commit}, data){
      commit('agregarOpinion', data)
    },
    guardarEdit({commit}, data) {
      commit('guardarEditado', data)
    },
    borrarOpi({commit},index){
      commit('borrarOpinion', index)
    }
     

  },



  modules: {
  },
})
