<template>
  <div id="app">
    <Header :theme="theme" @toggle-theme="TOGGLE_THEME()" />
    <router-view :theme="theme" />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  components: { Header },
  computed: {
    ...mapGetters(["theme"]),
  },
  methods: {
    ...mapActions(["FETCH_COUNTRIES", "TOGGLE_THEME", "SET_INITIAL_THEME"]),
  },
  created() {
    this.SET_INITIAL_THEME();
    this.FETCH_COUNTRIES();
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;800&display=swap");

:root {
  --clr-dark-bg: #202c37;
  --clr-dark-primary: #2b3945;
  --clr-dark-text: #fff;
  --clr-light-bg: #fafafa;
  --clr-light-primary: #fff;
  --clr-light-text: #000;

  --box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 5px 0px;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Nunito Sans", sans-serif;
}

#app {
  min-height: 100vh;
}

.container {
  width: Min(90%, 80rem);
  margin: 0 auto;
}

img {
  display: block;
  width: 100%;
}

a {
  text-decoration: none;
  color: inherit;
}
</style>
