<template>
  <v-toolbar color="application-bg" elevation="0">
    <svg-arrow-back fill="#712EEE" class="back" />

    <v-toolbar-title>
      <img src="@/assets/images/AILAB.png">
    </v-toolbar-title>

    <v-spacer></v-spacer>

    <v1.base-input
        dense
        solo
        outlined
        flat
        type="text"
        hide-details="auto"
        append-icon="mdi-magnify"
        no-margin
      />

    <v-btn icon>
      <v-icon>mdi-apps</v-icon>
    </v-btn>
  </v-toolbar>
</template>

<style lang="scss" scoped>
::v-deep {
  .v-toolbar__content {
    padding: 10px 8px;
  }
}
.back {
  transform: translateY(-4px);
}
</style>
