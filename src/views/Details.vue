<template>
  <div class="details" :class="theme">
    <div class="container">
      <router-link :to="{ name: 'Home' }" class="btn" :class="theme">
        <i class="fas fa-long-arrow-alt-left"></i>
        Back
      </router-link>

      <div class="country-container">
        <img
          class="country-flag"
          :src="country.flag"
          :alt="`${country.name} flag`"
        />
        <div class="country__details">
          <h3 class="country__details__title">{{country.name}}</h3>
          <div class="country__details__infos">
            <div class="left">
              <p><strong>Native Name:</strong> {{country.nativeName}}</p>
              <p><strong>Populations:</strong> {{country.population}}</p>
              <p><strong>Region:</strong> {{country.region}}</p>
              <p><strong>Sub-Region:</strong> {{country.subregion}}</p>
              <p><strong>Capital:</strong> {{country.capital}}</p>
            </div>
            <div class="right">
              <p><strong>Top Level Domain:</strong> {{country.topLevelDomain.join()}}</p>
              <p><strong>Currencies:</strong> {{country.currencies.map(c => c.name).join()}}</p>
              <p><strong>Languages:</strong> {{country.languages.map(l => l.name).join()}}</p>
            </div>
          </div>
          <div class="country__details__borders">
            <span><strong>Border Countries: </strong></span>
            <span class="border-tag" :class="theme" v-for="borderCountry in country.borders" :key="borderCountry">
              <router-link :to="`/details/${borderCountry}`">
              {{borderCountry}}
              </router-link>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: "Details",
  props: {
    theme: {
      type: String,
      require: true,
      default: "light",
    },
  },
  computed: {
    ...mapGetters(['country'])
  },
  methods: {
    ...mapActions(['FETCH_COUNTRY_BY_NAME'])
  },
  created() {
    this.FETCH_COUNTRY_BY_NAME(this.$route.params.id)
  },
  watch: {
    $route() {
      this.FETCH_COUNTRY_BY_NAME(this.$route.params.id)
    }
  }
};
</script>

 <style lang="scss" scoped>
.details {
  min-height: calc(100vh - 80px);
  padding-top: 4.75rem;

  &.light {
    background-color: var(--clr-light-bg);
    color: var(--clr-light-text);
  }
  &.dark {
    background-color: var(--clr-dark-bg);
    color: var(--clr-dark-text);
  }

  .btn {
    display: block;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    width: 135px;
    height: 40px;
    border: none;
    border-radius: 5px;
    outline: none;
    box-shadow: var(--box-shadow);
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }

    &.light {
      background-color: var(--clr-light-primary);
      color: var(--clr-light -text);
    }
    &.dark {
      background-color: var(--clr-dark-primary);
      color: var(--clr-dark-text);
    }
  }

  .country-container {
    padding-top: 4.75rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 7.5rem;

    .country-flag {
      width: 560px;
      border-radius: 5px;
      box-shadow: var(--box-shadow);

      @media (max-width: 1199.98px) {
        width: 100%;
      }
    }

    .country__details {
      flex: 1;

      &__infos {
        padding-top: 2rem;
        display: flex;
        justify-content: space-between;

        @media (max-width: 575.98px) {
          flex-direction: column;
          align-items: left;
        }

        .left,
        .right {
          flex: 1;
          line-height: 2;
        }
      }

      &__borders {
        padding-top: 3rem;
        display: flex;
        align-items: left;
        flex-wrap: wrap;
        gap: 0.5rem;

        .border-tag {
          padding: 0.25rem 1rem;
          border-radius: 5px;
          margin-left: 1rem;

          &.light {
            background-color: var(--clr-light-primary);
            color: var(--clr-light -text);
          }
          &.dark {
            background-color: var(--clr-dark-primary);
            color: var(--clr-dark-text);
          }
        }
      }
    }
  }
}
</style>