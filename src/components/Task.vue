<template>
  <Box>
    <div class="columns">
      <div class="column is-4">
        {{ task.description || "Task with no description" }}
      </div>
      <div class="column is-3">
        {{ task.project?.name || "N/A" }}
      </div>
      <div class="column">
        <Tracker :timeInSeconds="task.durationInSeconds" />
      </div>
    </div>
  </Box>
</template>

<script lang="ts">
import ITask from "../Interfaces/ITask";
import Box from "./Box.vue";
import { defineComponent, PropType } from "vue";

import Tracker from "./Tracker.vue";

export default defineComponent({
  name: "Task",
  components: { Tracker, Box },

  props: {
    task: {
      type: Object as PropType<ITask>,
      required: true,
    },
  },
});
</script>
