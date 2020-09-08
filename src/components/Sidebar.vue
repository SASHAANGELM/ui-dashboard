<template>
  <div class="bg-gray-900 text-gray-100 w-80 rounded-3xl p-8">
    <div class="flex justify-between items-center h-16 p-2 bg-indigo-500 rounded-xl">
      <div class="ml-6 text-xl font-bold">
        TBK
      </div>
      <button class="self-stretch px-3 bg-indigo-600 rounded-lg text-gray-500">
        <i class="fas fa-ellipsis-v"></i>
      </button>
    </div>

    <div class="">
      <button v-for="link in linkItems" :key="`sidebar-link-${link}`" class="block w-full my-1 bg-gray-800">
        <i :class="link.icon"></i>
        <span>{{ link.text}}</span>
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
          icon: '',
          text: 'Management'
        },
        {
          icon: '',
          text: 'Unlock'
        },
        {
          icon: '',
          text: 'Map'
        },
        {
          icon: '',
          text: 'Search'
        },
        {
          icon: '',
          text: 'More'
        }
      ]
    };
  }
};
</script>

<style>

</style>
