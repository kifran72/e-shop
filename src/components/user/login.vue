<template>
  <q-btn
    :style="screen.xs || screen.md || screen.sm ? 'min-width: 0' : ''"
    dense
    rounded
    flat
    size="xl"
    icon="account_circle"
  >
    <q-menu>
      <q-list style="min-width: 200px">
        <q-item clickable v-close-popup>
          <q-item-section @click="loginUser">Connexion</q-item-section>
        </q-item>
        <SignupUser />
        <q-separator />
        <q-item clickable v-close-popup>
          <q-item-section>Je suis Professionnel</q-item-section>
        </q-item>
        <q-separator />
        <q-item clickable v-close-popup>
          <q-item-section>Help &amp; Feedback</q-item-section>
        </q-item>
      </q-list>
    </q-menu>
  </q-btn>
</template>
<script>
import { ref } from "vue";
import { useQuasar } from "quasar";

import { login } from "../../services/firebase/auth/google";
import SignupUser from "../user/signup.vue";

export default {
  name: "LoggingUser",
  components: {
    SignupUser,
  },
  setup() {
    const $q = useQuasar();
    return {
      mobileData: ref(true),
      bluetooth: ref(false),
      screen: $q.screen,
      showNotif(message, color) {
        $q.notify({
          message: message,
          color: "primary",
          position: "bottom-left",
          actions: [{ icon: "close", color: "white" }],
        });
      },
    };
  },

  methods: {
    async loginUser() {
      const user = await login();
      if (user) {
        this.$store.commit("user/login", user);
        this.showNotif("Vous êtes connecté !");
      }
    },
  },
};
</script>

<style>
.loginBtn {
  margin-right: 1rem !important;
}
</style>