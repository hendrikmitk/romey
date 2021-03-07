<template>
  <div v-if="initialized">
    <div
      class="fixed flex flex-row justify-between w-screen h-16 bg-shark-500 text-bridal-600"
      id="nav"
    >
      <router-link to="/" class="flex flex-row items-center h-full">
        <img src="./assets/romey.svg" class="mr-4 ml-14 h-4/5" />
        <h1 class="pb-2 text-3xl font-pacifico">romey</h1>
      </router-link>

      <div class="flex flex-row items-center mr-8 space-x-8">
        <router-link to="/contact">Contact</router-link>
      </div>
    </div>
    <router-view />
  </div>
  <div
    v-else
    class="flex items-center justify-center min-h-screen bg-shark-600 text-bridal-600"
  >
    <div
      class="flex items-center justify-center border-2 rounded-lg h-14 w-72 border-bridal-600"
    >
      <h1 class="text-2xl animate-pulse">Loading data</h1>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch("init");
  },

  computed: {
    initialized() {
      console.log("App initialized ⚙️");
      return this.$store.getters.initialized;
    },
  },
};
</script>
