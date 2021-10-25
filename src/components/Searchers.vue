<template>
  <div class="searchers" :class="theme">
    <form>
        <div class="search-container" :class="theme">
          <i class="fas fa-search"></i>
          <input
            type="text"
            placeholder="Search for a country..."
            id="search"
            class="search"
            :class="theme"
            v-model="query"
          />
        </div>
    </form>
    <div class="filter-container" :class="theme">
      <select name="region" id="region" :class="theme" v-model="filter">
        <option value="" selected>Filter by region</option>
        <option value="Africa">África</option>
        <option value="Americas">Américas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
        <option value="Polar">Polar</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  name: "Searchers",
  props: {
    theme: {
      type: String,
      require: true,
      default: "light",
    },
  },
  computed: {
    query: {
      get(){
        return this.$store.state.query
      },
      set(value) {
        this.$store.commit('SET_QUERY', value)
      }
    },
    filter: {
      get(){
        return this.$store.state.filter
      },
      set(value) {
        this.$store.commit('SET_FILTER', value)
      }
    }
  },
  created() {
    this.$store.commit('SET_QUERY', '')
    this.$store.commit('SET_FILTER', '')
  }
};
</script>

<style lang="scss" scoped>
.searchers {
  display: flex;
  align-items: left;
  justify-content: space-between;

  @media (max-width: 767.98px) {
    flex-direction: column;
    gap: 1rem;
  }

  .search-container {
    height: 55px;
    width: 480px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    padding: 1rem 2rem;
    box-shadow: var(--box-shadow);

    @media (max-width: 767.98px)  {
        width: 100%;
    }

    &.light {
      background-color: var(--clr-light-primary);
      color: var(--clr-light -text);
    }
    &.dark {
      background-color: var(--clr-dark-primary);
      color: var(--clr-dark-text);
    }

    i {
      font-size: 1rem;
    }

    .search {
      padding-left: 2rem;
      flex: 1;
      font-size: 1rem;
      background-color: transparent;
      outline: none;
      border: none;

      &.dark {
        color: #fff;
      }
    }
  }

  .filter-container {
    height: 55px;
    width: 200px;
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

    select {
      width: 100%;
      height: 100%;
      background-color: transparent;
      border: none;
      outline: none;
      padding: 1rem;
      font-size: 1rem;

      &.light {
      background-color: var(--clr-light-primary);
      color: var(--clr-light -text);
    }
    &.dark {
      background-color: var(--clr-dark-primary);
      color: var(--clr-dark-text);
    }

      &.dark {
        color: var(--clr-dark-text);
      }
    }
  }
}
</style>