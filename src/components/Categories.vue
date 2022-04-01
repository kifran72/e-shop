<template>
  <q-list dark>
    <q-item
      clickable
      v-ripple
      :active="$route.path === '/entreprise/dashboard'"
      @click="$router.push('/entreprise/dashboard')"
    >
      <q-item-section avatar>
        <q-icon name="home" />
      </q-item-section>

      <q-item-section style="padding-left: 1.8rem">
        Vue d'ensemble</q-item-section
      >
    </q-item>
    <div v-for="(categorie, index) in categories" :key="index">
      <q-separator dark />
      <q-item :active="$route.path.includes(categorie.link)">
        <q-item-section avatar>
          <q-icon :name="categorie[0].icon" />
        </q-item-section>

        <q-item-section>
          <q-tree
            default-expand-all
            :nodes="categorie"
            dark
            node-key="label"
            color="transparent"
          >
            <template v-slot:default-header="prop">
              <span
                :class="
                  $route.path.includes(prop.node.link)
                    ? 'text-primary'
                    : 'text-white'
                "
              >
                {{ prop.node.root }}
              </span>

              <div
                v-if="prop.node.label"
                v-ripple
                clickable
                :class="
                  $route.path === prop.node.link
                    ? 'text-primary full-width'
                    : 'text-white cursor-pointer full-width'
                "
                @click="$router.push(prop.node.link)"
              >
                {{ prop.node.label }}
              </div>
            </template>
          </q-tree>
        </q-item-section>
      </q-item>
    </div>
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

  setup() {
    return {
      expanded: ref([null]),
      selected: ref(""),

      home: [
        {
          label: "Vue d'ensemble",
        },
      ],

      categories: [
        [
          {
            root: "Management",
            icon: "groups",
            link: "/entreprise/management/",
            children: [
              {
                label: "Gestion des employés",
                link: "/entreprise/management/employes",
              },
              {
                label: "Formations",
                link: "/entreprise/management/formations",
              },
              {
                label: "Recrutements",
                link: "/entreprise/management/recrutements",
              },
            ],
          },
        ],
        [
          {
            disabled: true,
            root: "Webmarketplace",
            icon: "shopping_cart",
            link: "/entreprise/webmarketplace/",
            children: [
              {
                label: "Good food",
                icon: "restaurant_menu",
              },
              {
                label: "Good service",
                icon: "room_service",
              },
              {
                label: "Pleasant surroundings",
                icon: "photo",
              },
            ],
          },
        ],
        [
          {
            disabled: true,
            root: "CRM",
            icon: "description",
            link: "/entreprise/crm/",
            children: [
              {
                label: "Good food",
                icon: "restaurant_menu",
              },
              {
                label: "Good service",
                icon: "room_service",
              },
              {
                label: "Pleasant surroundings",
                icon: "photo",
              },
            ],
          },
        ],
        [
          {
            disabled: true,
            root: "Service client",
            icon: "supervised_user_circle",
            link: "/entreprise/serviceClient/",
            children: [
              {
                label: "Good food",
                icon: "restaurant_menu",
              },
              {
                label: "Good service",
                icon: "room_service",
                // disabled: true,
                // children: [
                //   { label: "Prompt attention" },
                //   { label: "Professional waiter" },
                // ],
              },
              {
                label: "Pleasant surroundings",
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
        [
          {
            disabled: true,
            root: "Achats",
            icon: "work_history",
            children: [
              {
                label: "Good food",
                icon: "restaurant_menu",
                // children: [
                //   { label: "Quality ingredients" },
                //   { label: "Good recipe" },
                // ],
              },
              {
                label: "Good service",
                icon: "room_service",
                // disabled: true,
                // children: [
                //   { label: "Prompt attention" },
                //   { label: "Professional waiter" },
                // ],
              },
              {
                label: "Pleasant surroundings",
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
        [
          {
            disabled: true,
            root: "Productions",
            icon: "timeline",
            children: [
              {
                label: "Good food",
                icon: "restaurant_menu",
                // children: [
                //   { label: "Quality ingredients" },
                //   { label: "Good recipe" },
                // ],
              },
              {
                label: "Good service",
                icon: "room_service",
                // disabled: true,
                // children: [
                //   { label: "Prompt attention" },
                //   { label: "Professional waiter" },
                // ],
              },
              {
                label: "Pleasant surroundings",
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

        [
          {
            disabled: true,
            root: "Logistique",
            icon: "widgets",
            children: [
              {
                label: "Good food",
                icon: "restaurant_menu",
                // children: [
                //   { label: "Quality ingredients" },
                //   { label: "Good recipe" },
                // ],
              },
              {
                label: "Good service",
                icon: "room_service",
                // disabled: true,
                // children: [
                //   { label: "Prompt attention" },
                //   { label: "Professional waiter" },
                // ],
              },
              {
                label: "Pleasant surroundings",
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
        [
          {
            disabled: true,
            root: "Comptabilité",
            icon: "contact_page",
            children: [
              {
                label: "Good food",
                icon: "restaurant_menu",
                // children: [
                //   { label: "Quality ingredients" },
                //   { label: "Good recipe" },
                // ],
              },
              {
                label: "Good service",
                icon: "room_service",
                // disabled: true,
                // children: [
                //   { label: "Prompt attention" },
                //   { label: "Professional waiter" },
                // ],
              },
              {
                label: "Pleasant surroundings",
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
        [
          {
            root: "SAV",
            icon: "support",
            disabled: true,
            children: [
              {
                label: "Good food",
                icon: "restaurant_menu",
                // children: [
                //   { label: "Quality ingredients" },
                //   { label: "Good recipe" },
                // ],
              },
              {
                label: "Good service",
                icon: "room_service",
                // disabled: true,
                // children: [
                //   { label: "Prompt attention" },
                //   { label: "Professional waiter" },
                // ],
              },
              {
                label: "Pleasant surroundings",
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
        [
          {
            disabled: true,
            root: "Marketing",
            icon: "storefront",
            children: [
              {
                label: "Good food",
                icon: "restaurant_menu",
                // children: [
                //   { label: "Quality ingredients" },
                //   { label: "Good recipe" },
                // ],
              },
              {
                label: "Good service",
                icon: "room_service",
                // disabled: true,
                // children: [
                //   { label: "Prompt attention" },
                //   { label: "Professional waiter" },
                // ],
              },
              {
                label: "Pleasant surroundings",
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
        [
          {
            disabled: true,
            root: "R&D",
            icon: "construction",
            children: [
              {
                label: "Good food",
                icon: "restaurant_menu",
                // children: [
                //   { label: "Quality ingredients" },
                //   { label: "Good recipe" },
                // ],
              },
              {
                label: "Good service",
                icon: "room_service",
                // disabled: true,
                // children: [
                //   { label: "Prompt attention" },
                //   { label: "Professional waiter" },
                // ],
              },
              {
                label: "Pleasant surroundings",
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
        [
          {
            disabled: true,
            root: "Communication",
            icon: "question_answer",
            children: [
              {
                label: "Good food",
                icon: "restaurant_menu",
              },
              {
                label: "Good service",
                icon: "room_service",
              },
              {
                label: "Pleasant surroundings",
                icon: "photo",
              },
            ],
          },
        ],
        [
          {
            disabled: true,
            root: "Annuaire d’entreprise",
            icon: "fact_check",
            children: [
              {
                label: "Good food",
                icon: "restaurant_menu",
              },
              {
                label: "Good service",
                icon: "room_service",
              },
              {
                label: "Pleasant surroundings",
                icon: "photo",
              },
            ],
          },
        ],
      ],
    };
  },
});
</script>
