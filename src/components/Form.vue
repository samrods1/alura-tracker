<template>
  <div class="box form">
    <div class="columns">
      <div
        class="column is-8"
        role="form"
        aria-label="Form to create new tasks"
      >
        <input
          type="text"
          class="input"
          placeholder="What task do you want to create?"
          v-model="description"
        />
      </div>
    </div>
    <div class="column">
      <counter @toFinishCounter="endTask" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Counter from "./Counter.vue";
export default defineComponent({
  name: "Form",

  emits: ["savingTask"],

  data() {
    return {
      description: "",
    };
  },
  components: {
    Counter,
  },

  methods: {
    endTask(timeTracked: number): void {
      this.$emit("savingTask", {
        durationInSeconds: timeTracked,
        description: this.description,
      });
      this.description = "";
    },
  },
});
</script>

<style>
.form {
  color: var(--text-primary);
  background-color: var(--bg-darkMode);
}
</style>
