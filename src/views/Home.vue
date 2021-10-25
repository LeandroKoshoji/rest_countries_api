<template>
  <div class="home" :class="theme">
    <div class="container">
      <Searchers :theme="theme" />
      <div class="cards-container">
        <p v-if="loading" class="loading">Loading...</p>
        <Card
          v-else
          :theme="theme"
          v-for="country in filteredCountries"
          :key="country.alpha3Code"
          :country="country"
        />
      </div>
    </div>
  </div>
</template>
ß
<script>
import Searchers from "../components/Searchers.vue";
import Card from "../components/Card.vue";
import { mapGetters } from "vuex";
export default {
  name: "Home",
  components: { Searchers, Card },
  props: {
    theme: {
      type: String,
      require: true,
      default: "light",
    },
  },
  computed: {
    ...mapGetters(["filteredCountries", "loading"]),
  },
};
</script>

<style lang="scss" scoped>
.home {
  min-height: calc(100vh - 80px);
  padding-top: 3rem;

  &.light {
    background-color: var(--clr-light-bg);
    color: var(--clr-light-text);
  }
  &.dark {
    background-color: var(--clr-dark-bg);
    color: var(--clr-dark-text);
  }

  .cards-container {
    padding-top: 3rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, 263px);
    gap: 76px;
    justify-content: center;

    @keyframes spin {
      0% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.1);
      }
      100% {
        transform: scale(1);
      }
    }

    .loading {
      font-size: 3rem;
      animation-name: spin;
      animation-duration: 1000ms;
      animation-iteration-count: infinite;
      animation-timing-function: linear;
    }
  }
}
</style>