<script setup>
import ControlPadView from './views/ControlPadView.vue';
import ErrorFrag from './components/ErrorFrag.vue';
/**  
 * Note:
 * I ended up putting the router into "ControlPadView.vue", 
 * thats what I wanted to do, leaving this file to act mainly
 * as a main container for every other bit of content no matter
 * how small.
 * 
 * This would include a proper navbar, if there was one. But the
 * navmenu idea may not even stay, since there can simply be a 
 * settings flyout instead. 
***/

</script>

<template>
  <!--
  <nav class="menu-nav">
    <div class="m-1">
      <menu class="ml-5">
        <button class="" type="drowpdown"></button>
        <button class="" type=""></button>
        <button class="" type=""></button>
      </menu>
    </div>
  </nav>
  -->
  <main class="container-flex">
    <RouterView />
    <div class="container-flex main-ctrlpad">
    <RouterLink to="/logger" class="btn-lg rounded-pill m-2">Logger</RouterLink>
    <RouterLink to="/" class="btn-lg rounded-pill m-2">Home</RouterLink>
  </div>
  </main>
</template>

<style scoped>
@media (min-width: 1024px){
  main {
    display: flexbox;
  }
}

</style>
