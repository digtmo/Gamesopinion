import Vue from 'vue'
import router from 'vue-router'
import Home from '../views/Home'
import Administracion from '../views/Administracion'
import Opiniones from '../views/Opiniones'
import NotFound from '../views/NotFound'
import editandoOpinion from '../components/editandoOpinion'

Vue.use(router)

export default new router({
  mode: 'history' ,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/administracion',
      name: 'Administracion',
      component: Administracion,
    },
    {
      path: '/editando-opinion/:index',
      component: editandoOpinion,
      name: 'editandoOpinion',
      props: true

    },
    {
      path: '/opiniones',
      name: 'Opiniones',
      component: Opiniones
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    },
  ]


// const router = new VueRouter({
//   mode: 'history',
//   base: process.env.BASE_URL,
//   routes
// })
})
