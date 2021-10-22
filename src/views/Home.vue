<template>
  <div class="home" :class="theme">
    <div class="container">
      <Searchers :theme="theme"/>
      Home
    </div>
  </div>
</template>

<script>
import Searchers from '../components/Searchers.vue'
export default {
  name: 'Home',
  components: { Searchers },
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
}
</style>