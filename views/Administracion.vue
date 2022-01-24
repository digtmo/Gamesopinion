<template>
  <div>

    <h1>Administrando la Lista de Opiniones</h1>
    <div class="alert alert-danger" role="alert" v-if="opinionUserVacio == 0">
      No existen opiniones por administrar!
    </div>

    <opinionadmin v-else></opinionadmin>
    
</div>
</template>

<script>
import opinionadmin from '../components/opinionadmin.vue';
import {mapGetters} from 'vuex'

export default {
  name: "Administracion",
  components: {
    opinionadmin,
  },
  computed: {
    ...mapGetters(['opinionUserVacio'])
  }
};
</script>
