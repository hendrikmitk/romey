<template>
  <div class="flex h-screen pt-16">
    <div
      class="flex flex-col px-24 pt-10 pb-2 2xl:pt-16 2xl:px-32 bg-bridal-300"
    >
      <!-- ButtonHome component -->
      <ButtonHome />

      <div
        class="flex flex-col justify-between h-full py-10 2xl:py-16 font-merriweather text-shark-500"
      >
        <!-- Error text -->
        <div>
          <div class="mb-2 text-5xl">404 Error</div>

          <div class="flex items-center h-12 italic text-shark-400">
            Page not found
          </div>
        </div>

        <!-- Footer component -->
        <Footer />
      </div>
    </div>
  </div>
</template>

<script>
import ButtonHome from "../components/ButtonHome";
import Footer from "../components/Footer";

export default {
  name: "PageNotFound",

  components: {
    ButtonHome,
    Footer,
  },
};
</script>