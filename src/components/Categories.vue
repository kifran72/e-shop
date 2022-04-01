<template>
  <q-list dark>
    <q-item clickable v-ripple>
      <q-item-section avatar>
        <q-icon name="home" />
      </q-item-section>

      <q-item-section>
        <q-tree
          style="padding-left: 0.4rem"
          :nodes="home"
          v-model:expanded="expanded"
          node-key="label"
          color="white"
          text-color="white"
          dark
          no-connectors
        />
      </q-item-section>
    </q-item>

    <q-separator dark />

    <q-item @click="expanded = true">
      <q-item-section avatar>
        <q-icon name="groups" />
      </q-item-section>

      <q-item-section>
        <q-tree
          :nodes="management"
          v-model:expanded="expanded"
          node-key="label"
          color="transparent"
          text-color="white"
          dark
          no-connectors
      /></q-item-section>
    </q-item>

    <q-separator dark />

    <q-item>
      <q-item-section avatar>
        <q-icon name="shopping_cart" />
      </q-item-section>

      <q-item-section>
        <q-tree
          :nodes="webmarketplace"
          v-model:expanded="expanded"
          node-key="label"
          color="transparent"
          text-color="white"
          dark
          no-connectors
        />
      </q-item-section>
    </q-item>

    <q-separator dark />

    <q-item>
      <q-item-section avatar>
        <q-icon name="description" />
      </q-item-section>

      <q-item-section>
        <q-tree
          :nodes="crm"
          v-model:expanded="expanded"
          node-key="label"
          color="transparent"
          text-color="white"
          dark
          no-connectors
        />
      </q-item-section>
    </q-item>

    <q-separator dark />

    <q-item>
      <q-item-section avatar>
        <q-icon name="supervised_user_circle" />
      </q-item-section>

      <q-item-section>
        <q-tree
          :nodes="serviceClient"
          v-model:expanded="expanded"
          node-key="label"
          color="transparent"
          text-color="white"
          dark
          no-connectors
        />
      </q-item-section>
    </q-item>

    <q-separator dark />

    <q-item>
      <q-item-section avatar>
        <q-icon name="work_history" />
      </q-item-section>

      <q-item-section>
        <q-tree
          :nodes="achats"
          v-model:expanded="expanded"
          node-key="label"
          color="transparent"
          text-color="white"
          dark
          no-connectors
      /></q-item-section>
    </q-item>

    <q-separator dark />

    <q-item>
      <q-item-section avatar>
        <q-icon name="timeline" />
      </q-item-section>

      <q-item-section
        ><q-tree
          :nodes="productions"
          v-model:expanded="expanded"
          node-key="label"
          color="transparent"
          text-color="white"
          dark
          no-connectors
        />
      </q-item-section>
    </q-item>

    <q-separator dark />

    <q-item>
      <q-item-section avatar>
        <q-icon name="widgets" />
      </q-item-section>

      <q-item-section
        ><q-tree
          :nodes="logistique"
          v-model:expanded="expanded"
          node-key="label"
          color="transparent"
          text-color="white"
          dark
          no-connectors
        />
      </q-item-section>
    </q-item>

    <q-separator dark />

    <q-item>
      <q-item-section avatar>
        <q-icon name="contact_page" />
      </q-item-section>

      <q-item-section>
        <q-tree
          :nodes="comptabilite"
          v-model:expanded="expanded"
          node-key="label"
          color="transparent"
          text-color="white"
          dark
          no-connectors
        />
      </q-item-section>
    </q-item>

    <q-separator dark />

    <q-item>
      <q-item-section avatar>
        <q-icon name="support" />
      </q-item-section>

      <q-item-section>
        <q-tree
          :nodes="sav"
          v-model:expanded="expanded"
          node-key="label"
          color="transparent"
          text-color="white"
          dark
          no-connectors
        />
      </q-item-section>
    </q-item>

    <q-separator dark />

    <q-item>
      <q-item-section avatar>
        <q-icon name="storefront" />
      </q-item-section>

      <q-item-section>
        <q-tree
          :nodes="marketing"
          v-model:expanded="expanded"
          node-key="label"
          color="transparent"
          text-color="white"
          dark
          no-connectors
        />
      </q-item-section>
    </q-item>

    <q-separator dark />

    <q-item>
      <q-item-section avatar>
        <q-icon name="construction" />
      </q-item-section>

      <q-item-section
        ><q-tree
          :nodes="rd"
          v-model:expanded="expanded"
          node-key="label"
          color="transparent"
          text-color="white"
          dark
          no-connectors
        />
      </q-item-section>
    </q-item>

    <q-separator dark />

    <q-item>
      <q-item-section avatar>
        <q-icon name="question_answer" />
      </q-item-section>

      <q-item-section>
        <q-tree
          :nodes="communication"
          v-model:expanded="expanded"
          node-key="label"
          color="transparent"
          text-color="white"
          dark
          no-connectors
        />
      </q-item-section>
    </q-item>

    <q-separator dark />

    <q-item>
      <q-item-section avatar>
        <q-icon name="fact_check" />
      </q-item-section>

      <q-item-section>
        <q-tree
          :nodes="annuaire"
          v-model:expanded="expanded"
          node-key="label"
          color="transparent"
          text-color="white"
          dark
          no-connectors
        />
      </q-item-section>
    </q-item>
  </q-list>
</template>

<script>
import { defineComponent, ref } from "vue";

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

  setup() {
    return {
      expanded: ref([null]),
      management: [
        {
          label: "Management",

          children: [
            {
              label: "Good food (with icon)",
              icon: "restaurant_menu",
              // children: [
              //   { label: "Quality ingredients" },
              //   { label: "Good recipe" },
              // ],
            },
            {
              label: "Good service (disabled node with icon)",
              icon: "room_service",
              // disabled: true,
              // children: [
              //   { label: "Prompt attention" },
              //   { label: "Professional waiter" },
              // ],
            },
            {
              label: "Pleasant surroundings (with icon)",
              icon: "photo",
              // children: [
              //   {
              //     label: "Happy atmosphere (with image)",
              //     img: "https://cdn.quasar.dev/img/logo_calendar_128px.png",
              //   },
              //   { label: "Good table presentation" },
              //   { label: "Pleasing decor" },
              // ],
            },
          ],
        },
      ],
      home: [
        {
          label: "Vue d'ensemble",
        },
      ],
      webmarketplace: [
        {
          label: "Webmarketplace",

          children: [
            {
              label: "Good food (with icon)",
              icon: "restaurant_menu",
              // children: [
              //   { label: "Quality ingredients" },
              //   { label: "Good recipe" },
              // ],
            },
            {
              label: "Good service (disabled node with icon)",
              icon: "room_service",
              // disabled: true,
              // children: [
              //   { label: "Prompt attention" },
              //   { label: "Professional waiter" },
              // ],
            },
            {
              label: "Pleasant surroundings (with icon)",
              icon: "photo",
              // children: [
              //   {
              //     label: "Happy atmosphere (with image)",
              //     img: "https://cdn.quasar.dev/img/logo_calendar_128px.png",
              //   },
              //   { label: "Good table presentation" },
              //   { label: "Pleasing decor" },
              // ],
            },
          ],
        },
      ],
      crm: [
        {
          label: "CRM",

          children: [
            {
              label: "Good food (with icon)",
              icon: "restaurant_menu",
              // children: [
              //   { label: "Quality ingredients" },
              //   { label: "Good recipe" },
              // ],
            },
            {
              label: "Good service (disabled node with icon)",
              icon: "room_service",
              // disabled: true,
              // children: [
              //   { label: "Prompt attention" },
              //   { label: "Professional waiter" },
              // ],
            },
            {
              label: "Pleasant surroundings (with icon)",
              icon: "photo",
              // children: [
              //   {
              //     label: "Happy atmosphere (with image)",
              //     img: "https://cdn.quasar.dev/img/logo_calendar_128px.png",
              //   },
              //   { label: "Good table presentation" },
              //   { label: "Pleasing decor" },
              // ],
            },
          ],
        },
      ],
      serviceClient: [
        {
          label: "Service client",

          children: [
            {
              label: "Good food (with icon)",
              icon: "restaurant_menu",
              // children: [
              //   { label: "Quality ingredients" },
              //   { label: "Good recipe" },
              // ],
            },
            {
              label: "Good service (disabled node with icon)",
              icon: "room_service",
              // disabled: true,
              // children: [
              //   { label: "Prompt attention" },
              //   { label: "Professional waiter" },
              // ],
            },
            {
              label: "Pleasant surroundings (with icon)",
              icon: "photo",
              // children: [
              //   {
              //     label: "Happy atmosphere (with image)",
              //     img: "https://cdn.quasar.dev/img/logo_calendar_128px.png",
              //   },
              //   { label: "Good table presentation" },
              //   { label: "Pleasing decor" },
              // ],
            },
          ],
        },
      ],
      achats: [
        {
          label: "Achats",

          children: [
            {
              label: "Good food (with icon)",
              icon: "restaurant_menu",
              // children: [
              //   { label: "Quality ingredients" },
              //   { label: "Good recipe" },
              // ],
            },
            {
              label: "Good service (disabled node with icon)",
              icon: "room_service",
              // disabled: true,
              // children: [
              //   { label: "Prompt attention" },
              //   { label: "Professional waiter" },
              // ],
            },
            {
              label: "Pleasant surroundings (with icon)",
              icon: "photo",
              // children: [
              //   {
              //     label: "Happy atmosphere (with image)",
              //     img: "https://cdn.quasar.dev/img/logo_calendar_128px.png",
              //   },
              //   { label: "Good table presentation" },
              //   { label: "Pleasing decor" },
              // ],
            },
          ],
        },
      ],
      productions: [
        {
          label: "Productions",

          children: [
            {
              label: "Good food (with icon)",
              icon: "restaurant_menu",
              // children: [
              //   { label: "Quality ingredients" },
              //   { label: "Good recipe" },
              // ],
            },
            {
              label: "Good service (disabled node with icon)",
              icon: "room_service",
              // disabled: true,
              // children: [
              //   { label: "Prompt attention" },
              //   { label: "Professional waiter" },
              // ],
            },
            {
              label: "Pleasant surroundings (with icon)",
              icon: "photo",
              // children: [
              //   {
              //     label: "Happy atmosphere (with image)",
              //     img: "https://cdn.quasar.dev/img/logo_calendar_128px.png",
              //   },
              //   { label: "Good table presentation" },
              //   { label: "Pleasing decor" },
              // ],
            },
          ],
        },
      ],
      logistique: [
        {
          label: "Logistique",

          children: [
            {
              label: "Good food (with icon)",
              icon: "restaurant_menu",
              // children: [
              //   { label: "Quality ingredients" },
              //   { label: "Good recipe" },
              // ],
            },
            {
              label: "Good service (disabled node with icon)",
              icon: "room_service",
              // disabled: true,
              // children: [
              //   { label: "Prompt attention" },
              //   { label: "Professional waiter" },
              // ],
            },
            {
              label: "Pleasant surroundings (with icon)",
              icon: "photo",
              // children: [
              //   {
              //     label: "Happy atmosphere (with image)",
              //     img: "https://cdn.quasar.dev/img/logo_calendar_128px.png",
              //   },
              //   { label: "Good table presentation" },
              //   { label: "Pleasing decor" },
              // ],
            },
          ],
        },
      ],
      comptabilite: [
        {
          label: "Comptabilité",

          children: [
            {
              label: "Good food (with icon)",
              icon: "restaurant_menu",
              // children: [
              //   { label: "Quality ingredients" },
              //   { label: "Good recipe" },
              // ],
            },
            {
              label: "Good service (disabled node with icon)",
              icon: "room_service",
              // disabled: true,
              // children: [
              //   { label: "Prompt attention" },
              //   { label: "Professional waiter" },
              // ],
            },
            {
              label: "Pleasant surroundings (with icon)",
              icon: "photo",
              // children: [
              //   {
              //     label: "Happy atmosphere (with image)",
              //     img: "https://cdn.quasar.dev/img/logo_calendar_128px.png",
              //   },
              //   { label: "Good table presentation" },
              //   { label: "Pleasing decor" },
              // ],
            },
          ],
        },
      ],
      sav: [
        {
          label: "SAV",

          children: [
            {
              label: "Good food (with icon)",
              icon: "restaurant_menu",
              // children: [
              //   { label: "Quality ingredients" },
              //   { label: "Good recipe" },
              // ],
            },
            {
              label: "Good service (disabled node with icon)",
              icon: "room_service",
              // disabled: true,
              // children: [
              //   { label: "Prompt attention" },
              //   { label: "Professional waiter" },
              // ],
            },
            {
              label: "Pleasant surroundings (with icon)",
              icon: "photo",
              // children: [
              //   {
              //     label: "Happy atmosphere (with image)",
              //     img: "https://cdn.quasar.dev/img/logo_calendar_128px.png",
              //   },
              //   { label: "Good table presentation" },
              //   { label: "Pleasing decor" },
              // ],
            },
          ],
        },
      ],
      marketing: [
        {
          label: "Marketing",

          children: [
            {
              label: "Good food (with icon)",
              icon: "restaurant_menu",
              // children: [
              //   { label: "Quality ingredients" },
              //   { label: "Good recipe" },
              // ],
            },
            {
              label: "Good service (disabled node with icon)",
              icon: "room_service",
              // disabled: true,
              // children: [
              //   { label: "Prompt attention" },
              //   { label: "Professional waiter" },
              // ],
            },
            {
              label: "Pleasant surroundings (with icon)",
              icon: "photo",
              // children: [
              //   {
              //     label: "Happy atmosphere (with image)",
              //     img: "https://cdn.quasar.dev/img/logo_calendar_128px.png",
              //   },
              //   { label: "Good table presentation" },
              //   { label: "Pleasing decor" },
              // ],
            },
          ],
        },
      ],
      rd: [
        {
          label: "R&D",

          children: [
            {
              label: "Good food (with icon)",
              icon: "restaurant_menu",
              // children: [
              //   { label: "Quality ingredients" },
              //   { label: "Good recipe" },
              // ],
            },
            {
              label: "Good service (disabled node with icon)",
              icon: "room_service",
              // disabled: true,
              // children: [
              //   { label: "Prompt attention" },
              //   { label: "Professional waiter" },
              // ],
            },
            {
              label: "Pleasant surroundings (with icon)",
              icon: "photo",
              // children: [
              //   {
              //     label: "Happy atmosphere (with image)",
              //     img: "https://cdn.quasar.dev/img/logo_calendar_128px.png",
              //   },
              //   { label: "Good table presentation" },
              //   { label: "Pleasing decor" },
              // ],
            },
          ],
        },
      ],
      communication: [
        {
          label: "Communication",

          children: [
            {
              label: "Good food (with icon)",
              icon: "restaurant_menu",
              // children: [
              //   { label: "Quality ingredients" },
              //   { label: "Good recipe" },
              // ],
            },
            {
              label: "Good service (disabled node with icon)",
              icon: "room_service",
              // disabled: true,
              // children: [
              //   { label: "Prompt attention" },
              //   { label: "Professional waiter" },
              // ],
            },
            {
              label: "Pleasant surroundings (with icon)",
              icon: "photo",
              // children: [
              //   {
              //     label: "Happy atmosphere (with image)",
              //     img: "https://cdn.quasar.dev/img/logo_calendar_128px.png",
              //   },
              //   { label: "Good table presentation" },
              //   { label: "Pleasing decor" },
              // ],
            },
          ],
        },
      ],
      annuaire: [
        {
          label: "Annuaire d’entreprise",

          children: [
            {
              label: "Good food (with icon)",
              icon: "restaurant_menu",
              // children: [
              //   { label: "Quality ingredients" },
              //   { label: "Good recipe" },
              // ],
            },
            {
              label: "Good service (disabled node with icon)",
              icon: "room_service",
              // disabled: true,
              // children: [
              //   { label: "Prompt attention" },
              //   { label: "Professional waiter" },
              // ],
            },
            {
              label: "Pleasant surroundings (with icon)",
              icon: "photo",
              // children: [
              //   {
              //     label: "Happy atmosphere (with image)",
              //     img: "https://cdn.quasar.dev/img/logo_calendar_128px.png",
              //   },
              //   { label: "Good table presentation" },
              //   { label: "Pleasing decor" },
              // ],
            },
          ],
        },
      ],
    };
  },
});
</script>
