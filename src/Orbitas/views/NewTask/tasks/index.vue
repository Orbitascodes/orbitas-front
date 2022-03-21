<template>
  <div class="main-tasks">

    <div class="title-area">
      <p><strong>Define task's objective</strong></p>

      <v-switch
        v-model="switchOption"
        flat
        label="info"
      ></v-switch>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      switchOption: false
    }
  },
}
</script>
