<template>
  <v-card flat>
    <v-layout>
      <v-flex xs2>
        <div class="side-features">
          <p class="centralizer">Features</p>
          <v-checkbox v-model="checkbox" label="Feature 1"></v-checkbox>
        </div>
      </v-flex>
      <v-flex xs10></v-flex>
    </v-layout>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      checkbox: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.side-features {
  min-height: 63vh;
}
</style>
