<template>
  <div id="navbar">
    <div class="useful-width">
      <h1 class="logo">
        <router-link to="/">Jeckel-Lab</router-link>
        <span class="subtitle">Lead-Dev / Architecte Freelance</span>
      </h1>
      <ul class="topnav">
        <HeaderNavMenuItem
          v-for="menuItem in menuItems"
          :key="menuItem.id"
          :label="menuItem.label"
          :target="menuItem.target"
          :icon="menuItem.icon"
        />
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HeaderNavMenuItem from '@/components/Header.NavMenuItem.vue';

@Options({ components: { HeaderNavMenuItem } })
export default class Header extends Vue {
  private menuItems = [
    {
      id: 1, target: '/', label: 'Home',
    },
    {
      id: 2, target: '/blog', label: 'Blog',
    },
    {
      id: 3, target: '/contact', label: 'Contact',
    },
    {
      id: 4, target: '/login', label: '', icon: 'fas fa-user',
    },
  ]
}
</script>

<style lang="scss" scoped>
@import '../assets/variables';

#navbar {
  overflow: hidden;
  position: -webkit-sticky; /* Safari */
  position: fixed;
  top: 0;
  width: 100%;
  border-bottom: 1px solid darken($font-color-title, 60);
  background: linear-gradient(
          rgba(0, 0, 0, 0.7),
          rgba(0, 0, 0, 0.5)
  ), center url("../assets/images/1639585.jpg") fixed;

  h1.logo {
    font-family: $font-family-title;
    font-size: 3em;
    font-weight: normal;
    margin: 10px 0;
    float: left;

    a {
      color: $font-color-title;
      display: block;
    }

    .subtitle {
      display: block;
      //float: left;
      font-family: $font-menu;
      font-size: 12pt;
      margin-bottom: 0;
      padding-bottom: 4px;
    }
  }

  a {
    text-align: center;
    text-decoration: none;
  }

  ul {
    list-style-type: none;
    margin: 58px 0 0 0;
    padding: 0;
    overflow: hidden;
    float: right;
  }
}
</style>
