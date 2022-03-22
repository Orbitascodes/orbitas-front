<template>
  <div class="main-card">
    <template v-if="first">
      <div class="first-card">
        <v-icon @click.native="openDialog = true" large color="white">
          mdi-plus
        </v-icon>
        <p>{{ name }}</p>
      </div>
    </template>
    <template v-else>
      <div>
        <div class="card">
          <v-icon large color="white">
            mdi-database
          </v-icon>
          <p>{{ name }}</p>
          <p class="tiny-text">{{ name }}</p>
        </div>
      </div>
    </template>

    <dialog-import @close="close" :dialog="openDialog" />
  </div>
</template>

<script>
import dialogImport from '../dialogImport';

export default {
  data() {
    return {
      openDialog: false,
    };
  },
  components: {
    dialogImport,
  },
  props: {
    first: { type: Boolean, default: false },
    name: { type: String, default: 'Import Data' },
  },
  methods: {
    close() {
      this.openDialog = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.main-card {
  width: 16%;
  height: 130px;
  cursor: pointer;
  margin: 5px;
  .card {
    padding: 5px;
    border: 1px solid #2e01a12f;
    height: 130px;
    i {
      background-color: #2e01a12f;
      border-radius: 50%;
      padding: 2px;
      margin-bottom: 30px;
    }
  }
  .first-card {
    padding: 5px;
    background-color: #712eee;
    height: 100%;
    display: flex;
    flex-direction: row;
    p {
      color: white;
      font-weight: 700;
      font-size: 16px;
      height: fit-content;
      align-self: end;
      width: 100%;
      text-align: end;
    }
    i {
      height: fit-content;
    }
  }
}
</style>
