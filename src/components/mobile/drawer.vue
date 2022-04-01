<template>
  <q-scroll-area :class="user ? 'drawerMobileLogged' : 'drawerMobileNotLogged'">
    <q-list v-if="!user">
      <q-item clickable v-ripple>
        <q-item-section avatar>
          <q-icon name="account_circle" />
        </q-item-section>
        <q-item-section @click="loginUser"> Connexion </q-item-section>
      </q-item>
      <q-item clickable v-ripple>
        <q-item-section avatar>
          <q-icon name="send" />
        </q-item-section>
        <q-item-section> Inscription </q-item-section>
      </q-item>
      <q-separator />
      <q-item clickable v-ripple>
        <q-item-section avatar>
          <q-icon name="info" />
        </q-item-section>
        <q-item-section> info </q-item-section>
      </q-item>
    </q-list>

    <q-list v-if="user" padding>
      <q-item clickable v-ripple>
        <q-item-section avatar>
          <q-icon name="inbox" />
        </q-item-section>

        <q-item-section> Info profils </q-item-section>
      </q-item>

      <q-item clickable v-ripple>
        <q-item-section avatar>
          <q-icon name="star" />
        </q-item-section>

        <q-item-section> Star </q-item-section>
      </q-item>

      <q-item clickable v-ripple>
        <q-item-section avatar>
          <q-icon name="send" />
        </q-item-section>

        <q-item-section> Send </q-item-section>
      </q-item>

      <q-item clickable v-ripple>
        <q-item-section avatar>
          <q-icon name="logout" />
        </q-item-section>

        <q-item-section @click="logoutUser"> Déconnexion </q-item-section>
      </q-item>
    </q-list>
  </q-scroll-area>

  <q-img
    v-if="user"
    class="absolute-top"
    src="https://cdn.quasar.dev/img/material.png"
    style="height: 150px"
  >
    <div class="absolute-bottom bg-transparent">
      <q-avatar size="56px" class="q-mb-sm">
        <img :src="user.user.photoURL" />
      </q-avatar>
      <div class="text-weight-bold">{{ user.user.displayName }}</div>
      <div>{{ user.user.email }}</div>
    </div>
  </q-img>
</template>

<script>
import { computed, ref } from "vue";
import { useStore } from "vuex";
import { useQuasar } from "quasar";

import { login, logout } from "../../services/firebase/auth/google";

export default {
  computed: {
    user() {
      return this.$store.state.user.infos;
    },
  },
  methods: {
    async loginUser() {
      const user = await login();
      if (user) {
        this.$store.commit("user/login", user);
        this.showNotif("Vous êtes connecté !");
      }
    },
    async logoutUser() {
      const user = await logout();
      if (user) {
        this.$store.commit("user/logout");
        this.showNotif("Vous êtes déconnecté !");
      }
    },
  },
  setup() {
    const $store = useStore();
    const $q = useQuasar();
    return {
      store: $store,
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
.drawerMobileLogged {
  height: calc(100% - 150px);
  margin-top: 150px;
  border-right: 1px solid #ddd;
}
.drawerMobileNotLogged {
  height: calc(100% - 150px);
  margin-top: 4rem;
  border-right: 1px solid #ddd;
}
</style>