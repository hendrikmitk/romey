<template>
  <div
    class="relative m-0.5 overflow-hidden rounded-sm font-merriweather w-24 h-36 lg:w-32 lg:h-48"
  >
    <!-- Background image -->
    <img
      v-bind:src="spot.image.src"
      class="object-cover w-24 origin-center h-36 lg:w-32 lg:h-48"
    />

    <!-- Background overlay -->
    <div class="absolute inset-0 transform bg-shark-600 opacity-40"></div>

    <!-- Card wrapper -->
    <div class="absolute inset-0 flex flex-col justify-end w-full h-full">
      <!-- Content wrapper -->
      <div class="p-1.5 lg:p-2">
        <!-- Date -->
        <div class="pl-1 w-max bg-shark-600">
          <p
            class="mr-1 italic font-light text-left my-0.5 text-xxxs lg:text-xxs text-bridal-400"
          >
            {{
              toDateTime(spot.date.seconds).toLocaleDateString("en-us", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })
            }}
          </p>
        </div>

        <!-- Title -->
        <p class="lg:mt-0.5 lg:mb-1 md:text-sm lg:text-base text-bridal-500">
          {{ spot.title }}
        </p>

        <!-- Author -->
        <div class="flex mb-1 lg:space-x-1">
          <img
            v-bind:src="spot.author_image_src"
            class="hidden rounded-full lg:flex lg:w-4 lg:h-4"
          />
          <p
            class="flex items-center font-light text-xxs lg:text-xs text-bridal-200"
          >
            {{ spot.author }}
          </p>
        </div>
      </div>

      <!-- Bottom button -->
      <div
        class="flex items-center justify-center w-24 h-10 border border-shark-500 text-bridal-300 hover:bg-bridal-300 hover:text-shark-500 bg-shark-500 flew-row lg:w-32 lg:h-10"
      >
        <svg
          @click="toggleInfoButton(spot)"
          class="cursor-pointer h-2/6 xl:h-3/6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 5l7 7-7 7"
          ></path>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MapInfoWindow",

  props: {
    spot: Object,
  },

  methods: {
    toDateTime(secs) {
      let t = new Date(1970, 0, 1);
      t.setSeconds(secs);
      return t;
    },

    toggleInfoButton(buttonSpot) {
      console.log(`InfoWindow button ${buttonSpot.id} clicked! ℹ️`);
      if (buttonSpot.id !== this.$store.getters.selectedSpotId) {
        return;
      } else {
        console.log(`Updating detailSpot to ${buttonSpot.title} ⛓`);
        this.$store.commit("setDetailSpot", buttonSpot);
        this.$router.push({
          name: "SpotDetails",
          params: { spotId: buttonSpot.id },
        });
      }
    },
  },
};
</script>