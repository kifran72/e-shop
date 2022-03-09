<template>
  <q-page class="q-pa-xl" style="padding-top: 1.5rem;">
    <div class="flex items-center q-pb-lg">
      <q-icon class="cursor-pointer" name="west" size="lg" @click="goBack" />
      <p class="cursor-pointer" style="margin: 0; margin-left: 1rem;" @click="goBack">Retour</p>
    </div>
    <div class="wrapperArticle">
      <q-carousel
        v-model="slide"
        transition-prev="scale"
        transition-next="scale"
        swipeable
        animated
        control-color="primary"
        navigation
        padding
        arrows
        height="40rem"
        class="text-white full-width"
      >
        <q-carousel-slide name="style" class="column no-wrap flex-center" style="padding: 0;">
          <img class="articleImg" :src="getArticle.image" />
        </q-carousel-slide>
        <q-carousel-slide name="tv" class="column no-wrap flex-center" style="padding: 0;">
          <img
            class="articleImg"
            src="https://www.sip19.fr/5752-large_default/t-shirt-sport-femme-140g-shanghai.jpg"
          />
        </q-carousel-slide>
        <q-carousel-slide name="layers" class="column no-wrap flex-center" style="padding: 0;">
          <img
            class="articleImg"
            src="https://www.toiture-epdm.fr/wp-content/uploads/2021/11/femme-terranova-t-shirt-oversize-esprit-sport-vert-c3a9meraude-vert-c3a9meraude-t-shirts.jpg"
          />
        </q-carousel-slide>
        <q-carousel-slide name="map" class="column no-wrap flex-center" style="padding: 0;">
          <img
            class="articleImg"
            src="https://contents.mediadecathlon.com/p2048832/k$b67e312751e0d065b47daf016e786ffa/t-shirt-manches-courtes-jogging-femme-run-dry-marine.jpg?&f=800x800"
          />
        </q-carousel-slide>
      </q-carousel>

      <div
        :class="screen.xs ? '' : 'q-pl-lg  flex justify-between column'"
        style="padding-bottom: 2rem;"
      >
        <div>
          <h4>{{ getArticle.titre }}</h4>
          <p>{{ getArticle.description }}</p>
        </div>
        <div class="q-pt-md flex flex-center">
          <q-btn
            size="md"
            class="addToCart q-pa-md"
            dense
            ripple
            label="Ajouez au pannier"
            color="primary"
            @click="store.commit('carts/add', getArticle), showNotif('Article ajouté !', 'black')"
          />
        </div>
      </div>
    </div>

    <!-- place QPageScroller at end of page -->
    <q-page-scroller position="bottom-left" :scroll-offset="150" :offset="[18, 18]">
      <q-btn fab icon="keyboard_arrow_up" color="black" />
    </q-page-scroller>
  </q-page>
</template>

<style>
.articleImg {
  width: 100%;
  height: 100%;
  max-height: 40rem;
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
import { defineComponent, ref } from "vue";
import { useStore } from "vuex";
import { useQuasar } from "quasar";
import Articles from "../../Articles";

export default defineComponent({
  name: "Articles",
  setup() {
    const $q = useQuasar();
    const $store = useStore();
    return {
      slide: ref('style'),
      screen: $q.screen,
      store: $store,
      showNotif(message, color) {
        $q.notify({
          message: message,
          color: color,
          position: "bottom-right",
          actions: [{ icon: 'close', color: 'white' }]
        })
      }
    };
  },
  methods: {
    goBack() {
      this.$router.push("/equipements");

    }
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
