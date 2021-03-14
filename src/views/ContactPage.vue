<template>
  <div class="flex h-screen pt-16">
    <!-- Left area -->
    <div
      class="flex flex-col w-4/6 px-24 pt-10 pb-2 2xl:pt-16 2xl:px-32 bg-bridal-300"
    >
      <div>
        <div
          @click="$router.go(-1)"
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
              d="M12 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M3 12l6.414 6.414a2 2 0 001.414.586H19a2 2 0 002-2V7a2 2 0 00-2-2h-8.172a2 2 0 00-1.414.586L3 12z"
            ></path>
          </svg>

          <h1 class="font-medium font-montserrat">Go back</h1>
        </div>
      </div>
      <div
        class="flex flex-col justify-between h-full py-10 2xl:py-16 font-merriweather text-shark-500"
      >
        <div>
          <div class="mb-2 text-5xl">Contact</div>
          <div class="flex items-center h-12 italic text-shark-400">
            Hendrik Harlichs
          </div>
        </div>

        <div>
          <div class="py-2 2xl:py-6 2xl:text-lg">
            <p>
              This project is part of the curriculum of the Full-Stack<br />Web
              Development program at
              <a target="_blank" href="https://hamburgcodingschool.com/"
                >Hamburg Coding School</a
              >.
            </p>
          </div>
          <div class="py-2 text-sm 2xl:py-6 2xl:text-base">
            <p class="pb-2 italic font-bold 2xl:text-lg">Feature list</p>
            <ul class="space-y-1 2xl:space-y-2">
              <li>🧱 Built with <b>Vue 3</b> and <b>Tailwind CSS</b></li>
              <li>🎛 Uses <b>Vuex</b> for State Management</li>
              <li>🚏 Syncing views with <b>Vue Router</b></li>
              <li>
                🗺 Reactive
                <a target="_blank" href="https://vue-map.netlify.app/"
                  >Vue 3 Google maps</a
                >
                components
              </li>
              <li>
                ⚙️ Powered by its dedicated
                <a
                  target="_blank"
                  href="https://github.com/hendrikmitk/romey-api"
                  ><b>Node.js</b> backend</a
                >
              </li>
            </ul>
          </div>
          <div class="py-2 text-xs 2xl:py-6 text-shark-300">
            <p>Hamburg Coding School</p>
            <p>Borselstraße 7</p>
            <p>22765 Hamburg</p>
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

    <!-- Right area -->
    <div class="w-2/6 p-4">
      <div
        class="flex items-center justify-center h-full bg-shark-500 text-bridal-300"
      >
        Image
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactPage",
};
</script>