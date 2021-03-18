<template>
  <div class="flex h-screen pt-16">
    <div
      class="flex flex-col px-24 pt-10 pb-2 2xl:pt-16 2xl:px-32 bg-bridal-300"
    >
      <!-- ButtonBack component -->
      <ButtonBack />

      <div
        class="flex flex-col justify-between h-full py-10 2xl:py-16 font-merriweather text-shark-500"
      >
        <div>
          <div class="mb-2 text-5xl">New Post</div>

          <div class="flex items-center h-12 italic text-shark-400">
            Add your favorite place
          </div>
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
};
</script>