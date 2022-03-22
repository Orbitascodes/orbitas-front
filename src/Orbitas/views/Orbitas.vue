<template>
  <v-container>
    <v1.base-card rounded="0" hover first-card @addNew="add" />
    <v1.base-card rounded="0" hover @addNew="add" />
    <v1.base-card rounded="0" hover @addNew="add" />
  </v-container>
</template>

<script>
export default {
  methods: {
    add() {
      this.$router.push({ name: 'NewTask' });
    },
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
