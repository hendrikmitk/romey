<template>
  <div>
    <div
      @click="$router.push('/')"
      class="flex items-center justify-center w-40 h-10 transform border rounded-md cursor-pointer border-shark-500 hover:bg-bridal-300 hover:text-shark-500 bg-shark-500 text-bridal-300"
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
</template>

<script>
export default {
  name: "ButtonHome",
};
</script>