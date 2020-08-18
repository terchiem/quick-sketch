<template>
  <div class="CanvasContainer" :style="containerSize">
    <Canvas3D :style="leftTranslate" :width="width" :height="height" />
    <Canvas2D :style="rightTranslate" :width="width" :height="height" :overlay="overlay" />
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
    overlay: {
      type: Boolean,
      required: true,
    },
  },
  computed: {
    containerSize: function () {
      return {
        width: this.width + "px",
        height: this.height + "px",
      };
    },
    leftTranslate: function () {
      return {
        transform: this.overlay
          ? "translateX(0)"
          : `translateX(${this.width / -2}px)`,
      };
    },
    rightTranslate: function () {
      return {
        transform: this.overlay
          ? "translateX(0)"
          : `translateX(${this.width / 2}px)`,
      };
    },
  },
};
</script>

<style>
.CanvasContainer {
  box-sizing: content-box;
  margin: 0 auto;
  position: relative;
  display: flex;
  justify-content: center;
}

.CanvasContainer > * {
  position: absolute;
  transition: 0.3s cubic-bezier(0.17, 0.68, 0.52, 1.06);
}
</style>