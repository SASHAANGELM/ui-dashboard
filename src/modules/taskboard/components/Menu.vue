<template>
  <div :class="sidebarClass" class="flex flex-col justify-between pt-16 pb-2 animation overflow-x-hidden" @mouseenter="hoverStart" @mouseleave="hoverEnd">
      <div>
        <MenuLink v-for="link in menuList" :key="`menu-link-${link.text}`" :link="link" :hover="hover" :longHover="longHover" @click="setActive(link)"></MenuLink>
      </div>
      <MenuLink :link="settingsLink" :hover="hover" :longHover="longHover" @click="setActive(settingsLink)"></MenuLink>
    </div>
</template>

<script>
import MenuLink from './MenuLink';

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
          text: 'Tasks',
          icon: 'fas fa-columns',
          to: '/taskboard/tasks',
          notifications: 0,
          active: true
        },
        {
          text: 'Orders',
          icon: 'fas fa-shopping-basket',
          to: '/taskboard/orders',
          notifications: 2,
          active: false
        },
        {
          text: 'Conversations',
          icon: 'fas fa-comments',
          to: '/taskboard/conversations',
          notifications: 5,
          active: false
        },
        {
          text: 'Warehouse',
          icon: 'fas fa-warehouse',
          to: '/taskboard/warehouse',
          notifications: 0,
          active: false
        },
        {
          text: 'Reports',
          icon: 'fas fa-file-invoice-dollar',
          to: '/taskboard/reports',
          notifications: 0,
          active: false
        }
      ],
      settingsLink: {
        text: 'Settings',
        icon: 'fas fa-cog',
        to: '/taskboard/settings',
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
