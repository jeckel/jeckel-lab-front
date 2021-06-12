<template>
    <li :class="{ active: linkActive }">
      <router-link :to="target"><i :class="icon" v-if="icon !== ''"></i>{{ label }}</router-link>
    </li>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    target: String,
    label: String,
    icon: String,
  },
})
export default class NavMenuItem extends Vue {
  target!: string

  label!: string

  icon!: string

  get linkActive(): boolean {
    return this.$route.path === this.target;
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/variables';

li {
  float: left;
  text-align: center;

  a {
    display: block;
    font-family: $font-menu;
    font-size: 1.1em;
    padding: 4px 16px;
    text-transform: uppercase;
    text-align: center;
    text-decoration: none;
    transition: all 1s;

    &::before {
      content: "[";
      color: transparent;
      transition: all 1s;
    }

    &::after {
      content: "]";
      color: transparent;
      transition: all 1s;
    }
  }

  &.active a {
    color: $link-active-color;

    &::before {
      content: "[";
      color: $link-active-color;
    }

    &::after {
      content: "]";
      color: $link-active-color;
    }
  }
}
</style>
