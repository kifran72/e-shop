const routes = [
  {
    path: "/",
    component: () => import("src/layouts/default.vue"),
    children: [{ path: "", component: () => import("pages/Index.vue") }],
  },
  {
    path: "/entreprise",
    component: () => import("src/layouts/default.vue"),
    children: [
      {
        path: "dashboard",
        component: () => import("src/pages/Backoffice/Dashboard.vue"),
      },
      {
        path: "management/employes",
        component: () => import("src/pages/Backoffice/Management/Employes.vue"),
      },
      {
        path: "management/formations",
        component: () =>
          import("src/pages/Backoffice/Management/Formations.vue"),
      },
      {
        path: "management/recrutements",
        component: () =>
          import("src/pages/Backoffice/Management/Recrutements.vue"),
      },
    ],
  },
  {
    path: "/produits",
    component: () => import("src/layouts/boutique.vue"),
    children: [
      { path: "", component: () => import("pages/Index.vue") },
      { path: ":category", component: () => import("pages/Articles.vue") },
      {
        path: "/:category/:type/:origin/:article",
        component: () => import("pages/Article.vue"),
      },
    ],
  },
];

export default routes;
