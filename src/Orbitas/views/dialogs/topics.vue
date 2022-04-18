<template>
  <v-dialog v-model="show" width="500">
    <v-card>
      <v-text-field v-model="searchTopics" label="Filtrar tópicos"></v-text-field>
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
    color: #712eee;
    font-weight: 700;
    text-decoration: underline;
    cursor: pointer;
  }
}
</style>
