<template>
  <div>
    <table class="table my-4">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Persona</th>
          <th scope="col">Juego</th>
          <th scope="col">Opinion</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(opinion,index) in opinionUser"  :key="index">
          <td scope="row">{{index + 1}}</td>
          <td>{{opinion.nombre}}</td>
          <td>{{opinion.nombreJuego}}</td>
          <td>{{opinion.opinion }}</td>
          <td>
            <button class="btn btn-danger" @click="borrarOpinion(index)">Eliminar</button>
            <button class="btn btn-info" @click="irEditandoOpinion(index)">Editar</button>
          </td>
        </tr>

        <!--opinionadmin
        
        v-for="(x,index) in opinionUser" :key="index">
      <opinionadmin:x='y'></opinionadmin>
        
        
        -->
      </tbody>
    </table>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
export default {
  name: 'opinionadmin',
  computed: {
    ...mapState(['opinionUser'])
  },
  methods: {
    irEditandoOpinion(index) {
      this.$router.push(`/editando-opinion/${index}`);
    },
    borrarOpinion(index){
      this.borrarOpi(index)
    },
    ...mapActions(['borrarOpi'])
  }
};
</script>

<style scoped>
button {
  margin: 5px;
}
</style>
