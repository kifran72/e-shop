<template>
  <q-page class="q-pa-xl">
    <h3 style="margin-top: 0">Employés</h3>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Employe",
  mounted() {
    if (!this.$store.state.user.infos) this.$router.push("/");
  },
});
</script>
