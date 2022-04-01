const routes = [
  {
    path: "/",
    component: () => import("src/layouts/default.vue"),
    children: [{ path: "", component: () => import("pages/Index.vue") }],
  },
  {
    path: "/produits",
    component: () => import("src/layouts/boutique.vue"),
    children: [
      { path: "", component: () => import("pages/Articles.vue") },
      { path: ":category", component: () => import("pages/Articles.vue") },
      {
        path: "/:category/:type/:origin/:article",
        component: () => import("pages/Article.vue"),
      },
    ],
  },
];

export default routes;
