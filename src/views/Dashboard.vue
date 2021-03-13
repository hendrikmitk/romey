<template>
  <div class="flex h-screen pt-16">
    <SpotPreview />
    <Map />
  </div>
</template>

<script>
import SpotPreview from "../components/SpotPreview";
import Map from "../components/Map";

export default {
  name: "Dashboard",

  components: {
    SpotPreview,
    Map,
  },
};
</script>
