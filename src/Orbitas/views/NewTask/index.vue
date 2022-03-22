<template>
  <v-container>
    <navigation @continue="continueCreation" @open="open" @back="goBack" />
    <experiment-details :dialog="openModal" @close="close" />
    <component :is='allSteps[actualCreationStep]' />
  </v-container>
</template>

<script>
const ALL_TASK_STEPS = ['tasks', 'dataTask', 'runConfig', 'running', 'evaluation', 'publish']

import navigation from './navigation'
import experimentDetails from './experimentDetails'
export default {
  components: {
    navigation,
    experimentDetails,
    tasks: () => import('./views/tasks'),
    dataTask: () => import('./views/dataTask'),
    runConfig: () => import('./views/runConfig'),
    running: () => import('./views/running'),
    evaluation: () => import('./views/evaluation'),
    publish: () => import('./views/publish'),
  },
  data() {
    return {
      allSteps: ALL_TASK_STEPS,
      openModal: false
    }
  },
  computed: {
    actualCreationStep: {
      get() {
        return this.$store.getters['actualCreationStep']
      },
    }
  },
  methods: {
    continueCreation() {
      this.$store.commit('stepDirection', 'foward')
    },
    goBack() {
      this.$store.commit('stepDirection', 'back')
    },
    open() {
      this.openModal = true
    },
    close() {
      this.openModal = false
    }
  },
}
</script>
