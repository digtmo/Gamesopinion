<template>
  <div>
      <div class="card" v-for="(opinion, index) in opinionUser" :key="index">
        <div class="card-header" id="headingOne">
          <h2 class="mb-0">
            <button
              class="btn btn-link btn-block text-left"
              type="button"
              data-toggle="collapse"
              data-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            > Opinion creada por: {{ opinion.nombre }}. Para el juego: {{ opinion.nombreJuego }}
            </button>
          </h2>
        </div>

        <div
          id="collapseOne"
          class="collapse show"
          aria-labelledby="headingOne"
          data-parent="#accordionExample"
        >
          <div class="card-body text-left">
            <strong>Opinión: </strong> {{ opinion.opinion }}
          </div>
        </div>
      </div>

    
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "listaOpiniones",
  computed: {
    ...mapState(["opinionUser"]),
  },
};
</script>

<style scoped>
button {
  margin: 5px;
}
</style>
