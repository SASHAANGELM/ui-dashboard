<template>
  <div class="min-h-screen bg-gray-200">
    <div class="flex min-h-screen">
      <Sidebar></Sidebar>
      <div class="flex-1 pl-10 pr-16 pb-10">
        <Header></Header>

        <div class="text-3xl font-bold">
          Hello! Leon
        </div>
        <div class="mb-8 text-sm text-gray-700">Never put off till tomorrow what can be done today!</div>

        <div class="flex space-x-16">
          <div class="w-4/6">
            <div class="mb-6 text-gray-600 text-lg font-medium">Today</div>

          </div>
          <div class="w-2/6 ">
            <div class="mb-6 text-gray-600 text-lg font-medium">Automatically assigned</div>
            <div class="h-40 bg-gray-900 rounded-xl"></div>
          </div>
        </div>

        <div class="flex space-x-16">
          <div class="w-2/6 ">
            <div class="mb-6 text-gray-600 text-lg font-medium">Mocup</div>
            <div class="h-40 bg-gray-900 rounded-xl"></div>
          </div>
          <div class="w-4/6">
            <div class="mb-6 text-gray-600 text-lg font-medium">Company</div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

export default {
  components: {
    Sidebar,
    Header
  }
};

</script>

<style>

</style>
