<template>
  <div class="flex min-h-screen bg-pink-200">
    <Menu />
    <router-view class="flex-1 flex bg-white rounded-l-2xl"></router-view>
  </div>
</template>

<script>
import Menu from '../components/Menu';

export default {
  components: {
    Menu
  },
  data() {
    return {};
  },

  methods: {
    async hoverStart() {
      this.hover = true;

      try {
        await new Promise((resolve, reject) => {
          setTimeout(() => {
            if (this.hover) {
              resolve(true);
            } else {
              reject(new Error('this.hover is false'));
            }
          }, 2000);
        });
        this.longHover = true;
      } catch {}
    },
    hoverEnd() {
      this.longHover = false;
      this.hover = false;
    },

    setActive(link) {
      this.menuList.forEach(link => { link.active = false; });
      this.settingsLink.active = false;
      link.active = true;
    }
  }
};
</script>

<style>

</style>
