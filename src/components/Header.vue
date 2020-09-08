<template>
  <div class="flex justify-end items-center h-16 mt-4">

    <div class="relative mr-40">
      <input type="text" class="w-64 h-10 pl-10 border border-transparent hover:border-gray-500 focus:border-indigo-500 focus:outline-none rounded-full text-sm" placeholder="Search">
      <div class="absolute left-0 top-0 mt-2 ml-4">
        <i class="fas fa-search"></i>
      </div>
    </div>

    <button class="w-10 h-10 mr-8 hover:bg-white rounded-full text-gray-500 hover:text-black">
      <i class="fas fa-cog"></i>
    </button>
    <button class="w-10 h-10 rounded-full overflow-hidden">
      <img src="https://picsum.photos/40/40" alt="">
    </button>
  </div>
</template>

<script>
export default {
  name: 'Header'
};
</script>

<style>

</style>
