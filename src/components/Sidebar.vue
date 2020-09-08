<template>
  <div class="bg-gray-900 text-gray-100 w-80 rounded-3xl p-8">
    <div class="flex justify-between items-center h-16 p-2 bg-indigo-500 rounded-xl">
      <div class="ml-6 text-xl font-bold">
        TBK
      </div>
      <button class="self-stretch px-3 rounded-lg text-gray-500 hover:bg-indigo-600 hoverAnim hover:text-gray-300">
        <i class="fas fa-ellipsis-v"></i>
      </button>
    </div>

    <div class="">
      <button v-for="link in linkItems" :key="`sidebar-link-${link}`" class="block w-full my-3 pl-16 py-3 rounded-lg text-left hover:bg-gray-800 hoverAnim">
        <i :class="link.icon" class="mr-2"></i>
        <span>{{link.text}}</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  data() {
    return {
      linkItems: [
        {
          icon: 'fas fa-home',
          text: 'Workbench'
        },
        {
          icon: 'fas fa-filter',
          text: 'filters'
        },
        {
          icon: 'fas fa-user-edit',
          text: 'Management'
        },
        {
          icon: 'fas fa-unlock-alt',
          text: 'Unlock'
        },
        {
          icon: 'fas fa-map-marker-alt',
          text: 'Map'
        },
        {
          icon: 'fas fa-search',
          text: 'Search'
        }
      ]
    };
  }
};
</script>

<style>

</style>
