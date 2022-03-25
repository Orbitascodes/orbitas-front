<template>
  <v-container>
    <p class="centralizer huge-text">
      <strong>Running...</strong>
    </p>
    <br>
    <p class="centralizer">
      <v-progress-circular
        :size="70"
        :width="7"
        color="secondary"
        indeterminate
      ></v-progress-circular>
    </p>
    <br>
    <p class="centralizer tiny-text">
      3 process completed
    </p>

    <div class="leaderboard">
      <p class="tiny-text">Leaderboard</p>
    </div>
  </v-container>
</template>

<style lang="scss" scoped>
.leaderboard {
  margin-top: 60px;
  border: 1px solid rgba(128, 128, 128, 0.356);
  height: 50vh;
  padding: 10px;
}
</style>
