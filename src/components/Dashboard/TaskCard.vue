<template>
  <div class="w-40 h-56 rounded-lg mr-3 p-4 hover:shadow-xl" :class="getCardClass">
    <div class="font-bold text-4xl mb-3" :class="getTextColor">{{ task.total }}</div>
    <div class="flex flex-col justify-between h-32">
      <span :class="getTextColor">{{ task.description }}</span>
      <div v-if="task.type !== 'BLOCKED'" class="w-32">
        <div :class="getTextColor"> <span class="text-gray-400">Finish</span> {{ getProgressPercent }}</div>
        <!-- <div class="h-2 w-full bg-teal-300 rounded-lg"></div> -->
        <div class="h-2 w-full bg-gray-200 rounded-lg">
          <div :style="getProgressStyle" class="h-full bg-teal-300 rounded-lg"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export const CARD_TYPES = {
  FOCUSED: 'FOCUSED',
  BLOCKED: 'BLOCKED',
  DEFAULT: 'DEFAULT',
  BLACK: 'BLACK'
};

export default {
  props: {
    task: {
      require: true
    }
  },

  computed: {
    getCardClass() {
      const width = this.task.type === CARD_TYPES.BLACK ? 'w-full' : 'w-40';

      let color = 'bg-white';
      if (this.task.type === CARD_TYPES.FOCUSED) color = 'bg-indigo-400';
      else if (this.task.type === CARD_TYPES.BLOCKED) color = 'bg-red-400';
      else if (this.task.type === CARD_TYPES.BLACK) color = 'bg-gray-900';

      return `${width} ${color}`;
    },
    getTextColor() {
      if (this.task.type === CARD_TYPES.FOCUSED || this.task.type === CARD_TYPES.BLACK) return 'text-gray-200';
      return 'text-gray-900';
    },
    getProgressPercent() {
      return `${this.task.progress * 100}%`;
    },
    getProgressStyle() {
      return {
        width: this.getProgressPercent
      };
    }
  }
};
</script>

<style>

</style>
