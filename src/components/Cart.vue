<template>
  <q-item class="block" v-for="item in carts.items" :key="item.id">
    <img
      class="cartImg cursor-pointer"
      :src="item.image"
      @click="goToArticle(item.id, item.type, item.origin)"
    />
    <div class="flex justify-between">
      <p style="margin:0;">{{ item.titre }}</p>
      <p style="margin:0;">{{ item.prix }} €</p>
      <div class="flex flex-center items-center full-width">
        <q-btn
          ripple
          dense
          round
          flat
          icon="remove"
          size="lg"
          color="black"
          @click="store.commit('carts/decrement', item), showNotif('Article supprimé !', 'black')"
        />
        <p class="counterCart">{{ item.counter }}</p>

        <q-btn
          ripple
          dense
          round
          flat
          icon="add"
          size="lg"
          color="black"
          @click="store.commit('carts/increment', item), showNotif('Article Ajouté !', 'black')"
        />
        <q-btn
          class="q-ml-md"
          ripple
          dense
          flat
          icon="delete"
          size="md"
          color="black"
          @click="store.commit('carts/remove', item), showNotif('Article retiré du pannier !', 'black')"
        />
      </div>
    </div>
  </q-item>
</template>
<style>
.cartImg {
  width: 100%;
  height: 10rem;
  object-fit: cover;
  border-radius: 12px;
}

.counterCart {
  margin-bottom: 0;
}

.counterCartItem {
  position: sticky;
  margin-left: 14rem;
}
</style>
<script>
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";
import { useQuasar } from "quasar";

export default defineComponent({
  name: "Cart",
  methods: {
    goToArticle(idArticle, type, origin) {
      this.$router.push("/" + this.$route.params.category + "/" + type + "/" + origin + "/" + idArticle);
    }
  },

  setup() {
    const $store = useStore();
    const $q = useQuasar();

    return {
      store: $store,
      carts: $store.state.carts,
      showNotif(message, color) {
        $q.notify({
          message: message,
          color: color,
          position: "top-right",
          actions: [{ icon: 'close', color: 'white' }]
        })
      }
    };
  },


});
</script>
