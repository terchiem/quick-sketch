<template>
  <div class="Header">
    <h1>Quick Sketch</h1>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
.Header {
  margin: 2em;
  grid-column: 1 / 3;
}

h1 {
  text-align: center;
  font-variant: small-caps;
}
</style>