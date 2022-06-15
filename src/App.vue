<template>
  <main
    class="columns is-gapless is-multiline"
    :class="{ darkMode: modeIsDark }"
  >
    <div class="column is-one-quarter">
      <Lateral-bar @toDarkMode="changeTheme" />
    </div>
    <div class="column is-three-quater content">
      <Notification/>
      <router-view></router-view>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import LateralBar from './components/LateralBar.vue';
import Notification from "../src/components/Notification.vue";


export default defineComponent({
  name: 'App',

  data() {
    return {
      modeIsDark: false,
    };
  },

  methods: {
    changeTheme(modeIsDark: boolean) {
      this.modeIsDark = modeIsDark;
    },
  },

  components: {
    LateralBar,
    Notification
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
