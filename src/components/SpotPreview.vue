<template>
  <div
    class="justify-center hidden overflow-y-scroll md:flex md:w-32 lg:w-48 xl:w-96 2xl:w-5/12 md:bg-red-200 lg:bg-green-200 xl:bg-blue-200 2xl:bg-yellow-200"
  >
    <div
      class="grid md:my-1 md:gap-x-2 md:gap-y-1 lg:my-2 lg:gap-x-4 lg:gap-y-2 xl:my-3 xl:gap-x-6 xl:gap-y-3 2xl:my-4 2xl:gap-x-8 2xl:gap-y-4 md:grid-cols-1 xl:grid-cols-2"
    >
      <div
        v-for="spot in spots"
        :key="spot.id"
        @click="toggleCard(spot.id)"
        class="relative overflow-hidden scale-125 font-merriweather md:w-24 md:h-36 lg:w-32 lg:h-48 xl:w-32 xl:h-52 2xl:w-52 2xl:h-80"
      >
        <!-- SpotPreviewCard component -->
        <SpotPreviewCard :spot="spot" />
      </div>
    </div>
  </div>
</template>

<script>
import SpotPreviewCard from "../components/SpotPreviewCard";

export default {
  name: "SpotPreview",

  components: {
    SpotPreviewCard,
  },

  methods: {
    toggleCard(cardSpotId) {
      console.log(`Card ${cardSpotId} clicked! 🖱`);
      if (cardSpotId == this.$store.getters.selectedSpotId) {
        console.log(`Reseting setSelectedSpotId to ${0} ⏮`);
        this.$store.commit("setSelectedSpotId", 0);
      } else {
        console.log(`Updating setSelectedSpotId to ${cardSpotId} ⛓`);
        this.$store.commit("setSelectedSpotId", cardSpotId);
      }
    },
  },

  computed: {
    spots() {
      return this.$store.getters.spotList;
    },
  },
};
</script> 