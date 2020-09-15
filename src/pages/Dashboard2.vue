<template>
  <div class="flex min-h-screen bg-pink-200">
    <div :class="sidebarClass" class="flex flex-col justify-between pt-16 pb-2 animation overflow-x-hidden" @mouseenter="hoverStart" @mouseleave="hoverEnd">
      <div>
        <MenuLink v-for="link in menuList" :key="`menu-link-${link.text}`" :link="link" :hover="hover" :longHover="longHover" @click="setActive(link)"></MenuLink>
      </div>
      <MenuLink :link="settingsLink" :hover="hover" :longHover="longHover" @click="setActive(settingsLink)"></MenuLink>
    </div>
    <div class="flex-1 flex bg-white rounded-l-2xl">
      <div class="w-80 p-4 bg-gray-200 rounded-2xl">
        Left Menu
      </div>

      <div class="p-4">
        <div class="px-4 text-xl">Sales Dashboard</div>

        <div>hover: {{ hover }}</div>
        <div>longHover: {{ longHover }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import MenuLink from '../components/Dashboard2/MenuLink';

// function trottle(f, ms) {
//   setTimeout(() => {
//     f.call();
//   }, ms);
// }

export default {
  components: {
    MenuLink
  },
  data() {
    return {
      hover: false,
      longHover: false,

      menuList: [
        {
          text: 'Orders',
          icon: 'fas fa-shopping-basket',
          notifications: 2,
          active: true
        },
        {
          text: 'Conversations',
          icon: 'fas fa-comments',
          notifications: 5,
          active: false
        },
        {
          text: 'Warehouse',
          icon: 'fas fa-warehouse',
          notifications: 0,
          active: false
        },
        {
          text: 'Reports',
          icon: 'fas fa-file-invoice-dollar',
          notifications: 0,
          active: false
        }
      ],
      settingsLink: {
        text: 'Settings',
        icon: 'fas fa-cog',
        notifications: 0,
        active: false
      }
    };
  },
  computed: {
    sidebarClass() {
      const width = this.longHover ? 'w-64' : this.hover ? 'w-16' : 'w-8';
      const px = !this.longHover && !this.hover ? 'px-1' : 'px-2';
      // const width = 'w-64';

      const classes = {};
      classes[width] = true;
      classes[px] = true;
      return classes;
    }
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
        console.log('resolve');
      } catch {}
    },
    hoverEnd() {
      this.longHover = false;
      this.hover = false;
    },
    test() {
      console.log('test');
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
