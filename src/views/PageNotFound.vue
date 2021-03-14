<template>
  <div class="flex h-screen pt-16">
    <div
      class="flex flex-col px-24 pt-10 pb-2 2xl:pt-16 2xl:px-32 bg-bridal-300"
    >
      <div>
        <div
          @click="$router.push('/')"
          class="flex items-center justify-center w-40 h-10 transform border rounded-md border-shark-500 hover:bg-bridal-300 hover:text-shark-500 bg-shark-500 text-bridal-300"
        >
          <svg
            class="absolute left-2 hover:fill-current h-4/6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>

          <h1 class="font-medium font-montserrat">Home</h1>
        </div>
      </div>
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
export default {
  name: "PageNotFound",
};
</script>