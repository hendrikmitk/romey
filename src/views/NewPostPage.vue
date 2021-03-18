<template>
  <div class="flex h-screen pt-16">
    <div
      class="flex flex-col w-full px-24 pt-10 pb-2 bg-bridal-300 2xl:pt-16 2xl:px-32"
    >
      <!-- ButtonBack component -->
      <ButtonBack />

      <div
        class="flex flex-col justify-between w-3/6 h-full py-10 2xl:py-16 font-merriweather text-shark-500"
      >
        <div>
          <div class="text-5xl">New Post</div>
        </div>

        <div class="flex flex-col px-0.5 py-2 space-y-4 2xl:space-y-6">
          <!-- Title -->
          <div class="flex flex-col">
            <label
              for="title"
              class="text-sm italic 2xl:pb-1 text-shark-400 2xl:text-base"
              >Title</label
            >
            <input
              type="text"
              name="title"
              id="title"
              autocomplete="off"
              v-model="title"
              placeholder="Elbphilharmonie"
              class="p-1 border-b-2 border-dotted rounded-t bg-bridal-300 focus:border-none focus:outline-none focus:bg-bridal-600 border-shark-500"
            />
          </div>

          <!-- City and country -->
          <div class="flex space-x-5">
            <div class="flex flex-col w-1/2">
              <label
                for="city"
                class="text-sm italic 2xl:pb-1 text-shark-400 2xl:text-base"
                >City</label
              >
              <input
                type="text"
                name="city"
                id="city"
                autocomplete="off"
                v-model="city"
                placeholder="Hamburg"
                class="p-1 border-b-2 border-dotted rounded-t bg-bridal-300 focus:border-none focus:outline-none focus:bg-bridal-600 border-shark-500"
              />
            </div>
            <div class="flex flex-col w-1/2">
              <label
                for="country"
                class="text-sm italic 2xl:pb-1 text-shark-400 2xl:text-base"
                >Country</label
              >
              <input
                type="text"
                name="country"
                id="country"
                autocomplete="off"
                v-model="country"
                placeholder="Germany"
                class="p-1 border-b-2 border-dotted rounded-t bg-bridal-300 focus:border-none focus:outline-none focus:bg-bridal-600 border-shark-500"
              />
            </div>
          </div>

          <!-- Lat and long -->
          <div class="flex space-x-5">
            <div class="flex flex-col w-1/5">
              <label
                for="lat"
                class="text-sm italic 2xl:pb-1 text-shark-400 2xl:text-base"
                >Lat</label
              >
              <input
                type="number"
                name="lat"
                id="lat"
                autocomplete="off"
                v-model="coordinates.lat"
                placeholder="53.541"
                min="-90"
                max="90"
                class="p-1 border-b-2 border-dotted rounded-t bg-bridal-300 focus:border-none focus:outline-none focus:bg-bridal-600 border-shark-500"
              />
            </div>
            <div class="flex flex-col w-1/5">
              <label
                for="long"
                class="text-sm italic 2xl:pb-1 text-shark-400 2xl:text-base"
                >Long</label
              >
              <input
                type="number"
                name="long"
                id="long"
                autocomplete="off"
                v-model="coordinates.lng"
                placeholder="9.982"
                min="-180"
                max="180"
                class="p-1 border-b-2 border-dotted rounded-t bg-bridal-300 focus:border-none focus:outline-none focus:bg-bridal-600 border-shark-500"
              />
            </div>
          </div>

          <!-- Description -->
          <div class="flex flex-col">
            <label
              for="description"
              class="text-sm italic 2xl:pb-1 text-shark-400 2xl:text-base"
              >Description</label
            >
            <input
              type="text"
              name="description"
              id="description"
              autocomplete="off"
              v-model="description"
              placeholder="The Elbphilharmonie is a concert hall ..."
              class="p-1 border-b-2 border-dotted rounded-t bg-bridal-300 focus:border-none focus:outline-none focus:bg-bridal-600 border-shark-500"
            />
          </div>

          <!-- 'Add post' Button -->
          <button
            @click="
              addSpot(spots, maxSpotId);
              $router.push('/');
              resetData();
            "
            class="flex items-center justify-center w-40 h-10 transform border rounded-md cursor-pointer border-shark-500 hover:bg-bridal-300 hover:text-shark-500 bg-shark-500 text-bridal-300"
          >
            Add post
          </button>
        </div>

        <!-- Footer component -->
        <Footer />
      </div>
    </div>
  </div>
</template>

<script>
import ButtonBack from "../components/ButtonBack";
import Footer from "../components/Footer";

export default {
  name: "NewPostPage",

  components: {
    ButtonBack,
    Footer,
  },

  data() {
    return {
      title: "",
      city: "",
      country: "",
      coordinates: {
        lat: null,
        lng: null,
      },
      description: "",
    };
  },

  methods: {
    addSpot(spots, maxSpotId) {
      // Set incremented spot id for new spot
      let newSpotId = maxSpotId + 1;

      // Get and set current time
      let d = new Date();
      let seconds = Math.round(d.getTime() / 1000);

      // Push new spot to spots array
      spots.push({
        author: "Peter Nichols",
        author_image_alt: "Peter Nichols",
        author_image_src: "/img/team/peter-nichols.jpg",
        date: {
          seconds: seconds,
        },
        id: newSpotId,
        image: {
          alt: "Placeholder image",
          src: "/img/placeholder.jpg",
        },
        location: {
          city: this.city,
          coordinates: {
            lat: parseFloat(this.coordinates.lat),
            lng: parseFloat(this.coordinates.lng),
          },
          country: this.country,
        },
        text: this.description,
        title: this.title,
      });

      // Re-order spots array
      spots.sort((a, b) => {
        return b.date.seconds - a.date.seconds;
      });

      // Update spots array and biggest spot id in store
      this.$store.commit("initSpotList", spots);
      this.$store.commit("setMaxSpotId", newSpotId);

      // Pre-select new spot
      console.log(`Updating setSelectedSpotId to ${newSpotId} ⛓`);
      this.$store.commit("setSelectedSpotId", newSpotId);
    },

    resetData() {
      this.title = "";
      this.city = "";
      this.country = "";
      this.coordinates.lat = null;
      this.coordinates.lng = null;
      this.description = "";
    },
  },

  computed: {
    spots() {
      return this.$store.getters.spotList;
    },

    maxSpotId() {
      return this.$store.getters.maxSpotId;
    },
  },
};
</script>

<style scoped>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield;
}
</style>