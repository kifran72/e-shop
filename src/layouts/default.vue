<template>
  <q-layout view="hHh LpR fFf">
    <q-header
      :reveal="screen.xs || screen.sm"
      class="bg-primary text-black shadow-2"
    >
      <q-toolbar class="q-pr-lg q-pl-lg">
        <q-icon
          class="cursor-pointer"
          v-if="screen.xs || screen.sm"
          name="menu"
          size="lg"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title
          :class="
            screen.xl || screen.lg || screen.md || screen.md
              ? 'q-ml-sm'
              : 'flex flex-center'
          "
          class="q-pa-md"
        >
          <img
            class="logo flex items-center cursor-pointer"
            src="https://allinone-board.com/pluginfile.php/1146/course/overviewfiles/All%20In%20One-Benin%20Logo.png"
            @click="goToHome()"
          />
        </q-toolbar-title>

        <SettingUser v-if="user" />
        <LoggingUser v-else />
      </q-toolbar>
    </q-header>

    <!-- Desktop -->
    <q-drawer
      v-if="user"
      v-model="leftDrawerOpen"
      show-if-above
      :mini="miniState"
      @mouseover="miniState = false"
      @mouseout="miniState = true"
      :width="450"
      :breakpoint="500"
      class="bg-black"
    >
      <q-scroll-area
        class="fit"
        :thumb-style="thumbStyle"
        :bar-style="barStyle"
      >
        <Categories
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-scroll-area>
    </q-drawer>

    <!-- Mobile -->
    <q-drawer
      class="categories q-pa-md"
      v-if="user && (screen.sm || screen.xs)"
      v-model="leftDrawerOpen"
      side="left"
    >
      <div class="flex justify-end q-pa-md">
        <q-icon
          name="close"
          class="cursor-pointer"
          size="lg"
          @click="toggleLeftDrawer"
        />
      </div>
      <Categories
        v-for="link in essentialLinks"
        :key="link.title"
        v-bind="link"
      />
      <!-- <q-input
        dark
        dense
        v-model="text"
        input-class="text-right"
        class="q-pa-lg absolute-bottom"
        placeholder="Rechercher"
      >
        <template v-slot:append>
          <q-icon v-if="text === ''" name="search" size="md" />
          <q-icon
            v-else
            name="clear"
            class="cursor-pointer"
            @click="text = ''"
          />
        </template>
      </q-input> -->
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";
import { useQuasar } from "quasar";
import Categories from "components/Categories.vue";
import SettingUser from "src/components/user/setting.vue";
import LoggingUser from "../components/user/login";

const linksList = [
  {
    title: "Paramètres",
    caption: "Tee-shirt",
    icon: "navigate_next",
    link: "/entreprise",
  },
  // {
  //   title: "Packs",
  //   caption: "Joggins",
  //   icon: "navigate_next",
  //   link: "/packs",
  // },
];

export default {
  components: {
    Categories,
    SettingUser,
    LoggingUser,
  },
  methods: {
    goToHome() {
      this.$router.push("/");
    },
  },
  computed: {
    user() {
      return this.$store.state.user.infos;
    },
  },
  setup() {
    const leftDrawerOpen = ref(false);
    const rightDrawerOpen = ref(false);
    const $store = useStore();

    const $q = useQuasar();

    return {
      store: $store,
      screen: $q.screen,
      essentialLinks: linksList,
      text: ref(""),
      miniState: ref(true),
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
      rightDrawerOpen,
      toggleRightDrawer() {
        rightDrawerOpen.value = !rightDrawerOpen.value;
      },
      thumbStyle: {
        right: "4px",
        borderRadius: "5px",
        backgroundColor: "white",
        width: "5px",
        opacity: 0.75,
      },

      barStyle: {
        right: "2px",
        borderRadius: "9px",
        backgroundColor: "white",
        width: "9px",
        opacity: 0.2,
      },
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
  mounted() {
    this.checkout;
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

.btnBuy {
  border-radius: 12px;
}

/* drawer */

@media (max-width: 300px) {
  .q-drawer {
    width: 100% !important;
  }
}
</style>

