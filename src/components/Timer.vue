<template>
  <div class="Timer">
    {{displayTime}}
    <button @click="test">Start</button>
  </div>

</template>

<script>
import moment from 'moment';

export default {
  name: "Timer",
  props: {
    timeLimit: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      timeLeft: 0,
    };
  },
  methods: {
    startTimer: function(timeLimit) {
      this.timeLeft = timeLimit;

      const timer = setInterval(() => {
        if (this.timeLeft <= 0) {
          clearInterval(timer);
          return;
        }
        this.timeLeft--;
      }, 1000)
    },
    test: function() {
      console.log('starting')
      this.startTimer(10)
    }
  },
  computed: {
    displayTime: function () {
      return moment.utc(this.timeLeft * 1000).format('mm:ss');
    },
  },
};
</script>

<style>
</style>