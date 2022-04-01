<template>
  <q-page style="padding: 1.5rem 3rem">
    <div class="flex items-center q-pb-lg">
      <q-icon class="cursor-pointer" name="west" size="lg" @click="goBack" />
      <p
        class="cursor-pointer"
        style="margin: 0; margin-left: 1rem"
        @click="goBack"
      >
        Retour
      </p>
    </div>
    <div class="wrapperArticle">
      <q-carousel
        class="carouselArticle"
        :height="screen.xs ? '28rem' : ''"
        swipeable
        animated
        v-model="slide"
        v-model:fullscreen="fullscreen"
        thumbnails
        infinite
      >
        <q-carousel-slide
          class="articleImg"
          :name="1"
          :img-src="getArticle.image"
        />
        <q-carousel-slide
          class="articleImg"
          :name="2"
          img-src="https://www.sip19.fr/5752-large_default/t-shirt-sport-femme-140g-shanghai.jpg"
        />
        <q-carousel-slide
          class="articleImg"
          :name="3"
          img-src="https://www.toiture-epdm.fr/wp-content/uploads/2021/11/femme-terranova-t-shirt-oversize-esprit-sport-vert-c3a9meraude-vert-c3a9meraude-t-shirts.jpg"
        />
        <q-carousel-slide
          class="articleImg"
          :name="4"
          img-src="https://contents.mediadecathlon.com/p2048832/k$b67e312751e0d065b47daf016e786ffa/t-shirt-manches-courtes-jogging-femme-run-dry-marine.jpg?&f=800x800"
        />
        <template v-if="!screen.lg && !screen.xl" v-slot:control>
          <q-carousel-control position="bottom-right" :offset="[18, 18]">
            <q-btn
              push
              round
              dense
              color="white"
              text-color="primary"
              :icon="fullscreen ? 'fullscreen_exit' : 'fullscreen'"
              @click="fullscreen = !fullscreen"
            />
          </q-carousel-control>
        </template>
      </q-carousel>
      <div :class="screen.xs ? '' : 'q-pl-lg  flex justify-between column'">
        <div>
          <h4 style="margin-bottom: 1rem">{{ getArticle.titre }}</h4>
          <h6 style="margin: 0 0 1rem">
            Prix:
            <b>{{ getArticle.prix }} €</b>
          </h6>
          <p class="q-pb-md">{{ getArticle.description }}</p>
        </div>
        <div class="flex flex-center" style="padding-bottom: 2rem">
          <q-btn
            size="md"
            class="addToCart q-pa-md"
            dense
            ripple
            label="Ajouez au pannier"
            color="primary"
            @click="addProduct(getArticle)"
          />
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

.carouselArticle {
  height: 40rem;
}

/* Desktop LARGE */
@media (min-width: 1700px) {
  .carouselArticle {
    height: 47rem;
  }
}

/* Desktop extra LARGE */
@media (min-width: 2000px) {
  .carouselArticle {
    height: 80rem;
  }
}

/* IPAD */
@media (max-width: 1023px) {
  .carouselArticle {
    height: 41.5rem;
  }
  .wrapperArticle {
    margin-top: 0;
    grid-template-columns: repeat(1, 2fr);
  }
}

/* IPHONE */
@media (max-width: 700px) {
  .carouselArticle {
    height: 30rem;
  }
  .wrapperArticle {
    margin-top: 0;
    /* grid-template-columns: repeat(1, 2fr); */
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
      slide: ref(1),
      screen: $q.screen,
      store: $store,
      fullscreen: ref(false),
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
    goBack() {
      this.$router.push("/articles/equipements");
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
                      result = article;
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
    user() {
      return this.$store.state.user.infos;
    },
  },
});
</script>
