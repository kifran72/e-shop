<template>
  <q-page class="q-pl-xl q-pr-xl q-pb-xl">
    <div class="wrapper">
      <div v-for="sexe in getArticle.sexe" :key="sexe">
        <h5>
          <b>{{ sexe.origin }}</b>
        </h5>
        <div class="wrapper2">
          <div class="q-pb-xl card" v-for="items in sexe.items" :key="items">
            <img class="itemImg" :src="items.image" :alt="items.description" />
            <div class="flex column">
              <span>{{ items.titre }}</span>
              <span>{{ items.prix }}€</span>
            </div>
          </div>
        </div>
      </div>
    </div>
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
  height: 12rem;
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
@media (max-width: 1300px) {
  .wrapper2 {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* IPHONE */
@media (max-width: 600px) {
  .wrapper2 {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>

<script>
import { defineComponent } from "vue";
import { useQuasar } from "quasar";

import Articles from "../../Articles";

export default defineComponent({
  name: "Articles",
  setup() {
    const $q = useQuasar();
    return {
      screen: $q.screen,
    };
  },
  computed: {
    getArticle() {
      const items = Articles.filter(
        (item) => item.type === this.$route.params.article
      );
      console.log(items[0]);

      return items[0];
    },
  },
});
</script>
