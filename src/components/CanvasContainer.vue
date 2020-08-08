<template>
  <div class="CanvasContainer" :style="containerSize">
    <Canvas3D :width="width" :height="height" />
    <Canvas2D :width="width" :height="height" />
  </div>
</template>

<script>
import Canvas3D from "./Canvas3D";
import Canvas2D from "./Canvas2D";

export default {
  name: "CanvasContainer",
  components: {
    Canvas3D,
    Canvas2D,
  },
  props: {
    height: {
      type: Number,
      required: true,
    },
    width: {
      type: Number,
      required: true,
    },
  },
  computed: {
    containerSize: function() {
      return {
        width: this.width + 'px',
        height: this.height + 'px'
      }
    }
  }
};
</script>

<style>
.CanvasContainer {
  position: relative;
  display: flex;
  margin: 0 auto;
  border: 1px solid #000;
  box-sizing: content-box;
  box-shadow: 0 2px 3px 1px rgba(0,0,0,0.2);
}

.CanvasContainer > * {
  position: absolute;
}
</style>