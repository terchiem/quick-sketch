<template>
  <div id="app">
    <Header />
    <Controls :toggleOverlay="toggleOverlay" :overlay="overlay" />
    <CanvasContainer :width="500" :height="500" :overlay="overlay" />
    <Timer :timeLimit="600" />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import CanvasContainer from "./components/CanvasContainer.vue";
import Controls from "./components/Controls.vue";
import Timer from "./components/Timer.vue";

export default {
  name: "App",
  components: {
    Header,
    CanvasContainer,
    Controls,
    Timer,
  },
  data() {
    return {
      overlay: false,
    };
  },
  methods: {
    toggleOverlay: function () {
      this.overlay = !this.overlay;
    },
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
