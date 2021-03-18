<template>
  <div>
    <div
      @click="$router.go(-1)"
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
          d="M12 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M3 12l6.414 6.414a2 2 0 001.414.586H19a2 2 0 002-2V7a2 2 0 00-2-2h-8.172a2 2 0 00-1.414.586L3 12z"
        ></path>
      </svg>

      <h1 class="font-medium font-montserrat">Go back</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "ButtonBack",
};
</script>