<template>
  <router-link :to="`/details/${country.alpha3Code}`">
    <div class="card" :class="theme">
      <img :src="country.flags.svg" :alt="`${country.name} flag`" />
      <div class="card__descriptions">
        <h3 class="card__descriptions__title">{{ country.name }}</h3>
        <p class="card__descriptions__info">
          <strong>Population:</strong> {{ country.population }}
        </p>
        <p class="card__descriptions__info">
          <strong>Region:</strong> {{ country.region }}
        </p>
        <p class="card__descriptions__info">
          <strong>Capital:</strong> {{ country.capital }}
        </p>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "Card",
  props: {
    theme: {
      type: String,
      require: true,
      default: "light",
    },
    country: {
      type: Object,
      require: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  width: 263px;
  min-height: 340px;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: var(--box-shadow);

  &.light {
    background-color: var(--clr-light-primary);
    color: var(--clr-light -text);
  }
  &.dark {
    background-color: var(--clr-dark-primary);
    color: var(--clr-dark-text);
  }

  &__descriptions {
    padding: 2rem 1.5rem;

    &__title {
      padding-bottom: 1.5rem;
    }
    &__info {
      font-weight: 300;
    }
  }
}
</style>