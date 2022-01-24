<template>
    <div>
        <transition name="modal">
        <div class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-container">
              <div class="modal-header">
                <h5 class="text-left">Escribe tu opinion para el juego: {{nombreJuego}}</h5>
              </div>
              <div class="modal-body">
                <form>
                  <div class="form-group text-left">
                    <label for="inputNombre">Nombre</label>
                    <input
                      type="text"
                      class="form-control"
                      id="inputNombre"
                      v-model="nombre"
                    />
                  </div>

                  <div class="form-group text-left">
                    <label for="inputOpinion">Opiniones</label>
                    <textarea
                      class="form-control"
                      id="inputOpinion"
                      rows="3"
                      v-model="opinion"
                    ></textarea>
                  </div>
                </form>
              </div>

              <div class="modal-footer">
                <slot name="footer">
                  <button class="modal-default-button btn btn-secondary" @click="$emit('close')">Regresar</button>
                  <button id="guardarOpinion" class="btn btn-primary" @click="guardarOpinion()">Guardar</button>
                </slot>
              </div>

            </div>
          </div>
        </div>
      </transition>

    </div>
</template>
<script>
/* eslint-disable */
export default {
    name: 'modal',
    props: {
      nombreJuego: String
    },
    data() {
      return {
        nombre: '',
        opinion: '',
        datos: {},
      }
    },
    methods: {
      guardarOpinion() {
        this.datos = {'nombre': this.nombre, 'opinion': this.opinion, 'nombreJuego': this.nombreJuego }
		    this.nombre = ''
		    this.opinion= ''
        this.$store.dispatch('guardarInfo', this.datos)
      },
    }
}
</script>
<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 50vw;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
