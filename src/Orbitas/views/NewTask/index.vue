<template>
  <v-container>
    <navigation></navigation>
    <experiment-details></experiment-details>
    <tasks></tasks>
  </v-container>
</template>

<script>
import navigation from './navigation'
import experimentDetails from './experimentDetails'
import tasks from './tasks'
export default {
  components: {
    navigation,
    experimentDetails,
    tasks
  }
}
</script>
