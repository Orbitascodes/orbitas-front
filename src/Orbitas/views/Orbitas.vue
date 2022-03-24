<template>
  <v-container>
    <v1.base-card rounded="0" hover first-card @addNew="add" />
    <v1.base-card
      rounded="0"
      v-for="(item, index) in filteredCards"
      :key="index"
      :dataCard="item"
      hover
    />
  </v-container>
</template>

<script>
export default {
  methods: {
    add() {
      this.$router.push({ name: 'NewTask' });
    },
  },
  computed: {
    searchTasks() {
      return this.$store.getters.searchTasks;
    },
  },
  watch: {
    searchTasks: {
      immediate: true,
      handler(value) {
        console.log(value, 'valor');
        if (value?.length > 3) {
          this.filteredCards = this.dataCards.filter(
            (curr) => curr.name.toLowerCase().indexOf(value.toLowerCase()) >= 0,
          );
        } else {
          this.filteredCards = this.dataCards;
        }
      },
    },
  },
  mounted() {
    this.filteredCards = this.dataCards;
  },
  data() {
    return {
      dataCards: [
        {
          name: 'Lorem Ipsum',
          step: 'Explore',
          objective: 'Clustering',
          data: 'Lorem Ipsum',
          model: 'Lorem Ipsum',
          description: `Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex
          ea commodo consequat. Duis aute irure dolor in reprehenderit
          in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa
          qui officia deserunt mollit anim id est laborum.`,
        },
        {
          name: 'My Lorem Ipsum',
          step: 'Explore',
          objective: 'Clustering',
          data: 'Lorem Ipsum',
          model: 'Lorem Ipsum',
          description: `Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex
          ea commodo consequat. Duis aute irure dolor in reprehenderit
          in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa
          qui officia deserunt mollit anim id est laborum.`,
        },
      ],
      filteredCards: [],
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
}
</style>
