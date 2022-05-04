<template>
  <v-container fluid>
    <component :is="actualFeature"></component>
  </v-container>
</template>

<script>
import AiLab from './features/AiLab.vue';
import Board from './features/Board.vue';

export default {
  components: {
    AiLab,
    Board,
  },
  data() {
    return {
      faeture: null,
    };
  },
  computed: {
    actualFeature() {
      return this.$store.getters.changeFeature;
    },
  },
  mounted() {
    if (localStorage.getItem('actualFeature')) {
      this.$store.commit('changeFeature', localStorage.getItem('actualFeature'));
    }
  },
  watch: {
    actualFeature(v) {
      localStorage.setItem('actualFeature', v);
    },
  },
};
</script>
