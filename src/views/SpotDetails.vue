<template>
  <div class="flex h-screen pt-16">
    <div
      class="2xl:pt-16 2xl:px-32 bg-bridal-300 flex flex-col w-4/6 px-24 pt-10 pb-2"
    >
      <!-- ButtonBack component -->
      <ButtonBack @click="centerMapLastdetail()" />

      <div
        class="2xl:py-16 font-merriweather text-shark-500 flex flex-col justify-between h-full py-10"
      >
        <!-- Title, date and author -->
        <div>
          <!-- Title -->
          <div class="mb-2 text-5xl">{{ detailSpot.title }}</div>

          <!-- Date and author -->
          <div class="flex items-center justify-between">
            <div class="text-shark-400 italic">
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
              <p class="text-shark-500 flex items-center text-sm font-light">
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
          <div class="xl:text-lg w-4/12">
            <div
              class="lg:w-32 lg:h-48 xl:w-48 xl:h-64 2xl:w-60 2xl:h-96 relative overflow-hidden"
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
          <div class="2xl:text-lg w-8/12 pl-6 overflow-auto text-sm">
            {{ detailSpot.text }}
          </div>
        </div>

        <!-- Location -->
        <div class="text-shark-300 flex items-center">
          <svg
            class="2xl:w-8 2xl:h-8 w-5 h-5 mr-2"
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
          <div class="2xl:text-sm text-shark-400 text-xs italic">
            {{ detailSpot.location.city }},
            {{ detailSpot.location.country }}
          </div>
        </div>
      </div>
    </div>
    <div class="w-2/6 p-4" v-if="detailSpot">
      <GMapMap
        :center="detailSpot.location.coordinates"
        :zoom="5.5"
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
import ButtonBack from "../components/ButtonBack";

export default {
  name: "SpotDetails",

  components: {
    ButtonBack,
  },

  methods: {
    toDateTime(secs) {
      let t = new Date(1970, 0, 1);
      t.setSeconds(secs);
      return t;
    },

    centerMapLastdetail() {
      console.log(
        `Center map by detailSpot ${this.$store.getters.detailSpot.title} 🧭`
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
