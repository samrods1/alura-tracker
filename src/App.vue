<template>
  <main
    class="columns is-gapless is-multiline"
    :class="{ darkMode: modeIsDark }"
  >
    <div class="column is-one-quarter">
      <Lateral-bar @toDarkMode="changeTheme" />
    </div>
    <div class="column is-three-quater content">
      <Form @savingTask="saveTask" />
      <div class="list">
        <Task v-for="(task, index) in tasks" :key="index" :task="task" />
        <Box v-if="listIsEmpty"> You are not so productive today! </Box>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LateralBar from "./components/LateralBar.vue";
import Form from "./components/Form.vue";
import Task from "./components/Task.vue";
import ITask from "./Interfaces/ITask";
import Box from "./components/Box.vue";
export default defineComponent({
  name: "App",

  data() {
    return {
      tasks: [] as ITask[],
      modeIsDark: false,
    };
  },

  computed: {
    listIsEmpty(): boolean {
      return this.tasks.length === 0;
    },
  },

  methods: {
    saveTask(task: ITask) {
      this.tasks.push(task);
    },

    changeTheme(modeIsDark: boolean) {
      this.modeIsDark = modeIsDark;
    },
  },
  components: {
    LateralBar,
    Form,
    Task,
    Box,
  },
});
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Nova+Square&display=swap");
* {
  font-family: "Nova Square", cursive;
}
main {
  --bg-primary: #ffffff;
  --text-primary: #000000;
}

.list {
  padding: 1.25rem;
}

main.darkMode {
  --bg-primary: #000000;
  --text-primary: #ffffff;
}

.content {
  background-color: var(--bg-primary);
}

@media (min-width: 300px) {
  main {
    width: 100%;
  }
}
</style>
