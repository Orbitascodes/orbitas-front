<template>
  <div :ref="refName" @click="activeCard" :class="{
    'main-card': true,
    active
  }">
    <p><strong>{{ name }}</strong></p>
  </div>
</template>

<script>
export default {
  props: {
    name: { type: String, default: null },
    active: { type: Boolean, defaul: false },
    index: { type: Number, defaul: null },
  },
  computed: {
    refName() {
      return this.name.split(' ').join('_')
    }
  },
  methods: {
    activeCard() {
      this.$emit('activate', this.index)
    }
  },
}
</script>

<style lang="scss" scoped>
.main-card {
  height: 205px;
  width: auto;
  text-align: center;
  margin: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: 1px solid #555555;
  p strong {
    color: #555555 !important;
  }
  &.active {
    border: 1px solid #712EEE;
    p strong {
      color: #712EEE !important;
    }
  }
}
</style>
