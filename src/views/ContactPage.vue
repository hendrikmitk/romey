<template>
  <div class="flex h-screen pt-16">
    <!-- Left area -->
    <div
      class="flex flex-col w-4/6 px-24 pt-10 pb-2 2xl:pt-16 2xl:px-32 bg-bridal-300"
    >
      <!-- ButtonBack component -->
      <ButtonBack />

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

        <!-- Footer component -->
        <Footer />
      </div>
    </div>

    <!-- Right area -->
    <div class="w-2/6 p-4 bg-bridal-300">
      <div class="flex justify-center h-full rounded-sm bg-shark-500">
        <div class="w-3/5 mt-16">
          <img
            class="rounded-full"
            src="../assets/hendrik.jpg"
            alt="Image of Hendrik"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonBack from "../components/ButtonBack";
import Footer from "../components/Footer";

export default {
  name: "ContactPage",

  components: {
    ButtonBack,
    Footer,
  },
};
</script>