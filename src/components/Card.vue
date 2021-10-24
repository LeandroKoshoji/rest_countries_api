<template>
  <div class="card" :class="theme">
      <img src="https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg" alt="Taliban">
      <div class="card__descriptions">
          <h3 class="card__descriptions__title">Afeganistão</h3>
          <p class="card__descriptions__info"><strong>Population:</strong> 38928341</p>
          <p class="card__descriptions__info"><strong>Region:</strong> Asia</p>
          <p class="card__descriptions__info"><strong>Capital:</strong> Kabul</p>
      </div>
  </div>
</template>

<script>
export default {
    name: 'Card',
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
.card {
    width: 265px;
    height: 340px;
    border-radius: 5px;
    overflow: hidden;
    box-shadow: var(--box-shadow);

    &.light {
        background-color: var(--clr-light-primary);
        color:var(--clr-light -text)
    }
    &.dark {
        background-color: var(--clr-dark-primary);
        color:var(--clr-dark-text)
    }

    &__descriptions{
        padding:2rem 1.5rem;

        &__title {
            padding-bottom: 1.5rem;
        }
        &__info {
            font-weight: 300;
        }
    }
}
</style>