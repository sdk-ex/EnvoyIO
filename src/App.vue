<script setup>
  import { RouterLink, RouterView } from 'vue-router';
  import ControlPadView from './views/ControlPadView.vue';
  import ErrorFrag from './components/ErrorFrag.vue';

   
</script>

<template>
  <nav class="menu-nav">
    <div class="m-1">
      <menu class="ml-5">
        <button class="" type=""></button>
        <button class="" type=""></button>
        <button class="" type=""></button>
      </menu>
    </div>
  </nav>
  <main>
    <ControlPadView/>
  </main>
  <footer>
    <!-- This should probably be the Logger view, since we have it set to be 
      routing from this file, and we may as well not even have the router if 
      we arent going to actually use it for anything. Also the point of SPA is
      to help avoid extra flyouts and crap like that... 
      Just some post design food for thought. %*% -->
    <RouterLink to="/logger" class="btn-md rounded-pill">Logger</RouterLink>
  </footer>
</template>

<style scoped>
main {
  display: block
}
.menu-nav{
  display: block;
}
</style>
