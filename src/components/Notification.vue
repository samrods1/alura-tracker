<template>
  <div class="notification">
    <article
      class="message"
      :class="context[notification.type]"
      v-for="notification in notifications"
      :key="notification.id"
    >
      <div class="message-header">{{ notification.title }}</div>
      <div class="message-body">{{ notification.text }}</div>
    </article>
  </div>
</template>

<script lang="ts">
import { NotificationType } from "@/Interfaces/INotification";
import { useStore } from "@/store";
import { computed } from "@vue/runtime-core";
export default {
  name: "Notification",
  data(){
    return{
        context: {
            [NotificationType.SUCCESS]: 'is-success',
            [NotificationType.WARNING]: 'is-warning',
            [NotificationType.FAILED]: 'is-danger',

        }
    }
  },

  setup() {
    const store = useStore();
    return {
      notifications: computed(() => store.state.notifications),
    };
  },
};
</script>

<style scoped>
.notification {
  position: absolute;
  right: 0;
  width: 300px;
  padding: 8px;
  z-index: 1;
}
</style>
