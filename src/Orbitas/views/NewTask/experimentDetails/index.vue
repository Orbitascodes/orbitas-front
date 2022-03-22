<template>
  <v-dialog v-model="dialog" width="500">
    <v-card>
      <v-card-title class="text-h5 grey lighten-2">
        Edit Experiment Information
      </v-card-title>

      <v-divider></v-divider>

      <div class="card-body">
        <p><strong>Experiment Name</strong></p>
        <v1.base-input type="text" flat outlined v-model="exp.name" />
        <p><strong>Experiment Description</strong></p>
        <v1.base-input flat outlined v-model="exp.description" />
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
  data() {
    return {
      exp: {
        name: null,
        description: null,
      },
    };
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
</style>
