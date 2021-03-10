<template>
  <GMapMap
    ref="myMapRef"
    :center="mapCenter"
    :zoom="3.5"
    :options="{
      zoomControl: true,
      mapTypeControl: false,
      scaleControl: false,
      streetViewControl: false,
      rotateControl: false,
      fullscreenControl: false,
    }"
    map-type-id="terrain"
    style="width: 100%; height: auto"
  >
    <GMapCluster :minimumClusterSize="3" :zoomOnClick="true">
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
          <div class="text-lg font-bold">{{ spot.title }}</div>
          <div class="mb-1">
            {{ spot.location.city }}, {{ spot.location.country }}
          </div>
          <div class="text-xs">
            {{
              toDateTime(spot.date.seconds).toLocaleDateString("en-us", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })
            }}
          </div>
          <div class="mt-3 italic">Spot ID: {{ spot.id }}</div>
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
  },

  computed: {
    spots() {
      return this.$store.getters.spotList;
    },

    selectedSpotId() {
      return this.$store.getters.selectedSpotId;
    },

    mapCenter() {
      return this.$store.getters.mapCenter;
    },
  },
};
</script>