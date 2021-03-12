<template>
  <GMapMap
    :center="mapCenter"
    :zoom="3"
    :options="{
      zoomControl: true,
      mapTypeControl: false,
      scaleControl: false,
      streetViewControl: false,
      rotateControl: false,
      fullscreenControl: false,
    }"
    map-type-id="terrain"
    style="width: 100vw"
  >
    <GMapCluster :minimumClusterSize="3">
      <GMapMarker
        v-for="spot in spots"
        :key="spot.id"
        :position="spot.location.coordinates"
        :draggable="false"
        :clickable="true"
        @click="toggleMarker(spot.id)"
      >
        <GMapInfoWindow :opened="selectedSpotId == spot.id ? true : false">
          <!-- TODO Make a component for the InfoWindow -->
          <div
            class="relative m-0.5 overflow-hidden rounded-md font-merriweather w-24 h-36 lg:w-32 lg:h-48"
          >
            <!-- Background image -->
            <img
              v-bind:src="spot.image.src"
              @click="toggleCard(spot.id)"
              class="object-cover w-full origin-center rounded-sm h-28 lg:h-36"
            />

            <!-- Background overlay -->
            <div
              class="absolute inset-0 rounded-sm bg-shark-600 opacity-60"
            ></div>

            <!-- Background border -->
            <div
              class="hidden lg:flex absolute rounded-sm top-0.5 right-0.5 bottom-0.5 left-0.5"
            ></div>

            <!-- Card wrapper -->
            <div
              class="absolute inset-0 flex flex-col justify-end w-full h-full"
            >
              <!-- Content wrapper -->
              <div class="p-1.5 lg:p-2">
                <!-- Date -->
                <div class="pl-1 w-max bg-shark-600">
                  <p
                    class="mr-1 italic font-light text-left my-0.5 text-xxxs lg:text-xxs text-bridal-400"
                  >
                    {{
                      toDateTime(spot.date.seconds).toLocaleDateString(
                        "en-us",
                        {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        }
                      )
                    }}
                  </p>
                </div>

                <!-- Title -->
                <p
                  class="lg:mt-0.5 lg:mb-1 md:text-sm lg:text-base text-bridal-500"
                >
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
                class="flex items-center justify-center w-24 h-10 text-bridal-200 bg-shark-500 flew-row lg:w-32 lg:h-12"
              >
                <svg
                  @click="toggleInfoButton(spot)"
                  class="duration-200 transform cursor-pointer lg:duration-300 hover:scale-110 lg:hover:scale-125 h-4/6 lg:h-3/5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </GMapInfoWindow>
      </GMapMarker>
    </GMapCluster>
  </GMapMap>
</template>

<script>
export default {
  name: "Map",

  methods: {
    toDateTime(secs) {
      let t = new Date(1970, 0, 1);
      t.setSeconds(secs);
      return t;
    },

    toggleMarker(markerSpotId) {
      console.log(`Marker ${markerSpotId} clicked! 🖱`);
      if (markerSpotId == this.$store.getters.selectedSpotId) {
        console.log(`Return without updating setSelectedSpotId 😴`);
        return;
      } else {
        console.log(`Updating setSelectedSpotId to ${markerSpotId} ⛓`);
        this.$store.commit("setSelectedSpotId", markerSpotId);
      }
    },

    toggleInfoButton(buttonSpot) {
      console.log(`Info button ${buttonSpot.id} clicked! ℹ️`);
      if (buttonSpot.id !== this.$store.getters.selectedSpotId) {
        return;
      } else {
        console.log(`Updating detailSpot to ${buttonSpot.title} 💅`);
        this.$store.commit("setDetailSpot", buttonSpot);
        this.$router.push({
          name: "SpotDetails",
          params: { spotId: buttonSpot.id },
        });
      }
    },
  },

  computed: {
    spots() {
      return this.$store.getters.spotList;
    },

    mapCenter() {
      return this.$store.getters.mapCenter;
    },

    selectedSpotId() {
      return this.$store.getters.selectedSpotId;
    },
  },
};
</script>