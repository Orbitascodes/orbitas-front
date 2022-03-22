<template>
  <v-select :items="items" v-bind="$attrs" v-on="$listeners"></v-select>
</template>

<script>
export default {
  props: {
    items: { type: Array, default: () => [] },
  },
};
</script>
