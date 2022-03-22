<template>
  <v-container>
    <v-card elevation="0" class="login-card" width="500" color="application-bg">
      <v-layout wrap>
        <img src="@/assets/images/Orbitas.png" />
        <v-flex grow xs12>
          <p><strong>Hello! Let's get started</strong></p>
          <p>Sign in to continue.</p>
        </v-flex>
        <v-flex grow xs12>
          <v1.base-input
            solo
            label="Email"
            outlined
            flat
            type="text"
            hide-details="auto"
            prepend-inner-icon="mdi-account"
            v-model="user.email"
          />
        </v-flex>
        <v-flex grow xs12>
          <v1.base-input
            solo
            label="Senha"
            type="text"
            flat
            outlined
            hide-details="auto"
            prepend-inner-icon="mdi-lock"
            v-model="user.password"
          />
        </v-flex>
        <v-checkbox v-model="user.stayLogged" label="Remember me"></v-checkbox>
        <v-flex grow xs12>
          <router-link :to="{ name: 'Home' }">
            <v1.base-button block color="primary">
              Login
            </v1.base-button>
          </router-link>
        </v-flex>

        <v-flex class="footer-card-login" grow xs12>
          <!-- Router link to recover and sing up -->
          <p>
            <strong
              >Don't have an account?
              <router-link :to="{ name: 'signup' }"><span>Sign Up</span></router-link>
            </strong>
          </p>
          <p>
            <strong>
              <router-link :to="{ name: 'recover' }"
                ><span>Forgot your password?</span>
              </router-link>
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
