<template>
  <q-page class="text-center">
    <h5>
      <b>{{ getArticle }}</b>
    </h5>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Articles",
  computed: {
    getArticle() {
      return this.$route.params.article;
    },
  },
});
</script>
