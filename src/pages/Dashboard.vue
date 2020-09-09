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

        <!--  -->
        <div class="flex space-x-16 mb-10">
          <div class="w-5/12">
            <div class="mb-6 text-gray-600 text-lg font-medium">Today</div>
            <div class="wraper flex items-center">
              <TaskCard v-for="task in taskCards" :key="`task-card-${task.description}`" :task="task"></TaskCard>
            </div>
          </div>
          <div class="w-7/12">
            <div class="mb-6 text-gray-600 text-lg font-medium">Automatically assigned</div>
            <TaskCard :task="blackTaskCard"></TaskCard>
          </div>
        </div>
        <!--  -->

        <div class="flex space-x-16">
          <div class="w-2/6 ">
            <div class="mb-6 text-gray-600 text-lg font-medium">Mockup</div>
              <div v-for="item in taskMockup" :key="{item}" class="flex items-center justify-between h-24 p-3 mb-5 bg-white rounded-xl">
                  <div class="h-16 w-16 flex items-center justify-center bg-gray-900 rounded-xl bg-teal-200">
                    <div :class="item.iconColor">
                      <i :class="item.icon" class="text-3xl"></i>
                    </div>
                  </div>
                  <div class="flex flex-col">
                    <span>{{ item.taskName }}</span>
                    <span>{{ item.name }}</span>
                  </div>
                  <button class="self-stretch px-3 rounded-lg text-gray-500 hover:bg-gray-400 hoverAnim hover:text-gray-300">
                    <i class="fas fa-ellipsis-v"></i>
                  </button>
              </div>
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
import TaskCard, { CARD_TYPES } from '../components/Dashboard/TaskCard';

export default {
  components: {
    Sidebar,
    Header,
    TaskCard
  },
  data() {
    return {
      taskCards: [
        {
          type: CARD_TYPES.FOCUSED,
          total: 480,
          description: 'Go on',
          progress: 1
        },
        {
          type: CARD_TYPES.DEFAULT,
          total: 180,
          description: 'Intention',
          progress: 0.6
        },
        {
          type: CARD_TYPES.DEFAULT,
          total: 72,
          description: 'Deal',
          progress: 0.48
        },
        {
          type: CARD_TYPES.BLOCKED,
          total: 72,
          description: 'No itention',
          progress: null
        }
      ],
      blackTaskCard: {
        type: CARD_TYPES.BLACK,
        total: 800,
        description: 'Distribution',
        progress: 1
      },
      taskMockup: [
        {
          taskName: 'AIR PLANE',
          name: 'Daniel Gonzales',
          icon: 'fas fa-plane-departure',
          iconColor: 'text-blue-700'
        },
        {
          taskName: 'TELEPHONE',
          name: 'Barbara Brown',
          icon: 'fas fa-tty',
          iconColor: 'text-red-600'
        },
        {
          taskName: 'BUS',
          name: 'Edward Martines',
          icon: 'fas fa-bus-alt',
          iconColor: 'text-orange-600'
        }
      ]
    };
  }
};

</script>

<style>

</style>
