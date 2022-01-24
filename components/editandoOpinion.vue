<template>
  <div>
    <h1>Editando la opinion de: {{nombreJuego}}</h1>
    <form>
      <div class="form-group my-4">
        <label for="exampleFormControlInput1">Nombre</label>
        <input
          type="text"
          class="form-control"
          id="exampleFormControlInput1"
          v-model="nombre"
        />
      </div>

      <div class="form-group">
        <label for="exampleFormControlTextarea1">Opinion</label>
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          v-model="opinion"
        ></textarea>
      </div>
      <button class="btn btn-primary" @click="volverAdmin()">Regresar</button>
      <button class="btn btn-info" @click.prevent="guardarOpinion()">Guardar</button>
    </form>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';

export default {
  name: "editandoOpinion",
  props: { //['index']
    index: String,
},
data() {
  return {
    nombre:'',
    opinion: '',
    nombreJuego: '',

  }
},
  computed: {
    ...mapGetters(['getOpinionIndex'])
  },
  methods: {
    volverAdmin() {
      this.$router.push('/administracion');
    },
    ingresarOpinion(opinion){
      console.log(opinion)
      this.nombre = opinion.nombre;
      this.opinion = opinion.opinion;
      this.nombreJuego = opinion.nombreJuego;
    },

    guardarOpinion(){
      let opinionEditada = {
        nombre: this.nombre,
        opinion: this.opinion,
        nombreJuego: this.nombreJuego,
        index: this.index
      };
      this.guardarEdit(opinionEditada);
      this.volverAdmin()
    },
    ...mapActions(['guardarEdit'])
  },
  created() {
    let opinion = this.getOpinionIndex(this.index);
    this.ingresarOpinion(opinion);
  }

};
</script>

<style scoped>
form {
    margin-left: 204px;
    margin-right: 238px;
}
label{
  margin-right: 737px;
}
h1{
  margin-top: 20px;
}
</style>