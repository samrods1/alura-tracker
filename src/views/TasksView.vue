<template>
  <Form @savingTask="saveTask" />
  <div class="list">
    <Box v-if="listIsEmpty"> You are not so productive today :( </Box>
    <Task v-for="(task, index) in tasks" :key="index" :task="task" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Form from '../components/Form.vue';
import Task from '../components/Task.vue';
import ITask from '../Interfaces/ITask';
import Box from '../components/Box.vue';
export default defineComponent({
  name: 'App',

  data() {
    return {
      tasks: [] as ITask[],
    };
  },
  components: {
  
    Form,
    Task,
    Box,
  },

  methods: {
    saveTask(task: ITask) :void {
      this.tasks.push(task);
    },
  },
  computed: {
    listIsEmpty() :boolean {
      return this.tasks.length == 0;
    },
  },
});
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Nova+Square&display=swap');
* {
  font-family: 'Nova Square', cursive;
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
