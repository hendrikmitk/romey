<template>
  <div
    class="fixed flex flex-row justify-between w-screen h-16 px-12 bg-shark-500 text-bridal-600"
    id="nav"
  >
    <div class="w-min">
      <router-link to="/" class="flex flex-row items-center h-full">
        <img src="../assets/romey.svg" class="mr-4 h-3/5" />
        <h1 class="pb-2.5 text-3xl font-pacifico">romey</h1>
      </router-link>
    </div>

    <div class="flex items-center space-x-10">
      <router-link
        to="/contact"
        class="flex items-center justify-center w-40 border rounded-md h-3/5 border-bridal-300 bg-shark-500 hover:bg-bridal-300 text-bridal-300 hover:text-shark-500"
      >
        <h1 class="font-medium font-montserrat">Contact</h1>
      </router-link>

      <div
        class="flex items-center justify-center w-40 transform border rounded-md border-bridal-300 h-3/5 hover:bg-shark-500 hover:text-bridal-300 bg-bridal-300 text-shark-500"
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
            d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>

        <h1 class="font-medium font-montserrat">New Post</h1>
      </div>

      <div
        class="flex items-center justify-center w-40 transform border rounded-md border-bridal-300 h-3/5 hover:bg-shark-500 hover:text-bridal-300 bg-bridal-300 text-shark-500"
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
            d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
          />
        </svg>

        <h1 class="font-medium font-montserrat">Login</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MenuBar",
};
</script>