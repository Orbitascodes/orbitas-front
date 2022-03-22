<template>
  <v-container>
    <v-card elevation="0" class="login-card" width="500" color="application-bg">
      <v-layout wrap>
        <img src="@/assets/images/Orbitas.png" />
        <v-flex grow xs12>
          <p><strong>Recover your account</strong></p>
        </v-flex>
        <v-flex grow xs12>
          <v1.base-input
            solo
            label="Type Your Email"
            outlined
            flat
            type="text"
            hide-details="auto"
            prepend-inner-icon="mdi-account"
            v-model="user.email"
          />
        </v-flex>
        <v-flex grow xs12>
          <router-link :to="{ name: 'login' }">
            <v1.base-button block color="primary">
              Send Email
            </v1.base-button>
          </router-link>
        </v-flex>

        <v-flex class="footer-card-login" grow xs12>
          <!-- Router link to recover and sing up -->
          <p>
            <strong
              >Have an account?
              <router-link :to="{ name: 'login' }"><span>Sign Up</span></router-link>
            </strong>
          </p>
        </v-flex>
      </v-layout>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      user: {
        password: null,
        email: null,
        stayLogged: false,
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  align-items: center;
  height: 100vh;
}
.v-card.login-card {
  padding: 20px;
  margin: auto;
  p {
    &:first-child {
      margin-bottom: 0;
    }
  }
  .footer-card-login {
    margin-top: 20px;
    p {
      text-align: center;
    }
  }
}
</style>
