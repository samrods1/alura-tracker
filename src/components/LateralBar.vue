<template>
  <header>
    <div>
      <h1>{{ logo }}</h1>
      <button class="button" @click="changeTheme">{{ textButton }}</button>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "lateralBar",

  emits: ["toDarkMode"],
  data() {
    return {
      logo: "Alura tracker",
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
  background: rgb(44, 107, 76);
  color: #fff;
  width: 100%;
  height: 100vh;
  text-align: center;

  background: linear-gradient(145deg, #34996a, #004753);
  box-shadow: 17px 17px 33px #9e9e9e, -17px -17px 33px #ffffff;
}

header h1 {
  font-size: 4.5rem;
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
