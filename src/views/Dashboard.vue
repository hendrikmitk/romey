<template>
  <div class="flex h-screen pt-16">
    <SpotCards />
    <Map />
  </div>
</template>

<script>
import SpotCards from "../components/SpotCards";
import Map from "../components/Map";

export default {
  name: "Dashboard",
  components: {
    SpotCards,
    Map,
  },
};
</script>
