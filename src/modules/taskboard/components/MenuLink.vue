<template>
  <router-link tag="button" :to="link.to" class="link" :class="{ active: link.active }" @click="linkClick">
    <div v-if="link.notifications > 0" class="absolute flex items-center justify-center top-0 h-5 w-5 -ml-1 -mt-1 bg-white rounded-full text-xs">{{ link.notifications }}</div>
    <i :class="getIconClass" class="flex-shrink-0 flex justify-center items-center h-12 animation"></i>
    <div v-if="longHover" class="text-xs font-bold">{{ link.text }}</div>
  </router-link>
</template>

<script>
export default {
  props: {
    link: {
      required: true
    },
    hover: {
      required: false,
      default: false,
      type: Boolean
    },
    longHover: {
      required: false,
      default: false,
      type: Boolean
    }
  },
  computed: {
    getIconClass() {
      const icon = this.link.icon;
      const w = this.hover ? 'w-12' : 'w-8';

      const classes = {};
      classes[icon] = true;
      classes[w] = true;
      return classes;
    }
  },
  methods: {
    linkClick(event) {
      this.$emit('click', event);
    }
  }
};
</script>

<style lang="scss" scoped>

.link {
  position: relative;
  display: flex;
  align-items: center;
  min-width: 3rem;
  width: 100%;
  height: 3rem;
  margin-bottom: 0.5rem;
  border-radius: 0.5rem;

  &:last-child {
    margin-bottom: 0;
  }

  &:hover {
    background-color: rgba(#000, 0.1);
  }
  &.active {
    background-color: rgba(#000, 0.15);
  }

  transition: 0.2s ease-out;
}

</style>
