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
        <!-- Background image -->
        <img
          v-bind:src="spot.image.src"
          @click="toggleCard(spot.id)"
          :class="
            selectedSpotId === spot.id
              ? 'transform scale-110 duration-500 ease-out'
              : 'transform scale-100 duration-300 ease-in'
          "
          class="object-cover w-full h-full origin-center rounded-sm"
        />

        <!-- Background overlay -->
        <div
          :class="
            selectedSpotId === spot.id
              ? 'border-bridal-600 opacity-40'
              : 'bg-shark-600 opacity-80'
          "
          class="absolute rounded-sm inset-0 xl:top-0.5 xl:right-0.5 xl:bottom-0.5 xl:left-0.5 2xl:top-1 2xl:right-1 2xl:bottom-1 2xl:left-1"
        ></div>

        <!-- Background border -->
        <div
          class="hidden lg:flex absolute border rounded-sm border-bridal-600 top-0.5 right-0.5 bottom-0.5 left-0.5 xl:top-1 xl:right-1 xl:bottom-1 xl:left-1 2xl:top-2 2xl:right-2 2xl:bottom-2 2xl:left-2"
        ></div>

        <!-- Content wrapper -->
        <div
          class="absolute inset-0 flex flex-col justify-end w-full h-full p-1.5 lg:p-2 xl:p-3 2xl:p-4"
        >
          <!-- Date -->
          <div class="pl-1 2xl:pl-2 w-max bg-shark-600">
            <p
              class="mr-1 italic font-light text-left my-0.5 2xl:my-1 2xl:mr-2 text-xxxs lg:text-xxs 2xl:text-xs text-bridal-400 2xl:text-bridal-600"
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
          <p
            class="lg:mt-0.5 lg:mb-1 xl:mt-1 xl:mb-1.5 2xl:mt-2 2xl:mb-3 md:text-sm lg:text-base xl:text-lg 2xl:text-3xl text-bridal-500"
          >
            {{ spot.title }}
          </p>

          <!-- Author -->
          <div class="flex lg:space-x-1 2xl:space-x-2">
            <img
              v-bind:src="spot.author_image_src"
              class="hidden rounded-full lg:flex lg:w-4 lg:h-4 xl:w-6 xl:h-6 2xl:w-8 2xl:h-8"
            />
            <p
              class="flex items-center font-light text-xxs lg:text-xs 2xl:text-sm text-bridal-200"
            >
              {{ spot.author }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SpotCards",

  methods: {
    toDateTime(secs) {
      let t = new Date(1970, 0, 1);
      t.setSeconds(secs);
      return t;
    },

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

    selectedSpotId() {
      return this.$store.getters.selectedSpotId;
    },
  },
};
</script> 