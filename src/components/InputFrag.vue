<script setup>

// TODO: Set data binding for text field via JSON strings resource
// Just like we do in Android via Java & XML, make it prefill the lines,
// making it automatically include all of the necessary server req components.

</script>

<template>
  <div class="input-container" >
    <div class="row">
      <div class="col-sm-2"></div>
      <div class="col-lg-8">
        <span>
          <label class="label">File:</label>
          <input class="form-control" placeholder="Query Path File"/>
        </span>
      </div>
      <div class="col-sm-2"></div>
    </div>
    <div class="row">
      <div class="col-sm-2"></div>
      <div class="col-lg-8">
        <label class="label">Head:</label>
        <!-- Dont forget to prefill the lines with fundamental headers -->
        <input class="form-control" placeholder="" rows="6" />
      </div>
      <div class="col-sm-2"></div>
    </div>
    <div class="row">
      <div class="col-sm-2"></div>
      <div class="col-lg-8">
        <label class="label">Body:</label>
        <input class="form-control" rows="6"/>
      </div>
      <div class="col-sm-2"></div>
    </div>
    <div class="row">
      <div class="col-sm-2"></div>
      <div class="col-lg-8">
        <!-- TODO: Add Icons.. They need to be imported above in the script. -->
        <button class="btn-sm rounded-pill" type="submit" >Store</button>
        <button class="btn-sm rounded-pill" type="reset" >Clear</button>
        <button class="btn-md rounded-pill" type="button" >Logger</button>
      </div>
      <div class="col-sm-2"></div>
    </div>
  </div>
</template>

<style scoped>
#input_label {
  display: block;
}
</style>