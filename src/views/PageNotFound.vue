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

        <!-- Email -->
        <div class="flex items-center text-shark-300">
          <svg
            class="w-5 h-5 mr-2 2xl:w-8 2xl:h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          <div class="text-xs italic 2xl:text-sm text-shark-400">
            <a target="_blank" href="mailto:hi@hendrikharlichs.de"
              >hi@hendrikharlichs.de</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonHome from "../components/ButtonHome";

export default {
  name: "PageNotFound",

  components: {
    ButtonHome,
  },
};
</script>