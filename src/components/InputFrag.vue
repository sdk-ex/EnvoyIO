<script setup>
// TODO: Set data binding for text field via JSON strings resource
// Just like we do in Android via Java & XML, make it prefill the lines,
// making it automatically include all of the necessary server req components.

/**
 * jsdocs
 * 
***/
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-lg">
        <span>
          <label class="label">File:</label>
          <input class="form-control" placeholder="Query Path File" />
        </span>
      </div>
    </div>
    <div class="row">
      <div class="col-lg">
        <label class="label">Head:</label>
        <!-- Dont forget to prefill the lines with fundamental headers -->
        <input class="form-control" placeholder="" rows="6" />
      </div>
    </div>
    <div class="row">
      <div class="col-lg">
        <label class="label">Body:</label>
        <input class="form-control" rows="6" />
      </div>
    </div>
    <div class="row">
      <div class="col-lg">
        <span class="col m-2">
          <button class="btn-sm rounded-pill m-2" type="submit">Store</button>
          <button class="btn-sm rounded-pill m-2" type="reset">Clear</button>
          <button class="btn-md rounded-pill m-2" type="button">View</button>
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped>
#input_label {
  display: block;
}

.col {
  display: flex;
  position: sticky;
}
  
</style>