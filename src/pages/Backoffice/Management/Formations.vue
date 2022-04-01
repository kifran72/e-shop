<template>
  <q-page class="q-pa-xl">
    <h1 style="margin-top: 0">Formations</h1>

    <q-btn
      class="q-mt-xl"
      color="white"
      text-color="blue"
      unelevated
      to="/"
      label="Go Home"
      no-caps
    />
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Formation",
  mounted() {
    if (!this.$store.state.user.infos) this.$router.push("/");
  },
});
</script>
