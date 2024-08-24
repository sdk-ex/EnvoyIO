<script setup>
</script>

<template>
  <main class="box">
    <div class="row r0">
        <div class="col-2"></div>
        <div class="col-8">
          <h1 class=""></h1> 
          <p></p>
        </div>
        <div class="col-2"></div>
    </div>
    <div class="row r1">
      <div class="col-2"></div>   
      <div class="col-8"></div>     
      <div class="col-2"></div>    
    </div>
  </main>
</template>

<style scoped>
.r0 {
  display: inline;
  position: sticky;
  top: 0;
  z-index: 10;
}
.r1 {
  display: inline;
  min-height: calc(100vh - 56px); /* Adjust 56px based on your navbar's height */
}
</style>
