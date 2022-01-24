<template>
  <div>
    <nav class="navbar navbar-expand-md navbar-dark bg-dark">
      <a class="navbar-brand " href="/"><i class="fas fa-headset"></i>Games Opinion</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active p-2">
            <a><i class="fas fa-home"></i></a>
            <router-link to="/">Home</router-link> 
          </li>
          <li class="nav-item p-2">
            <a><i class="fas fa-comments"></i></a>
            <router-link to="/Opiniones">Opiniones</router-link>
          </li>
          <li class="nav-item p-2">
            <a><i class="fas fa-users-cog"></i></a>
            <router-link id="admin" to="/administracion">Administración</router-link>
          </li>
        </ul>
      </div>
    </nav>    
  </div>
</template>

<script>
export default{
    name: 'Navegador'
}
</script>


<style scoped>
a {
  margin-right: 10px;
}
</style>