<template>
  <q-btn
    :style="screen.xs || screen.md || screen.sm ? 'padding-left: 0;' : ''"
    dense
    rounded
    flat
    size="xl"
  >
    <q-avatar size="42px">
      <img :src="user.user.photoURL" />
    </q-avatar>
    <q-menu>
      <div class="row no-wrap q-pa-md">
        <div class="column">
          <div class="text-h6 q-mb-md">Settings</div>
          <q-toggle v-model="mobileData" label="Use Mobile Data" />
          <q-toggle v-model="bluetooth" label="Bluetooth" />
        </div>

        <q-separator vertical inset class="q-mx-lg" />

        <div class="column items-center">
          <q-avatar size="72px">
            <img :src="user.user.photoURL" />
          </q-avatar>

          <div class="text-subtitle1 q-mt-md q-mb-xs text-center">
            {{ user.user.displayName }}
          </div>

          <q-btn
            color="primary"
            label="Déconnexion"
            @click="logoutUser"
            push
            size="sm"
            v-close-popup
          />
        </div>
      </div>
    </q-menu>
  </q-btn>
</template>
<script>
import { ref } from "vue";
import { useQuasar } from "quasar";

import { logout } from "../../services/firebase/auth/google";

export default {
  name: "SettingUser",
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
    logoutUser() {
      logout();
      this.$store.commit("user/logout");
      this.$router.push("/");
      this.showNotif("Vous êtes déconnecté !");
    },
  },
  computed: {
    user() {
      return this.$store.state.user.infos;
    },
  },
};
</script>

<style>
.loginBtn {
  margin-right: 1rem !important;
}
</style>