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
              ? 'q-ml-md'
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
        <q-input
          v-if="screen.md || screen.lg || screen.xl"
          dense
          v-model="text"
          input-class="text-right text-black"
          class="q-pr-md"
          placeholder="Rechercher"
        >
          <template v-slot:append>
            <q-icon v-if="text === ''" name="search" size="md" color="black" />
            <q-icon
              v-else
              name="clear"
              class="cursor-pointer"
              @click="text = ''"
            />
          </template>
        </q-input>
        <q-separator
          v-if="screen.lg || screen.xl"
          class="q-ma-md"
          vertical
          inset
        />
        <q-btn
          class
          dense
          round
          flat
          icon="shopping_cart"
          size="lg"
          @click="toggleRightDrawer"
        >
          <q-badge
            color="primary"
            floating
            rounded
            v-if="store.state.carts.items.length !== 0"
            >{{ store.state.carts.items.length }}</q-badge
          >
        </q-btn>
        <!-- <q-icon
          class="q-mr-md cursor-pointer"
          name="shopping_cart"
          size="lg"
          @click="toggleRightDrawer"
        />-->
      </q-toolbar>
    </q-header>

    <!-- Desktop -->
    <q-drawer
      class="categories q-pa-md"
      v-if="screen.md || screen.lg || screen.xl"
      show-if-above
      v-model="leftDrawerOpen"
      side="left"
      elevated
    >
      <Categories
        v-for="link in essentialLinks"
        :key="link.title"
        v-bind="link"
      />
    </q-drawer>

    <!-- Mobile -->
    <q-drawer
      class="categories q-pa-md"
      v-if="screen.sm || screen.xs"
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
      <q-input
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
      </q-input>
    </q-drawer>

    <!-- Cart -->
    <q-drawer
      class="no-scroll"
      style="padding: 4rem 0.5rem 9rem"
      v-model="rightDrawerOpen"
      side="right"
      behavior="mobile"
      bordered
    >
      <div class="bg-white absolute-top flex items-center q-pa-md">
        <q-icon
          name="close "
          class="cursor-pointer"
          size="lg"
          @click="toggleRightDrawer"
        />
        <p style="margin: 0; padding-left: 1rem" v-if="checkout !== 0">
          Articles total:
          <b>{{ store.state.carts.items.length }}</b>
        </p>
      </div>

      <div class="absolute-center" v-if="store.state.carts.items.length === 0">
        <h5>Pannier vide</h5>
      </div>
      <q-scroll-area
        :thumb-style="thumbStyle"
        :bar-style="barStyle"
        style="
          height: 100%;
          max-width: 100%;
          padding-right: 3.8rem;
          padding-left: 3.8rem;
        "
      >
        <Cart />
      </q-scroll-area>
      <div
        class="bg-white absolute-bottom q-pa-lg"
        style="padding-top: 0"
        v-if="checkout !== 0"
      >
        <q-separator class="q-mb-md shadow-6" color="grey" />

        <h6 style="margin: 0 0 1rem 0">
          <b>Prix total: {{ checkout.toFixed(2) }}€</b>
        </h6>
        <q-btn
          ripple
          fab
          label="Passez la commande"
          class="btnBuy q-pa-md full-width"
          color="primary"
        />
      </div>
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
import Cart from "components/Cart.vue";

const linksList = [
  {
    title: "Equipements",
    caption: "Tee-shirt",
    icon: "navigate_next",
    link: "/equipements",
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
    Cart,
  },
  methods: {
    goToHome() {
      this.$router.push("/");
    },
  },
  computed: {
    checkout() {
      let price = 0;
      for (let item of this.store.state.carts.items) {
        price = price + item.prix * item.counter;
      }

      return price;
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
        backgroundColor: "black",
        width: "5px",
        opacity: 0.75,
      },

      barStyle: {
        right: "2px",
        borderRadius: "9px",
        backgroundColor: "black",
        width: "9px",
        opacity: 0.2,
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

