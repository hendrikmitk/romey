<template>
  <div class="flex h-screen pt-16">
    <!-- SpotPreview section (Left) -->
    <div
      class="justify-center hidden py-4 overflow-y-scroll md:flex md:w-32 lg:w-48 xl:w-96 2xl:w-5/12 bg-bridal-300"
    >
      <div
        class="grid md:gap-x-2 md:gap-y-1 lg:gap-x-4 lg:gap-y-2 xl:gap-x-6 xl:gap-y-3 2xl:my-4 2xl:gap-x-8 2xl:gap-y-4 md:grid-cols-1 xl:grid-cols-2"
      >
        <div
          v-for="spot in spots"
          :key="spot.id"
          @click="toggleCard(spot)"
          class="relative overflow-hidden scale-125 cursor-pointer font-merriweather md:w-24 md:h-36 lg:w-32 lg:h-48 xl:w-32 xl:h-52 2xl:w-52 2xl:h-80"
        >
          <!-- SpotPreviewCard component -->
          <SpotPreviewCard :spot="spot" />
        </div>
      </div>
    </div>
    <!-- Map section (Right) -->
    <GMapMap
      class="py-4 pl-2 pr-4 2xl:pl-4 2xl:py-8 2xl:pr-8 bg-bridal-300"
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
            <!-- MapInfoWindow Component  -->
            <MapInfoWindow :spot="spot" />
          </GMapInfoWindow>
        </GMapMarker>
      </GMapCluster>
    </GMapMap>
  </div>
</template>

<script>
import MapInfoWindow from "../components/MapInfoWindow";
import SpotPreviewCard from "../components/SpotPreviewCard";

export default {
  name: "Dashboard",

  components: {
    MapInfoWindow,
    SpotPreviewCard,
  },

  methods: {
    toDateTime(secs) {
      let t = new Date(1970, 0, 1);
      t.setSeconds(secs);
      return t;
    },

    toggleMarker(markerSpotId) {
      console.log(`Marker ${markerSpotId} clicked! 📍`);
      if (markerSpotId == this.$store.getters.selectedSpotId) {
        console.log(`Return without updating setSelectedSpotId 😴`);
        return;
      } else {
        console.log(`Updating setSelectedSpotId to ${markerSpotId} ⛓`);
        this.$store.commit("setSelectedSpotId", markerSpotId);
      }
    },

    toggleCard(spot) {
      console.log(`Card ${spot.id} clicked! 🃏`);
      if (spot.id == this.$store.getters.selectedSpotId) {
        console.log(`setSelectedSpotId is already ${spot.id} 💁`);
        console.log(`Updating detailSpot to ${spot.title} ⛓`);
        this.$store.commit("setDetailSpot", spot);
        this.$router.push({
          name: "SpotDetails",
          params: { spotId: spot.id },
        });
      }
      if (spot.id !== this.$store.getters.selectedSpotId) {
        console.log(`Updating setSelectedSpotId to ${spot.id} ⛓`);
        this.$store.commit("setSelectedSpotId", spot.id);
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
