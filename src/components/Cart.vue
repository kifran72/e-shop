<template>
  <q-page style="
    min-height: 716px;
    margin-bottom: 10rem;
    margin-top: 2rem;
    ">
    <q-item class="block" v-for="item in carts.items" :key="item.id">
      <img class="cartImg" :src="item.image" alt />
      <div class="flex justify-between">
        <p>{{ item.titre }}</p>
        <p>{{ item.prix }} €</p>
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
  </q-page>
  <div
    class="absolute-bottom bg-white shadow-up-2"
    v-if="checkout !== 0"
    style="padding: 1.5rem 2.2rem;"
  >
    <p>
      <b>{{ store.state.carts.items.length }} articles</b>
    </p>
    <p>
      <b>Prix total: {{ checkout.toFixed(2) }}€</b>
    </p>
    <q-btn label="Acheter" class="btnBuy q-pa-md" color="primary" />
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
  width: 14.3rem;
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
          position: "top-right",
          actions: [{ icon: 'close', color: 'white' }]
        })
      }
    };
  },


});
</script>
