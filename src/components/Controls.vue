<template>
  <div class="Controls">
    <div class="Controls-group">
      <h3>Shapes</h3>
      <div class="Controls-row">
        <Option v-for="option in shapes" @toggle="toggleShape" :key="option.id" :option="option" />
      </div>
    </div>
    <div class="Controls-group">
      <h3>Session</h3>
      <div class="custom-control custom-radio custom-control-inline">
        <input type="radio" name="session" id="time" class="custom-control-input" />
        <label for="time" class="custom-control-label">Timed</label>
      </div>
      <div class="custom-control custom-radio custom-control-inline">
        <input type="radio" name="session" id="set" class="custom-control-input" />
        <label for="set" class="custom-control-label">Sets</label>
      </div>
      <div class="form-group row">
        <label for="timeInput" class="col-sm-4 col-form-label">Minutes</label>
        <div class="col-sm-8">
          <input type="text" name="timeInput" id="timeInput" class="form-control" />
        </div>
      </div>
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
  props: {
    toggleOverlay: {
      type: Function,
      required: true,
    },
    overlay: {
      type: Boolean,
      required: true,
    },
  },
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
    };
  },
  methods: {
    toggleShape: function (id) {
      this.shapes[id].toggled = !this.shapes[id].toggled;
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
  margin: 0 2em;
}

.Controls-group {
  margin: 0.5em auto;
  padding: 0.5em;
  border: 1px solid #333;
  border-radius: 6px;
}

.Controls-row {
  display: flex;
  flex-direction: column;
}
</style>