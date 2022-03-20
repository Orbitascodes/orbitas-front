<template>
  <div class="navigation-container">
    <div class="tools-navigation">
      <div>
        <p><strong>{{ experimentCount ? experimentCount : 'Experiment 1' }}</strong></p>
        <p>{{ experimentName ? experimentName : 'Experiment Name' }}</p>
      </div>

      <v1.base-button :default-height="false" icon @click="openModal">
        <v-icon
          tiny
        >
          mdi-pencil
        </v-icon>
      </v1.base-button>
    </div>
    <div class="steps">
      <div class="step"><p>Task</p></div>
      <div class="step"><p>Data</p></div>
      <div class="step"><p>Explore</p></div>
      <div class="step"><p>Run config</p></div>
      <div class="step"><p>Running</p></div>
      <div class="step"><p>Evaluation</p></div>
      <div class="step"><p>Publish</p></div>
    </div>

    <div class="actions">
      <v1.base-button @click="goBack">
          <v-icon
            tiny
          >
            mdi-arrow-left
          </v-icon>
      </v1.base-button>
      <v1.base-button @click="continueTaskCreation" color="secondary">
        Continue
      </v1.base-button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.navigation-container {
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  .steps {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: #d7d7d7;
    padding: 10px;
    height: 61px;
    width: 100%;
    margin: 0 2px;
  }
  .tools-navigation {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 250px;
    background-color: #d7d7d7;
    margin-right: 2px;
  }
  .actions {
    margin-left: 2px;
    display: flex;
    flex-direction: row;
    .main-button {
      margin: 2px;
    }
  }
}
</style>
