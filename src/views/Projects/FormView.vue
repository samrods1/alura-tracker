<template>
  <section class="projects">
    <form @submit.prevent="save">
      <div class="field">
        <label for="projectName" class="label"> Project Name </label>
        <input
          type="text"
          class="input"
          v-model="projectName"
          id="projectName"
        />
      </div>
      <div class="field">
        <button class="button" type="submit">Save</button>
      </div>
    </form>
  </section>
</template>

<script lang="ts">
import { useStore } from "@/store";
import { defineComponent } from "vue";

import { CHANGE_PROJECT, ADD_PROJECT} from "@/store/MutationType";
import { NotificationType } from "@/Interfaces/INotification";

import useNotifier from "@/hooks/notifier"

export default defineComponent({
  name: "Form",

  props: {
    id: {
      type: String,
    },
  },

 

  mounted() {
    if (this.id) {
      const project = this.store.state.projects.find(
        (proj) => proj.id == this.id
      );
      this.projectName = project?.name || "";
    }
  },

  data() {
    return {
      projectName: "",
    };
  },

  methods: {
    save() {
      if (this.id) {
        this.store.commit(CHANGE_PROJECT, {
          id: this.id,
          name: this.projectName,
        });
      } else {
        this.store.commit(ADD_PROJECT, this.projectName);
      }
      this.projectName = "";
      this.notify(NotificationType.SUCCESS, "Excelent!" , "The project was saved successfully")
      this.$router.push("/projects");
    },
  },

  setup() {
    const store = useStore();
    const {notify} = useNotifier();
    return {
      store,
      notify
    };
  },
});
</script>

<style scoped>
.projects {
  padding: 1.25rem;
}
</style>
