<template>
  <div class="home" :class="theme">
    <div class="container">
      <Searchers :theme="theme"/>
      <div class="cards-container">
        <Card :theme="theme"/>
        <Card :theme="theme"/>
        <Card :theme="theme"/>
        <Card :theme="theme"/>
        <Card :theme="theme"/>
        <Card :theme="theme"/>
        <Card :theme="theme"/>
        <Card :theme="theme"/>
        <Card :theme="theme"/>
        <Card :theme="theme"/>
      </div>
    </div>
  </div>
</template>

<script>
import Searchers from '../components/Searchers.vue'
import Card from '../components/Card.vue'
export default {
  name: 'Home',
  components: { Searchers, Card },
  props: {
    theme: {
            type: String,
            require: true,
            default: 'light'
        }
  }
}
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
  }
}
</style>