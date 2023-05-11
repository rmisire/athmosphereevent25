<template>
  <div id="nav">
    <img alt="Vue logo" src="../assets/logo.webp">
    <router-link to="/">Accueil</router-link> 
    <router-link to="/nos-services">Nos Services</router-link> 
    <router-link to="/newsletter">Newsletter</router-link> 
    <router-link to="/galerie">Galerie</router-link> 
    <router-link to="/apropos">À Propos</router-link> 
    <router-link to="/contact">Contact</router-link>
  </div>
</template>

<script>
export default {
name: "NavBar"
}
</script>

<style scoped>
#nav {
  padding: 30px;
  background-color: black;
  color: var(--terciary-color);
  font-weight: bold;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  z-index: 100;
  overflow: auto;
}

#nav a.router-link-exact-active{
  color: var(--secondary-color);
}

a{
  color: var(--terciary-color);
  text-decoration: none;
  font-size: 1.2rem;
  margin-right: auto;
}


</style>