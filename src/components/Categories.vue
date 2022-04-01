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

    <q-separator dark />
    <q-item
      :active="
        $route.path === '/entreprise/management/employes' ||
        $route.path === '/entreprise/management/formations' ||
        $route.path === '/entreprise/management/recrutements'
      "
    >
      <q-item-section avatar>
        <q-icon name="groups" />
      </q-item-section>

      <q-item-section>
        <q-tree
          default-expand-all
          :nodes="management"
          dark
          node-key="label"
          color="transparent"
        >
          <template v-slot:default-header="prop">
            <span
              :class="
                $route.path === '/entreprise/management/employes' ||
                $route.path === '/entreprise/management/formations' ||
                $route.path === '/entreprise/management/recrutements'
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

    <q-separator dark />

    <q-item>
      <q-item-section avatar>
        <q-icon name="shopping_cart" />
      </q-item-section>

      <q-item-section>
        <q-tree
          :nodes="webmarketplace"
          dark
          node-key="label"
          color="transparent"
        >
          <template v-slot:default-header="prop">
            <span class="text-white">
              {{ prop.node.root }}
            </span>
            <div
              v-if="prop.node.label"
              clickable
              v-ripple
              class="text-white cursor-pointer"
            >
              {{ prop.node.label }}
            </div>
          </template>
        </q-tree>
      </q-item-section>
    </q-item>
    <!--
    <q-separator dark />
  
    <q-item>
      <q-item-section avatar>
        <q-icon name="description" />
      </q-item-section>

      <q-item-section>
        <q-tree :nodes="crm" dark node-key="label" color="transparent">
          <template v-slot:default-header="prop">
            <span class="text-white">
              {{ prop.node.root }}
            </span>
            <div
              v-if="prop.node.label"
              clickable
              v-ripple
              class="text-white cursor-pointer"
            >
              {{ prop.node.label }}
            </div>
          </template>
        </q-tree>
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
          dark
          node-key="label"
          color="transparent"
        >
          <template v-slot:default-header="prop">
            <span class="text-white">
              {{ prop.node.root }}
            </span>
            <div
              v-if="prop.node.label"
              clickable
              v-ripple
              class="text-white cursor-pointer"
            >
              {{ prop.node.label }}
            </div>
          </template>
        </q-tree>
      </q-item-section>
    </q-item>

    <q-separator dark />

    <q-item>
      <q-item-section avatar>
        <q-icon name="work_history" />
      </q-item-section>

      <q-item-section>
        <q-tree :nodes="achats" dark node-key="label" color="transparent">
          <template v-slot:default-header="prop">
            <span class="text-white">
              {{ prop.node.root }}
            </span>
            <div
              v-if="prop.node.label"
              clickable
              v-ripple
              class="text-white cursor-pointer"
            >
              {{ prop.node.label }}
            </div>
          </template>
        </q-tree></q-item-section
      >
    </q-item>

    <q-separator dark />

    <q-item>
      <q-item-section avatar>
        <q-icon name="timeline" />
      </q-item-section>

      <q-item-section
        ><q-tree :nodes="productions" dark node-key="label" color="transparent">
          <template v-slot:default-header="prop">
            <span class="text-white">
              {{ prop.node.root }}
            </span>
            <div
              v-if="prop.node.label"
              clickable
              v-ripple
              class="text-white cursor-pointer"
            >
              {{ prop.node.label }}
            </div>
          </template>
        </q-tree>
      </q-item-section>
    </q-item>

    <q-separator dark />

    <q-item>
      <q-item-section avatar>
        <q-icon name="widgets" />
      </q-item-section>

      <q-item-section>
        <q-tree :nodes="logistique" dark node-key="label" color="transparent">
          <template v-slot:default-header="prop">
            <span class="text-white">
              {{ prop.node.root }}
            </span>
            <div
              v-if="prop.node.label"
              clickable
              v-ripple
              class="text-white cursor-pointer"
            >
              {{ prop.node.label }}
            </div>
          </template>
        </q-tree>
      </q-item-section>
    </q-item>

    <q-separator dark />

    <q-item>
      <q-item-section avatar>
        <q-icon name="contact_page" />
      </q-item-section>

      <q-item-section>
        <q-tree :nodes="comptabilite" dark node-key="label" color="transparent">
          <template v-slot:default-header="prop">
            <span class="text-white">
              {{ prop.node.root }}
            </span>
            <div
              v-if="prop.node.label"
              clickable
              v-ripple
              class="text-white cursor-pointer"
            >
              {{ prop.node.label }}
            </div>
          </template>
        </q-tree>
      </q-item-section>
    </q-item>

    <q-separator dark />

    <q-item>
      <q-item-section avatar>
        <q-icon name="support" />
      </q-item-section>

      <q-item-section>
        <q-tree :nodes="sav" dark node-key="label" color="transparent">
          <template v-slot:default-header="prop">
            <span class="text-white">
              {{ prop.node.root }}
            </span>
            <div
              v-if="prop.node.label"
              clickable
              v-ripple
              class="text-white cursor-pointer"
            >
              {{ prop.node.label }}
            </div>
          </template>
        </q-tree>
      </q-item-section>
    </q-item>

    <q-separator dark />

    <q-item>
      <q-item-section avatar>
        <q-icon name="storefront" />
      </q-item-section>

      <q-item-section>
        <q-tree :nodes="marketing" dark node-key="label" color="transparent">
          <template v-slot:default-header="prop">
            <span class="text-white">
              {{ prop.node.root }}
            </span>
            <div
              v-if="prop.node.label"
              clickable
              v-ripple
              class="text-white cursor-pointer"
            >
              {{ prop.node.label }}
            </div>
          </template>
        </q-tree>
      </q-item-section>
    </q-item>

    <q-separator dark />

    <q-item>
      <q-item-section avatar>
        <q-icon name="construction" />
      </q-item-section>

      <q-item-section>
        <q-tree :nodes="rd" dark node-key="label" color="transparent">
          <template v-slot:default-header="prop">
            <span class="text-white">
              {{ prop.node.root }}
            </span>
            <div
              v-if="prop.node.label"
              clickable
              v-ripple
              class="text-white cursor-pointer"
            >
              {{ prop.node.label }}
            </div>
          </template>
        </q-tree>
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
          dark
          node-key="label"
          color="transparent"
        >
          <template v-slot:default-header="prop">
            <span class="text-white">
              {{ prop.node.root }}
            </span>
            <div
              v-if="prop.node.label"
              clickable
              v-ripple
              class="text-white cursor-pointer"
            >
              {{ prop.node.label }}
            </div>
          </template>
        </q-tree>
      </q-item-section>
    </q-item>

    <q-separator dark />

    <q-item>
      <q-item-section avatar>
        <q-icon name="fact_check" />
      </q-item-section>

      <q-item-section>
        <q-tree :nodes="annuaire" dark node-key="label" color="transparent">
          <template v-slot:default-header="prop">
            <span class="text-white">
              {{ prop.node.root }}
            </span>
            <div
              v-if="prop.node.label"
              clickable
              v-ripple
              class="text-white cursor-pointer"
            >
              {{ prop.node.label }}
            </div>
          </template>
        </q-tree>
      </q-item-section>
    </q-item> -->
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
      management: [
        {
          root: "Management",
          children: [
            {
              label: "Gestion des employés",
              link: "/entreprise/management/employes",
              children: [],
            },
            {
              label: "Formations",
              link: "/entreprise/management/formations",
              icon: "room_service",
            },
            {
              label: "Recrutements",
              link: "/entreprise/management/recrutements",
              icon: "photo",
            },
          ],
        },
      ],
      webmarketplace: [
        {
          root: "Webmarketplace",
          children: [
            {
              label: "Good food",
              icon: "restaurant_menu",
              selectable: true,
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
      crm: [
        {
          root: "CRM",

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
      serviceClient: [
        {
          root: "Service client",

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
      achats: [
        {
          root: "Achats",

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
      productions: [
        {
          root: "Productions",

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
      logistique: [
        {
          root: "Logistique",

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
      comptabilite: [
        {
          root: "Comptabilité",

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
      sav: [
        {
          root: "SAV",

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
      marketing: [
        {
          root: "Marketing",

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
      rd: [
        {
          root: "R&D",

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
      communication: [
        {
          root: "Communication",

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
      annuaire: [
        {
          root: "Annuaire d’entreprise",

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
      customize: [
        {
          label: "Satisfied customers",
          header: "root",
          children: [
            {
              label: "Good food",
              icon: "restaurant_menu",
              header: "generic",
              children: [
                {
                  label: "Quality ingredients",
                  header: "generic",
                  body: "story",
                  story: "Lorem ipsum dolor sit amet.",
                },
                {
                  label: "Good recipe",
                  body: "story",
                  story:
                    "A Congressman works with his equally conniving wife to exact revenge on the people who betrayed him.",
                },
              ],
            },
            {
              label: "Good service",
              header: "generic",
              body: "toggle",
              caption:
                "Why are we as consumers so captivated by stories of great customer service? Perhaps it is because...",
              enabled: false,
              children: [
                { label: "Prompt attention" },
                { label: "Professional waiter" },
              ],
            },
            {
              label: "Pleasant surroundings",
              children: [
                { label: "Happy atmosphere" },
                { label: "Good table presentation", header: "generic" },
                { label: "Pleasing decor" },
              ],
            },
          ],
        },
      ],
    };
  },
});
</script>
