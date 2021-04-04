<template>
  <div class="flex h-screen pt-16">
    <div
      class="flex flex-col w-full px-24 pt-10 pb-2 bg-bridal-300 2xl:pt-16 2xl:px-32"
    >
      <!-- ButtonBack component -->
      <ButtonBack @click="resetData()" />

      <div
        class="flex flex-col justify-between w-3/6 h-full py-10 2xl:py-16 font-merriweather text-shark-500"
      >
        <div>
          <div class="text-5xl">New Post</div>
        </div>

        <form class="flex flex-col px-0.5 py-2 space-y-4 2xl:space-y-6">
          <!-- Title and author -->
          <div class="flex space-x-5">
            <div class="flex flex-col w-1/2">
              <label for="title">Title</label>
              <input
                type="text"
                name="title"
                id="title"
                autocomplete="off"
                v-model="title"
                placeholder="Elbphilharmonie"
              />
            </div>
            <div class="flex flex-col w-1/2">
              <label for="author">Author</label>
              <select name="author" id="author" v-model="selectedAuthor">
                <option disabled class="text-shark-400" value="">
                  -- Please select author --
                </option>
                <option
                  v-for="item in authorList"
                  :key="item.author"
                  :value="item"
                >
                  {{ item.author }}
                </option>
              </select>
            </div>
          </div>

          <!-- City and country -->
          <div class="flex space-x-5">
            <div class="flex flex-col w-1/2">
              <label for="city">City</label>
              <input
                type="text"
                name="city"
                id="city"
                autocomplete="off"
                v-model="city"
                placeholder="Hamburg"
              />
            </div>
            <div class="flex flex-col w-1/2">
              <label for="country">Country</label>
              <input
                type="text"
                name="country"
                id="country"
                autocomplete="off"
                v-model="country"
                placeholder="Germany"
              />
            </div>
          </div>

          <!-- Lat and long -->
          <div class="flex space-x-5">
            <div class="flex flex-col w-1/5">
              <label for="lat">Lat</label>
              <input
                type="number"
                name="lat"
                id="lat"
                autocomplete="off"
                v-model="coordinates.lat"
                placeholder="53.541"
                min="-90"
                max="90"
                class=""
              />
            </div>
            <div class="flex flex-col w-1/5">
              <label for="long">Long</label>
              <input
                type="number"
                name="long"
                id="long"
                autocomplete="off"
                v-model="coordinates.lng"
                placeholder="9.982"
                min="-180"
                max="180"
                class=""
              />
            </div>
          </div>

          <!-- Description -->
          <div class="flex flex-col" @click="logAuthor()">
            <label for="description">Description</label>
            <input
              type="text"
              name="description"
              id="description"
              autocomplete="off"
              v-model="description"
              placeholder="The Elbphilharmonie is a concert hall ..."
            />
          </div>

          <!-- ButtonAddPost component -->
          <ButtonAddPost
            @click="
              addSpot(spots, maxSpotId, selectedAuthor);
              $router.push('/');
              resetData();
            "
          />
        </form>

        <!-- Footer component -->
        <Footer />
      </div>
    </div>
  </div>
</template>

<script>
import ButtonBack from "../components/ButtonBack";
import ButtonAddPost from "../components/ButtonAddPost";
import Footer from "../components/Footer";

export default {
  name: "NewPostPage",

  components: {
    ButtonBack,
    ButtonAddPost,
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
    addSpot(spots, maxSpotId, selectedAuthor) {
      // Set incremented spot id for new spot
      let newSpotId = maxSpotId + 1;

      // Get and set current time
      let d = new Date();
      let seconds = Math.round(d.getTime() / 1000);

      // Push new spot to spots array
      spots.push({
        author: selectedAuthor.author,
        author_image_alt: selectedAuthor.author_image_alt,
        author_image_src: selectedAuthor.author_image_src,
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

    authorList() {
      return this.$store.getters.authorList;
    },

    selectedAuthor: {
      get: function () {
        return this.$store.getters.selectedAuthor;
      },
      set: function (newAuthor) {
        console.log(`Author changed to ${newAuthor.author} ✍️`);
        this.$store.commit("setSelectedAuthor", newAuthor);
      },
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