<template>
  <q-page class="q-pl-xl q-pr-xl q-pb-xl">
    <div class="wrapper q-pb-xl">
      <div v-for="article in getArticle" :key="article">
        <div v-for="item in article.items" :key="item">
          <h5
            style="
              margin-top: 2rem;
              margin-bottom: 2rem;
              text-decoration: underline;
            "
          >
            {{ item.label }}
          </h5>
          <div v-for="sexe in item.sexe" :key="sexe">
            <h6 style="margin-top: 2rem; margin-bottom: 2rem">
              <b>{{ sexe.label }}</b>
            </h6>
            <div class="wrapper2">
              <div
                class="q-pb-xl card"
                v-for="itemArticle in sexe.items"
                :key="itemArticle"
              >
                <q-img
                  class="itemImg shadow-4 cursor-pointer q-mb-md"
                  :src="itemArticle.image"
                  :alt="itemArticle.description"
                  @click="
                    goToArticle(
                      itemArticle.id,
                      itemArticle.type,
                      itemArticle.origin
                    )
                  "
                  spinner-color="primary"
                />
                <div class="flex justify-between">
                  <div class="flex column">
                    <span>{{ itemArticle.titre }}</span>
                    <span>{{ itemArticle.prix }}€</span>
                  </div>
                  <q-btn
                    round
                    ripple
                    icon="add_shopping_cart"
                    color="primary"
                    @click="addProduct(itemArticle)"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- place QPageScroller at end of page -->
    <q-page-scroller
      position="bottom-right"
      :scroll-offset="150"
      :offset="[18, 18]"
    >
      <q-btn fab icon="keyboard_arrow_up" color="black" />
    </q-page-scroller>
  </q-page>
</template>

<style>
.itemImg {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
}

.card {
  width: 100%;
  height: 100%;
  max-height: 30rem;
}

.wrapper {
  display: grid;
  grid-template-columns: repeat(1, 2fr);
}

.wrapper2 {
  display: grid;
  grid-template-columns: repeat(4, 2fr);
  grid-gap: 2rem;
}

/* IPAD */
@media (max-width: 1100px) {
  .wrapper2 {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* IPHONE */
@media (max-width: 450px) {
  .wrapper2 {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>

<script>
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";
import { useQuasar } from "quasar";

import Articles from "../../Articles";

export default defineComponent({
  name: "Articles",
  setup() {
    const $q = useQuasar();
    const $store = useStore();

    return {
      screen: $q.screen,
      store: $store,
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
    goToArticle(idArticle, type, origin) {
      this.$router.push(
        "/" +
          this.$route.params.category +
          "/" +
          type +
          "/" +
          origin +
          "/" +
          idArticle
      );
    },
    addProduct(itemArticle) {
      if (this.user) {
        this.$store.commit("carts/add", itemArticle);
        this.showNotif("Article ajouté au pannier!", "black");
      } else {
        this.showNotif("Connectez vous pour acheter des articles", "black");
      }
    },
  },
  computed: {
    getArticle() {
      const items = Articles.filter(
        (item) => item.type === this.$route.params.category
      );
      return items;
    },
    user() {
      return this.$store.state.user.infos;
    },
  },
});
</script>
