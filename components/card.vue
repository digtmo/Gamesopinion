<template>
<div>
      <!-- inicio cards -->
  
    <div class="card mx-auto" style="width: 18rem;">
      <img class="card-img-top " :src="juego.background_image">
      <div class="card-body text-left">
        <h5 class="card-title">{{juego.name}}</h5>
      </div>
      <ul class="list-group list-group-flush text-left">
        <li class="list-group-item">rating: {{juego.rating}}</li>
        <li class="list-group-item">released: {{juego.released}}</li>
        <li class="list-group-item">updated: {{fecha}}</li>
      </ul>
      <div class="card-body">
        <!--<button type="button" class="btn btn-primary" @click="showModal"> Opinar </button>-->
        <button type="button" class="btn btn-primary" id="show-modal" @click="showModal = true">Opinar</button>
        <!--<a href="#" class="btn btn-secondary">Opinar</a>-->
      </div>
    </div>
    
  <!-- final cards -->
  <modal :nombreJuego="juego.name" v-if="showModal" @close="showModal = false" ></modal>
</div>
    
</template>


<script>
/* eslint-disable */
import modal from './modal';

export default {
  name: 'card',
  props: ['juego'],
  components: {
    modal,
  },
  data() {
    return {
      arregloFecha: [],
      showModal: false
    }
  },
  methods: {

  },
  computed: {
	  fecha() {
		  this.arregloFecha = this.juego.updated.split("-").reverse()
		  this.arregloFecha[0] = this.arregloFecha[0].slice(0,2)
		  return this.arregloFecha.join("-")
	  }
  }
}
</script>

<style>
  .card-img-top {
      width: 100%;
      height: 15vw;
      object-fit: cover;
  }

  .card-title {
      font-family: 'Fjalla One', sans-serif;
      color: #383d4f;
  }

  .list-group {
      font-family: 'Open Sans', sans-serif;
      font-weight: 300;
  }

</style>