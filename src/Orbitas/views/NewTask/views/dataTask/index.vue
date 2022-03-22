<template>
  <div class="main-data-container">
    <card v-for="(item, index) in cards"
      :key="index"
      :first="item.first"
      :name="item.name"
    />
  </div>
</template>

<script>
import card from './card'
export default {
  components: {
    card
  },
  data() {
    return {
      cards: [
        { first: true, name: 'Import Data' },
        { first: false, name: 'Lorem Ipsum 1' },
      ]
    }
  },
}
</script>

<style lang="scss" scoped>
.main-data-container {
	margin: 0 auto;
	display: flex;
  flex-wrap: wrap;
}
</style>
