<template>
  <q-page class="flex flex-center">
    <div class="flex items-center">
      <q-toggle v-model="user" />

      User: {{ userLogged }}
    </div>
  </q-page>
</template>

<script>
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "PageIndex",

  setup() {
    const $store = useStore();

    const user = computed({
      get: () => $store.state.user.logged,
      set: (val) => {
        $store.commit("user/login", val);
        console.log($store.state.user.logged);
      },
    });

    return {
      user,
      userLogged: $store.state.user,
    };
  },
});
</script>
