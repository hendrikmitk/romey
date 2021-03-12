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
          <!-- Component for the InfoWindow -->
          <MapInfoWindow :spot="spot" />
        </GMapInfoWindow>
      </GMapMarker>
    </GMapCluster>
  </GMapMap>
</template>

<script>
import MapInfoWindow from "../components/MapInfoWindow";

export default {
  name: "Map",

  components: {
    MapInfoWindow,
  },

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