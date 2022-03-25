<template>
  <v-container>
    <v-card elevation="0" class="login-card" width="500" color="application-bg">
      <v-layout wrap>
        <img src="@/assets/images/Orbitas.png" />
        <v-flex grow xs12>
          <p><strong>Create Account</strong></p>
          <p>Takes more than 30 seconds.</p>
        </v-flex>
        <v-flex grow xs12>
          <v1.base-input
            v-model="user.email"
            solo
            label="Email Address"
            outlined
            flat
            type="text"
            :rules="[rules.validMail, rules.required]"
            hide-details="auto"
            prepend-inner-icon="mdi-account"
          />
        </v-flex>
        <v-flex grow xs12>
          <v1.base-input
            v-model="user.password"
            solo
            label="Password"
            type="password"
            flat
            outlined
            :rules="[rules.strong, rules.required]"
            hide-details="auto"
            prepend-inner-icon="mdi-lock"
          />
        </v-flex>
        <v-flex grow xs12>
          <v1.base-input
            v-model="user.confirmPassword"
            solo
            label="Confirm Password"
            type="password"
            flat
            outlined
            :rules="[rules.passwordIsEqual, rules.required]"
            hide-details="auto"
            prepend-inner-icon="mdi-lock"
          />
        </v-flex>
        <v-flex grow xs12>
          <v1.base-input-select
            solo
            flat
            outlined
            :rules="[rules.required]"
            hide-details="auto"
            prepend-inner-icon="mdi-briefcase"
            :items="itemsSelect"
          />
          <br />
        </v-flex>
        <v-checkbox v-model="acceptTerms" label="Accept Terms of Conditions"></v-checkbox>
        <br />
        <v-flex grow xs12>
          <p>
            <strong
              >Read
              <router-link :to="{ name: 'terms' }"><span>Terms of Conditions</span></router-link>
            </strong>
          </p>
        </v-flex>
        <v-flex grow xs12>
          <router-link :to="{ name: 'login' }">
            <v1.base-button block color="primary">
              Sign Up
            </v1.base-button>
          </router-link>
        </v-flex>
      </v-layout>
    </v-card>
  </v-container>
</template>

<script>
const STRONG_PASSWORD_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/;
const VALID_EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export default {
  data() {
    return {
      user: {
        password: null,
        email: null,
        confirmPassword: null,
        acceptTerms: false,
      },
      strongPass: STRONG_PASSWORD_REGEX,
      validEmail: VALID_EMAIL_REGEX,
      rules: {
        required: (value) => !!value || 'Field required',
        validMail: (v) => (this.validEmail.test(v) ? true : 'This email is invalid'),
        strong: (v) => (this.strongPass.test(v)
          ? true
          : `The password must contain
        at least 8 characters, one uppercase and one lowercase
        letter and at least one special character`),
        passwordIsEqual: (v) => (v === this.user.password ? true : "The password doesn't match"),
      },
    };
  },
  computed: {
    itemsSelect() {
      return ['Item 1', 'Item 2'];
    },
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
