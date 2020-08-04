<template>
  <div class="Canvas2D" :style="{ width: width + 'px' }">
    <div class="cursor" :class="{ hidden: !cursor.visible }" :style="cursorPosition"></div>
    <canvas id="Canvas2D-render" :width="width" :height="height"></canvas>
  </div>
</template>

<script>
import DrawContext from '../utils/DrawContext';
export default {
  name: "Canvas2D",
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
      context: null,
      cursor: {
        visible: false,
        left: 0,
        top: 0
      }
    }
  },
  mounted() {
    const canvas = document.getElementById('Canvas2D-render');
    this.context = new DrawContext(canvas);

    canvas.addEventListener('mousemove', (e) => {
      this.cursor.visible = true;
      this.cursor.left = e.offsetX;
      this.cursor.top = e.offsetY;
      this.context.draw(e)
    });
    canvas.addEventListener('mousedown', (e) => this.context.startDraw(e));
    canvas.addEventListener('mouseup', () => this.context.drawing = false);
    canvas.addEventListener('mouseout', () => {
      this.cursor.visible = false;
      this.context.drawing = false
    });
  },
  computed: {
    cursorPosition: function() {
      return {
        top: this.cursor.top + 'px',
        left: this.cursor.left + 'px'
      };
    }
  }
}
</script>

<style scoped>
.Canvas2D {
  position: relative;
  margin: auto;
}

#Canvas2D-render {
  border: 1px solid purple;
}

#Canvas2D-render:hover {
  cursor: none;
}

.cursor {
  pointer-events: none;
  position: absolute;
  display: block;
  height: 6px;
  width: 6px;
  border-radius: 50%;
  background-color: #000;
}

.hidden {
  display: none;
}
</style>