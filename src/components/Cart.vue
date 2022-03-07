<template>
  <q-scroll-area style="height: 42.3rem;" class="bg-white">
    <q-item class="block q-pr-xl q-pb-lg" v-for="item in carts.items" :key="item.id">
      <img class="cartImg" :src="item.image" alt />
      <div class="flex justify-between">
        <p>{{ item.titre }}</p>
        <p>{{ item.prix }} €</p>
        <div class="flex flex-center items-center full-width">
          <q-btn
            ripple
            dense
            flat
            icon="remove"
            size="lg"
            color="black"
            @click="store.commit('carts/decrement', item), showNotif('Article supprimé !', 'primary')"
          />
          <p class="counterCart">{{ item.counter }}</p>

          <q-btn
            ripple
            dense
            flat
            icon="add"
            size="lg"
            color="black"
            @click="store.commit('carts/increment', item), showNotif('Article Ajouté !', 'primary')"
          />
          <q-btn
            class="q-ml-md"
            ripple
            dense
            flat
            icon="delete"
            size="md"
            color="black"
            @click="store.commit('carts/remove', item), showNotif('Article retiré du pannier !', 'primary')"
          />
        </div>
      </div>
    </q-item>
  </q-scroll-area>
  <div v-if="checkout !== 0">
    <p class="q-mt-md">
      <b>Prix total: {{ checkout }}€</b>
    </p>
    <q-btn label="Acheter" class="btnBuy" color="primary" />
  </div>
</template>
<style>
.cartImg {
  width: 100%;
  height: 10rem;
  object-fit: cover;
  border-radius: 12px;
}

.btnBuy {
  border-radius: 12px;
  width: 16.5rem;
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
  computed: {
    checkout() {
      let price = 0;
      for (let item of this.store.state.carts.items) {

        price = price + (item.prix * item.counter);
      }

      return price
    }
  },
  mounted() {
    this.checkout
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
          position: "bottom"
        })
      }
    };
  },


});
</script>
