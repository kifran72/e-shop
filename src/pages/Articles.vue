<template>
  <q-page class="q-pl-xl q-pr-xl q-pb-xl">
    <div class="wrapper q-pb-xl">
      <div v-for="article in getArticle" :key="article">
        <div v-for="item in article.items" :key="item">
          <h5>
            <b>{{ item.label }}</b>
          </h5>
          <div v-for="sexe in item.sexe" :key="sexe">
            <h6>
              <b>{{ sexe.label }}</b>
            </h6>
            <div class="wrapper2">
              <div class="q-pb-xl card" v-for="itemArticle in sexe.items" :key="itemArticle">
                <img
                  class="itemImg"
                  :src="itemArticle.image"
                  :alt="itemArticle.description"
                  @click="goToArticle(itemArticle.id, itemArticle.type, itemArticle.origin)"
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
                    @click="store.commit('carts/add', itemArticle), showNotif('Article ajouté !', 'primary')"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- place QPageScroller at end of page -->
    <q-page-scroller position="bottom-right" :scroll-offset="150" :offset="[18, 18]">
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
  height: 20rem;
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
@media (max-width: 1400px) {
  .wrapper2 {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* IPHONE */
@media (max-width: 500px) {
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
          color: color,
          position: "bottom"
        })
      }
    };
  },
  methods: {
    goToArticle(idArticle, type, origin) {
      this.$router.push("/" + this.$route.params.category + "/" + type + "/" + origin + "/" + idArticle);
    }
  },
  computed: {
    getArticle() {
      const items = Articles.filter(
        (item) => item.type === this.$route.params.category
      );
      return items;
    },
  },

});
</script>
