<template>
<div>
  <h1>LISTA DE JUEGOS DISPONIBLES</h1>
  <div class="row row-cols-1 row-cols-md-3">
    <div class="col mb-4" v-for="(juego, index) in dataJuegos" :key="index">
      <card :juego='juego'></card>
    </div>
  </div>
  

    </div>





</template>

<script>

import card from '../components/card';
import {mapState} from 'vuex';

export default {
  name: 'Home',
  components: {
    card,
  },
  data() {
    return {
    }
  },
  methods: {
  },
  computed: {
    ...mapState(['dataJuegos']),
  }
}
</script>

<style scoped>
h1 {
  color: #383d4f;
  font-family: 'Fjalla One';
  font-weight: 400;
  font-size: 30pt;
  margin-top: 45px;
  margin-bottom:45px;
}
</style>
