<template>
  <div class="home">
    <HelloWorld msg="now with Vue Router and Vuex" />
  </div>
</template>

<script>
import HelloWorld from "../components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
};
</script>
