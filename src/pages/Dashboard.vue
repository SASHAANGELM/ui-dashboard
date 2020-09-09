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

        <div class="flex space-x-16 mb-10">
          <div class="w-3/6">
            <div class="mb-6 text-gray-600 text-lg font-medium">Today</div>
            <div class="wraper flex items-center">
              <div v-for="task in taskDescr" :key="task" class="w-40 h-56 rounded-lg mr-3 p-4 hover:shadow-xl" :class="task.color">
                <div class="font-bold text-4xl mb-3" :class="task.textColor">{{task.total}}</div>
                <div class="flex flex-col justify-between h-32">
                    <span :class="task.textColor">{{task.descr}}</span>
                    <div class="wraper">
                      <div :class="task.textColor"> <span class="text-gray-400">{{task.progresText}}</span> {{task.progres}}</div>
                      <div :class="task.progresLine"></div>
                    </div>
                </div>
              </div>
            </div>
          </div>
          <div class="w-5/6 ">
            <div class="mb-6 text-gray-600 text-lg font-medium">Automatically assigned</div>
            <div class="h-56 bg-gray-900 p-4 rounded-xl hover:shadow-2xl">
              <div class="font-bold text-4xl mb-3 text-gray-200">800</div>
              <div class="flex flex-col justify-between h-32">
                <span class="text-gray-200">Distribution</span>
                <div class="wraper">
                  <div class="text-white"><span class="text-gray-700">Finish </span>100%</div>
                  <div class="h-2 progresLine bg-teal-300 rounded-lg"></div>
                </div>
              </div>
            </div>
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
  },
  data() {
    return {
      taskDescr: [
        {
          total: 480,
          descr: 'Go on',
          progres: '100%',
          color: 'bg-indigo-400',
          textColor: 'text-gray-200',
          progresText: 'Finish',
          progresLine: 'h-2 w-full bg-teal-300 rounded-lg'
        },
        {
          total: 180,
          descr: 'Intention',
          progres: '60%',
          color: 'bg-white',
          textColor: 'text-gray-900',
          progresText: 'Finish',
          progresLine: 'h-2 w-full bg-teal-300 rounded-lg'
        },
        {
          total: 72,
          descr: 'Deal',
          progres: '48%',
          color: 'bg-white',
          textColor: 'text-gray-900',
          progresText: 'Finish',
          progresLine: 'h-2 w-full bg-teal-300 rounded-lg'
        },
        {
          total: 72,
          descr: 'No itention',
          color: 'bg-red-400',
          progres: '',
          textColor: 'text-gray-900'
        }
      ]
    };
  }
};

</script>

<style>

</style>
