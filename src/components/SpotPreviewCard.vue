<template>
  <!-- Background image -->
  <img
    v-bind:src="spot.image.src"
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
        : 'bg-shark-800 opacity-80'
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
</template>

<script>
export default {
  name: "SpotPreviewCard",

  props: {
    spot: Object,
  },

  methods: {
    toDateTime(secs) {
      let t = new Date(1970, 0, 1);
      t.setSeconds(secs);
      return t;
    },
  },

  computed: {
    selectedSpotId() {
      return this.$store.getters.selectedSpotId;
    },
  },
};
</script>