<template>
  <header :class="theme">
       <div class="container">
           <div class="header-container">
               <router-link :to="{ name: 'Home'}">
                   <h1>Where in the world?</h1>
               </router-link>

               <div class="theme-switcher">
                <i :class="theme === 'light' ? 'far fa-moon' : 'fas fa-moon'"></i>
                <span class="theme-text">Dark Mode</span>
               </div>
           </div>
       </div>
  </header>
</template>

<script>
export default {
    name: "Header",
    props: {
        theme: {
            type: String,
            require: true,
            default: 'dark'
        }
    }
}
</script>

<style lang="scss" scoped>
header {
    display: flex;
    align-items: center;
    width: 100%;
    height: 80px;
    box-shadow: var(--box-shadow);

    &.light {
        background-color: var(--clr-light-bg);
        color:var(--clr-light -text)
    }
    &.dark {
        background-color: var(--clr-dark-bg);
        color:var(--clr-dark-text)
    }

    @media (max-width: 575.98px) {
        .theme-text {
            display: none;
        }
    }

    .header-container {
        display: flex;
        align-items: center;
        justify-content: space-between;

        .theme-switcher {
            cursor: pointer;
        }
    }
}
</style>