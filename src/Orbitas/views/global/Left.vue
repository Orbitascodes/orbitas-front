<template>
  <v-container>
    <v-layout class="main-sidebar">
      <v-flex>
        <div class="sidebar-header">
          <img src="@/assets/images/Orbitas.png">
        </div>
      </v-flex>
      <v-flex class="sidebar-footer">
        <v-layout>
          <v-flex xs3>
            <p class="centralizer">
              <img src="@/assets/images/Avatar.png">
            </p>
          </v-flex>
          <v-flex>
            <p><strong>Lorem ipsum</strong></p>
            <p class="tiny-text">youremail@here.com</p>

            <p class="logout"><span>Logout</span></p>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<style lang="scss" scoped>
.main-sidebar {
  flex-direction: column;
  flex-wrap: wrap;
  height: 95vh;
  .sidebar-footer {
    position: relative;
    height: fit-content;
    flex: unset;
    .logout {
      font-size: 12px;
      font-weight: 600;
      position: absolute;
      bottom: 0;
      right: 0;
    }
  }
}
</style>
