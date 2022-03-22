<template>
  <v-dialog v-model="dialog" width="800">
    <v-card>
      <v-card-title class="text-h5 lighten-2">
        Import Data
      </v-card-title>

      <div class="card-body">
        <v-file-input
          label="Drag and drop or browse your files"
          :prepend-icon="null"
          outlined
          clear-icon
        ></v-file-input>
        <p><strong>Name</strong></p>
        <v1.base-input flat outlined />
      </div>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="secondary" flat elevation="0" x-large @click="_dialog = false">
          Ok
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    dialog: { type: Boolean, default: false },
  },
  computed: {
    _dialog: {
      get() {
        return this.dialog;
      },
      set() {
        this.$emit('close');
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.card-body {
  padding: 10px 30px;
}
::v-deep {
  .v-file-input {
    .v-input__slot {
      height: 500px;
    }
  }
}
</style>
