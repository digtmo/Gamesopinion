<template>
  <div id="app">

  
    <div id="nav">
    <Navegador>

    </Navegador>
    
    </div>

    <router-view></router-view>

    <footer>
    <div class="container">
        <div class="row">
            <div class="col-md-10 col-lg-8 mx-auto">
              
                <p class="text-muted copyright">Copyright&nbsp;©&nbsp;digtmo - 2022</p>
            </div>
        </div>
    </div>
</footer>


  </div>
</template>

<script>
import Navegador from './components/Navegador.vue'
import {mapActions} from 'vuex'

export default {
  name: 'App',
  components: {
    Navegador
  },
  methods: {
    ...mapActions(['get_jueguitos'])
  },
  mounted() {
    this.get_jueguitos()
  }
}
</script>


<style scoped>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

#nav a{

    font-weight: bold;
    color: #ffffff;
}

#nav a .router-link-exact-active {
      color: #ff24b6;
}

</style>
