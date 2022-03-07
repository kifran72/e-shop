<template>
  <q-page class="q-pa-xl">
    <div class="wrapperArticle">
      <img class="articleImg" :src="getArticle.image" />
      <div :class="screen.xs ? '' : 'q-pl-lg'">
        <h4>{{ getArticle.titre }}</h4>
        <p>{{ getArticle.description }}</p>
        <div class="q-pt-md flex flex-center">
          <q-btn
            size="md"
            class="addToCart q-pa-md"
            dense
            ripple
            label="Ajouez au pannier"
            color="primary"
            @click="store.commit('carts/add', getArticle), showNotif('Article ajouté !', 'primary')"
          />
        </div>
      </div>
    </div>
  </q-page>
</template>

<style>
.articleImg {
  width: 100%;
  height: 36rem;
  object-fit: cover;
  border-radius: 12px;
}

.addToCart {
  border-radius: 12px;
}

.wrapperArticle {
  display: grid;
  grid-template-columns: repeat(2, 2fr);
  grid-gap: 1rem;
  margin-top: 5rem;
}

/* IPHONE */
@media (max-width: 700px) {
  .wrapperArticle {
    margin-top: 0;
    grid-template-columns: repeat(1, 2fr);
  }
}
</style>

<script>
import { defineComponent } from "vue";
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
  computed: {
    getArticle() {
      let result = {};

      for (let category of Articles) {
        // Test Categories
        if (category.type === this.$route.params.category) {
          for (let item of category.items) {
            // Test item type
            if (item.type === this.$route.params.type) {
              for (let sexe of item.sexe) {
                // Test gender
                if (sexe.origin === this.$route.params.origin) {
                  for (let article of sexe.items) {
                    // Test Article
                    if (article.id === this.$route.params.article) {
                      result = article
                    }
                  }
                }
              }
            }
          }
        }
      }
      return result;
    },
  },

});
</script>
