<template>
  <div class="box form">
    <div class="columns">
      <div
        class="column is-5"
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
      <div class="column is-3">
        <div class="select">
          <select v-model="idProject">
            <option value="">Choose your project</option>
            <option
              :value="project.id"
              v-for="project in projects"
              :key="project.id"
            >
              {{ project.name }}
            </option>
          </select>
        </div>
      </div>
    </div>
    <div class="column">
      <counter @toFinishCounter="endTask" />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useStore } from "vuex";
import { key } from "@/store";
import Counter from "./Counter.vue";
export default defineComponent({
  name: "Form",

  emits: ["savingTask"],

  data() {
    return {
      description: "",
      idProject: "",
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
        project: this.projects.find((proj) => proj.id == this.idProject),
      });
      this.description = "";
    },
  },

  setup() {
    const store = useStore(key);
    return {
      projects: computed(() => store.state.projects),
    };
  },
});
</script>

<style>
.form {
  color: var(--text-primary);
  background-color: var(--bg-darkMode);
}
</style>
