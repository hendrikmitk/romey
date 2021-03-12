<template>
  <div class="flex h-screen pt-16">
    <div
      @click="
        resetDetailSpot();
        $router.go(-1);
      "
      class="flex items-center justify-center w-40 h-10 transform border rounded-md border-shark-500 hover:bg-shark-500 hover:text-bridal-300 hover:border-bridal-300 bg-bridal-300 text-shark-500"
    >
      <svg
        class="absolute left-2 hover:fill-current h-4/6"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
        />
      </svg>

      <h1 class="font-medium font-montserrat">Go back</h1>
    </div>

    <h1>This will be the Spot details page for {{ detailSpot.title }} 🏝</h1>
  </div>
</template>

<script>
export default {
  name: "SpotDetails",

  methods: {
    resetDetailSpot() {
      console.log(
        `Center map by last detailSpot ${this.$store.getters.detailSpot.title} 📍`
      );
      this.$store.commit(
        "initMapCenter",
        this.$store.getters.detailSpot.location.coordinates
      );
      console.log(`Reseting detailSpot ⏮`);
      this.$store.commit("setDetailSpot", {});
    },
  },

  computed: {
    detailSpot() {
      return this.$store.getters.detailSpot;
    },
  },
};
</script>