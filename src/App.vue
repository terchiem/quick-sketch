<template>
  <div id="app">
    <Header />
    <Controls />
    <CanvasContainer :width="500" :height="500" />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import CanvasContainer from "./components/CanvasContainer.vue";
import Controls from "./components/Controls.vue";

export default {
  name: "App",
  components: {
    Header,
    CanvasContainer,
    Controls,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: grid;
  grid-template-columns: 20em 6fr;
}

* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  margin: 0;
}

body {
  background-color: #eee;
}
</style>
