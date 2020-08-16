<template>
  <div class="Controls">
    <div class="Controls-group">
      <h3>Shapes</h3>
      <div class="Controls-row">
        <Option v-for="option in shapes" @toggle="toggleShape" :key="option.id" :option="option" />
      </div>
    </div>
    <div class="Controls-group">
      <h3>Time</h3>
      <div class="Controls-row">Add toggle for timed/count and number input</div>
    </div>
    <div class="Controls-group">
      <h3>Overlay</h3>
      <div class="Controls-row">
        <Option @toggle="toggleOverlay" :option="overlayOption" />
      </div>
    </div>
  </div>
</template>

<script>
import Option from "./Option";

export default {
  name: "Controls",
  components: {
    Option,
  },
  data() {
    return {
      shapes: [
        {
          id: 0,
          text: "Cube",
          toggled: false,
        },
        {
          id: 1,
          text: "Sphere",
          toggled: false,
        },
        {
          id: 2,
          text: "Cylinder",
          toggled: false,
        },
        {
          id: 3,
          text: "Torus",
          toggled: false,
        },
        {
          id: 4,
          text: "Torus Loop",
          toggled: false,
        },
      ],
      overlay: true,
    };
  },
  methods: {
    toggleShape: function (id) {
      this.shapes[id].toggled = !this.shapes[id].toggled;
    },
    toggleOverlay: function () {
      this.overlay = !this.overlay;
    },
  },
  computed: {
    overlayOption: function () {
      return {
        id: "overlay",
        text: this.overlay ? "On" : "Off",
        toggled: this.overlay,
      };
    },
  },
};
</script>

<style scoped>
.Controls {
  margin: 1em auto;
  display: flex;
  flex-direction: column;
}

.Controls-group {
  margin: 0.5em auto;
  padding: 0.5em;
  border: 1px solid #333;
  border-radius: 6px;
}

.Controls-row {
  display: flex;
}
</style>