<template>
  <div class="CanvasContainer">
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
};
</script>

<style>
.CanvasContainer {
  margin: 0 auto;
  border: 1px solid red;
  max-width: 900px;
  width: 90%;
}
</style>