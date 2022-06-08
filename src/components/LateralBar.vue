<template>
  <header>
    <div>
      <h1><img :src="logo" alt="Alura Tracker" /></h1>
      <button class="button" @click="changeTheme">{{ textButton }}</button>
    </div>
    <nav class="panel nt-5">
      <ul>
        <li>
          <router-link to="/" class="link">
            <i class="fas fa-tasks"></i>
            tasks
          </router-link>
        </li>
        <li>
          <router-link to="/projects" class="link">
            <i class="fas fa-project-diagram"></i>
            projects
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "lateralBar",

  emits: ["toDarkMode"],
  data() {
    return {
      logo: require("../assets/logo.png"),
      darkMode: "Turn on dark mode",
      modeIsDark: false,
    };
  },

  computed: {
    textButton() {
      if (this.modeIsDark) {
        return "Turn off dark mode";
      }
      return this.darkMode;
    },
  },

  methods: {
    changeTheme() {
      this.modeIsDark = !this.modeIsDark;
      this.$emit("toDarkMode", this.modeIsDark);
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
header {
  padding: 1rem;
  color: #fff;
  width: 100%;
  height: 100vh;
  text-align: center;

  background: linear-gradient(145deg, #001424 30%, #00eb76 100%);
}

header h1 {
  font-size: 4.5rem;
}

header .button {
  border-radius: 20px;
  background: #f1f1f1;
}

.panel li {
  margin: 8px 0;
}

.link {
  color: #000000;
}

.link:hover {
  color: #ffffff;
}

.link.router-link-active {
  color: #00eb76;
}

@media only screen and (max-width: 768px) {
  header {
    width: 100%;
    padding: 2.5rem;
    height: auto;
  }

  header h1 {
    font-size: 2rem;
  }
}
</style>
