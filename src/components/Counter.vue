<template>
  <div class="is-flex is-align-items-center is-justify-content-space-between">
    <Tracker :timeInSeconds="timeInSeconds" />
    <button class="button" @click="start" :disabled="timeIsCounting">
      <span class="icon">
        <i class="fas fa-play"></i>
      </span>
      <span>play</span>
    </button>
    <button class="button" @click="stop" :disabled="!timeIsCounting">
      <span class="icon">
        <i class="fas fa-stop"></i>
      </span>
      <span>stop</span>
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Tracker from "./Tracker.vue";
export default defineComponent({
  name: "Counter",

  emits: ["toFinishCounter"],

  data() {
    return {
      timeInSeconds: 0,
      tracker: 0,
      timeIsCounting: false,
    };
  },

  components: {
    Tracker,
  },
  methods: {
    start() {
      this.timeIsCounting = true;
      this.tracker = setInterval(() => {
        this.timeInSeconds += 1;
      }, 1000);
    },
    stop() {
      this.timeIsCounting = false;
      clearInterval(this.tracker);
      this.$emit("toFinishCounter", this.timeInSeconds);
      this.timeInSeconds = 0;
    },
  },
});
</script>
