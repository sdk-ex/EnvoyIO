<script setup>
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
  <!-- Dont mess with this. Apparently, the issue was the position of this
   container moving, not the other way around. -->
  <main class="container position-fixed">
    <div class="row">
      <RouterView class="view-box" />
    </div>
  </main>

  <!-- Below this is the ".link-box" container section -->
  <div class="container">
    <div class="row">
      <div class="nav link-box" role="button">
        <div class="container">
          <span>
            <RouterLink to="/logger" class="btn-lg rounded-pill m-1">Logger</RouterLink>
            <RouterLink to="/" class="btn-lg rounded-pill m-1">Home</RouterLink>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
main {
  display: flex;
  max-height: 100vh;
}

.link-box {
  display: block;
  margin: 100% 0% 10% 0%;
}

.view-box {
  display: inline-block;
}

@media (max-width: 900px) {
  main {
    display: flex;
    place-items: center;
  }

  .view-box {
    
    display: block;
    margin-top: 30%;
  }

  .link-box {
    display: block;
    margin-top: 130%;
  }

}
</style>
