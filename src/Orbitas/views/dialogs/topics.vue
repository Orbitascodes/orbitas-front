<template>
  <v-dialog v-model="show" width="500">
    <v-card>
      <div class="header">
        <v1.base-input
          dense
          solo
          outlined
          flat
          type="text"
          hide-details="auto"
          append-icon="mdi-magnify"
          no-margin
          v-model="searchTopics"
        />
      </div>
      <ul>
        <li v-for="(item, key) in filteredTopics" @click="goToTopic(item)" :key="key">
          {{ item }}
        </li>
      </ul>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  computed: {
    show: {
      get() {
        return this.$store.getters.openTopicModal;
      },
      set(v) {
        if (!v) {
          this.$store.commit('openTopicModal', false);
        }
      },
    },
  },
  watch: {
    searchTopics: {
      immediate: true,
      handler(value) {
        if (value?.length > 3) {
          this.filteredTopics = this.availableTopics.filter(
            (curr) => curr.toLowerCase().indexOf(value.toLowerCase()) >= 0,
          );
        } else {
          this.filteredTopics = this.availableTopics;
        }
      },
    },
  },
  mounted() {
    this.filteredTopics = this.availableTopics;
  },
  data() {
    return {
      availableTopics: ['financeiro', 'medico', 'vendas'],
      filteredTopics: [],
      searchTopics: null,
    };
  },
  methods: {
    goToTopic(topicName) {
      this.$store.commit('topicSelected', topicName);
      this.show = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.v-card {
  padding: 20px;
}
ul {
  list-style: none;
  li {
    color: grey;
    font-weight: 700;
    cursor: pointer;
  }
}
::v-deep {
  .v-input {
    width: 200px;
  }
}

.header {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-bottom: 30px;
}
</style>
