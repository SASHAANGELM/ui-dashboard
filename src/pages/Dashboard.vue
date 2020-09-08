<template>
  <div class="min-h-screen bg-gray-200">
    <div class="flex min-h-screen">
      <Sidebar></Sidebar>
      <div class="flex-1 pl-10 pr-16 pb-10">
        <Header></Header>

        <div class="text-3xl font-bold">
          Hello! Leon
        </div>
        <div class="text-sm text-gray-700">Never put off till tomorrow what can be done today!</div>
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
