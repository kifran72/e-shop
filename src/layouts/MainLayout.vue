<template>
  <q-layout view="hHh LpR fFf">
    <q-header class="bg-primary text-black shadow-2">
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
            src="data:image/png;base64,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"
            @click="goToHome()"
          />
        </q-toolbar-title>
        <q-btn class dense round flat icon="shopping_cart" size="lg" @click="toggleRightDrawer">
          <q-badge
            color="primary"
            floating
            rounded
            v-if="store.state.carts.items.length !== 0"
          >{{ store.state.carts.items.length }}</q-badge>
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
      bordered
      fixed
    >
      <Categories v-for="link in essentialLinks" :key="link.title" v-bind="link" />
    </q-drawer>

    <!-- Mobile -->
    <q-drawer
      class="categories q-pa-md"
      v-if="screen.sm || screen.xs"
      v-model="leftDrawerOpen"
      side="left"
    >
      <div class="flex justify-end q-pa-md">
        <q-icon name="close" class="cursor-pointer" size="lg" @click="toggleLeftDrawer" />
      </div>

      <Categories v-for="link in essentialLinks" :key="link.title" v-bind="link" />
    </q-drawer>

    <!-- Cart -->
    <q-drawer
      class="no-scroll"
      style="
        padding: 4rem 0.5rem 9rem;
      "
      v-model="rightDrawerOpen"
      side="right"
      behavior="mobile"
      bordered
    >
      <div class="bg-white absolute-top flex items-center q-pa-md">
        <q-icon name="close " class="cursor-pointer" size="lg" @click="toggleRightDrawer" />
        <p style="margin: 0; padding-left: 1rem" v-if="checkout !== 0">
          Articles total:
          <b>{{ store.state.carts.items.length }}</b>
        </p>
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
      <div class="bg-white absolute-bottom q-pa-lg" style="padding-top: 0;" v-if="checkout !== 0">
        <q-separator class="q-mb-md" color="grey" />

        <h6 style="margin: 0 0 1rem 0;">
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
    Cart
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

        price = price + (item.prix * item.counter);
      }

      return price
    }
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
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
      rightDrawerOpen,
      toggleRightDrawer() {
        rightDrawerOpen.value = !rightDrawerOpen.value;
      },
      thumbStyle: {
        right: '4px',
        borderRadius: '5px',
        backgroundColor: 'black',
        width: '5px',
        opacity: 0.75
      },

      barStyle: {
        right: '2px',
        borderRadius: '9px',
        backgroundColor: 'black',
        width: '9px',
        opacity: 0.2
      }
    };
  },
  mounted() {
    this.checkout
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

