<template>
  <div class="box has-text-weight-bold" :style="taskDisplay">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Box",
  data() {
    taskDisplay: "background-color: var(--bg-primary)";
  },
});
</script>
