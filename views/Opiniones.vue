<template>
  <div>
    <h1>Lista de opiniones</h1>
    <div class="alert alert-danger" role="alert" v-if="opinionUserVacio == 0">
      No existen opiniones por mostrar!
    </div>
    


    <div class="accordion" id="accordionExample" v-else>
      <listaOpiniones/>
      
    </div>
    
  </div>
</template>

<script>
import listaOpiniones from '../components/listaOpiniones'
import {mapState, mapGetters} from 'vuex';
export default {
  name: 'Opiniones',
  components: {
    listaOpiniones,
  },
  computed: {
    ...mapState(['opinionUser']),
    ...mapGetters(['opinionUserVacio'])
  }
}
   /* data() {
    return {
      
    },
   1.llamar funcion de que devuelva un true o false en caso que el arrglo del opiniones del store 
      este vacio o no, y ocuparlo en las alertas de opiniones y administracion*/
  
</script>
