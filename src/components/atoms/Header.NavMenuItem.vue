<template>
    <li :class="{ active: isActive }" class="menuItem">
      <router-link :to="item.target">
        <i :class="item.icon" v-if="item.icon !== ''"></i>{{ item.label }}
      </router-link>
    </li>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue';
import { MenuItem } from '@/models';
import { useRoute } from 'vue-router';

export default defineComponent({
  props: {
    item: { type: Object as PropType<MenuItem> },
  },

  setup(props) {
    const isActive = computed(() => props.item?.name === useRoute().meta.menuItem);
    return { isActive };
  },
});
</script>

<style lang="scss">
@import '../../assets/variables';

li.menuItem {
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
