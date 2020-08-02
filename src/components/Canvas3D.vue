<template>
  <div class="Canvas3D">
    <canvas id="Canvas3D-render" :width="width" :height="height"></canvas>
  </div>
</template>

<script>
import CanvasRender from '../utils/CanvasRender';

export default {
  name: "Canvas3D",
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
  data() {
    return {
      canvas: null
    }
  },
  mounted() {
    this.canvas = new CanvasRender();
  }
};
</script>

<style>
.Canvas3D {
  border: 1px solid blue;
}

#Canvas3D-render {
  border: 1px solid orange;
}
</style>