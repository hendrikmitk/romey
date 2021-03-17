<template>
  <div v-if="initialized">
    <!-- MenuBar component -->
    <MenuBar />
    <!-- When a route is navigated to in the browser, this is where the component is rendered -->
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </div>
  <div v-else>
    <!-- LoadingPage view -->
    <LoadingPage />
  </div>
</template>

<script>
import MenuBar from "./components/MenuBar";
import LoadingPage from "./views/LoadingPage";

export default {
  components: {
    MenuBar,
    LoadingPage,
  },

  created() {
    this.$store.dispatch("init");
  },

  computed: {
    initialized() {
      return this.$store.getters.initialized;
    },
  },
};
</script>
