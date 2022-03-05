<template>
  <q-item clickable @click="goToArticle(link)" class="q-pa-md">
    <div class="col flex justify-between items-center">
      {{ title }}
      <q-icon size="lg" :name="icon" />
    </div>
  </q-item>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Categories",
  methods: {
    goToArticle(link) {
      this.$router.push(link);
    },
  },
  props: {
    title: {
      type: String,
      required: true,
    },

    caption: {
      type: String,
      default: "",
    },

    link: {
      type: String,
      default: "#",
    },

    icon: {
      type: String,
      default: "",
    },
  },
});
</script>
