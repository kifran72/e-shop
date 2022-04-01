<template>
  <div>
    <q-btn
      flat
      no-caps
      label="Inscription"
      color="black"
      @click="confirm = true"
      style="font-weight: normal; height: 3rem"
      class="full-width"
      align="left"
    />
    <q-dialog v-model="confirm" persistent>
      <q-card>
        <q-card-section class="row items-center">
          <q-avatar icon="signal_wifi_off" color="primary" text-color="white" />
          <span class="q-ml-sm">Signup.</span>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Cancel" color="primary" v-close-popup />
          <q-btn flat label="Turn on Wifi" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "SignupUser",
  setup() {
    return {
      alert: ref(false),
      confirm: ref(false),
      prompt: ref(false),

      address: ref(""),
    };
  },
};
</script>

<style>
</style>