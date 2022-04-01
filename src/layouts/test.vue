<template>
  <q-layout view="hHh lpR fFf">
    <q-header
      :reveal="screen.xs || screen.sm"
      class="bg-primary text-black shadow-2"
    >
      <q-toolbar class="q-pr-lg q-pl-lg">
        <q-toolbar-title class="q-pa-md">
          <img
            class="logo flex items-center cursor-pointer"
            src="https://allinone-board.com/pluginfile.php/1146/course/overviewfiles/All%20In%20One-Benin%20Logo.png"
            @click="goToHome()"
          />
        </q-toolbar-title>
        <q-tabs class="q-mr-lg">
          <!-- <q-tab
            name="services"
            label="Services"
            @click="$router.push('/articles/equipements')"
          /> -->
          <q-tab
            v-if="user"
            name="entreprise"
            label="Mon Entreprise"
            @click="$router.push('/entreprise')"
          />
        </q-tabs>
        <!-- <q-btn
          dense
          round
          flat
          icon="account_circle"
          size="xl"
          @click="toggleLeftDrawer"
          v-if="screen.xs || screen.sm"
        >
          <q-badge color="primary" floating rounded v-if="false">5</q-badge>
        </q-btn> -->
        <LoggingUser v-if="!user && (screen.md || screen.lg || screen.xl)" />
        <SettingUser v-if="user" />
      </q-toolbar>
    </q-header>

    <!-- Mobile -->
    <q-drawer
      v-model="leftDrawerOpen"
      side="left"
      overlay
      behavior="mobile"
      bordered
    >
      <DrawerListMobile />
      <div class="flex absolute-top justify-end q-pr-md q-pt-md">
        <q-icon
          name="close"
          class="cursor-pointer"
          size="lg"
          @click="toggleLeftDrawer"
        />
      </div>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { computed, ref } from "vue";
import { useQuasar } from "quasar";
import { useStore } from "vuex";
import { login, logout } from "../services/firebase/auth/google";

//Components
import LoggingUser from "../components/user/login";
import SettingUser from "../components/user/setting";
import DrawerListMobile from "../components/mobile/drawer";

export default {
  name: "default",
  components: { LoggingUser, SettingUser, DrawerListMobile },
  methods: {
    goToHome() {
      this.$router.push("/");
    },
    async loginUser() {
      const user = await login();
      if (user) {
        this.$store.commit("user/login", user);
        this.$router.push("/articles");
        this.showNotif("Vous êtes connecté !");
      }
    },
    logoutUser() {
      logout();
      this.$store.commit("user/logout");
    },
  },

  computed: {
    user() {
      return this.$store.state.user.infos;
    },
  },

  setup() {
    const $store = useStore();
    const $q = useQuasar();
    const leftDrawerOpen = ref(false);
    return {
      store: $store,
      screen: $q.screen,
      drawer: ref(false),
      // tab: ref(null),
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
      showNotif(message, color) {
        $q.notify({
          message: message,
          color: "primary",
          position: "top-right",
          actions: [{ icon: "close", color: "white" }],
        });
      },
    };
  },
};
</script>

<style>
.logo {
  height: 40px;
  width: auto;
}

/* Fiters Colors */
aside .categories {
  background-color: rgb(10, 10, 10) !important;
  color: #ffff;
}

.q-header {
  background-color: #ffff !important;
}

/* drawer */

@media (max-width: 300px) {
  .q-drawer {
    width: 100% !important;
  }
}
</style>

