<template>
  <div class="flex h-screen pt-16">
    <div
      id="content"
      class="flex flex-col w-4/6 px-24 pt-10 pb-2 2xl:pt-16 2xl:px-32 bg-bridal-300"
    >
      <div>
        <div
          @click="
            $router.go(-1);
            centerMapLastdetail();
          "
          class="flex items-center justify-center w-40 h-10 transform border rounded-md border-shark-500 hover:bg-bridal-300 hover:text-shark-500 bg-shark-500 text-bridal-300"
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
              d="M12 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M3 12l6.414 6.414a2 2 0 001.414.586H19a2 2 0 002-2V7a2 2 0 00-2-2h-8.172a2 2 0 00-1.414.586L3 12z"
            ></path>
          </svg>

          <h1 class="font-medium font-montserrat">Go back</h1>
        </div>
      </div>
      <div
        class="flex flex-col h-full py-6 justify-evenly font-merriweather text-shark-500"
      >
        <!-- Title, date and author -->
        <div>
          <!-- Title -->
          <div class="mb-2 text-5xl">{{ detailSpot.title }}</div>

          <!-- Date and author -->
          <div class="flex items-center justify-between">
            <div class="italic text-shark-400">
              {{
                toDateTime(detailSpot.date.seconds).toLocaleDateString(
                  "en-us",
                  {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  }
                )
              }}
            </div>
            <div class="flex space-x-2">
              <p class="flex items-center text-sm font-light text-shark-500">
                {{ detailSpot.author }}
              </p>
              <img
                v-bind:src="detailSpot.author_image_src"
                class="w-12 h-12 rounded-full"
              />
            </div>
          </div>
        </div>
        <div class="flex">
          <div class="w-4/12 xl:text-lg">
            <div
              class="relative overflow-hidden lg:w-32 lg:h-48 xl:w-48 xl:h-64 2xl:w-60 2xl:h-96"
            >
              <!-- Image -->
              <img
                v-bind:src="detailSpot.image.src"
                class="object-cover w-full h-full origin-center rounded-sm"
              />

              <!-- Overlay -->
              <div
                class="absolute rounded-sm inset-0 bg-shark-400 opacity-10 xl:top-0.5 xl:right-0.5 xl:bottom-0.5 xl:left-0.5 2xl:top-1 2xl:right-1 2xl:bottom-1 2xl:left-1"
              ></div>

              <!-- Border -->
              <div
                class="hidden lg:flex absolute border rounded-sm border-bridal-600 top-0.5 right-0.5 bottom-0.5 left-0.5 xl:top-1 xl:right-1 xl:bottom-1 xl:left-1 2xl:top-2 2xl:right-2 2xl:bottom-2 2xl:left-2"
              ></div>
            </div>
          </div>

          <!-- Text -->
          <div class="w-8/12 pl-6 overflow-scroll text-sm 2xl:text-lg">
            {{ detailSpot.text }}
          </div>
        </div>

        <!-- Location -->
        <div class="flex items-center">
          <div class="mr-2 text-shark-300">
            <svg
              class="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              ></path>
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              ></path>
            </svg>
          </div>
          <div class="text-xs italic text-shark-400">
            {{ detailSpot.location.city }},
            {{ detailSpot.location.country }}
          </div>
        </div>
      </div>
    </div>
    <div class="w-2/6 p-4" v-if="detailSpot">
      <GMapMap
        :center="detailSpot.location.coordinates"
        :zoom="4.5"
        :options="{
          zoomControl: true,
          mapTypeControl: false,
          scaleControl: false,
          streetViewControl: false,
          rotateControl: false,
          fullscreenControl: false,
        }"
        map-type-id="terrain"
        style="width: 100%; height: 100%"
      >
        <GMapMarker :position="detailSpot.location.coordinates"> </GMapMarker>
      </GMapMap>
    </div>
  </div>
</template>

<script>
export default {
  name: "SpotDetails",

  methods: {
    toDateTime(secs) {
      let t = new Date(1970, 0, 1);
      t.setSeconds(secs);
      return t;
    },

    centerMapLastdetail() {
      console.log(
        `Center map by last detailSpot ${this.$store.getters.detailSpot.title} 📍`
      );
      this.$store.commit(
        "initMapCenter",
        this.$store.getters.detailSpot.location.coordinates
      );
    },
  },

  computed: {
    detailSpot() {
      return this.$store.getters.detailSpot;
    },
  },
};
</script>