const path = require("path");
const fs = require("fs");
export default {
  server: {
    port: process.env.PORT || 3000, // default: 3000
    host: "127.0.0.1",
    https: {
      key: fs.readFileSync(path.resolve(__dirname, "dockers/ssl/server.key")),
      cert: fs.readFileSync(path.resolve(__dirname, "dockers/ssl/server.crt"))
    }
  },
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: "adop_coupon",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    "element-ui/lib/theme-chalk/index.css",
    "~/assets/style",
  ],

  styleResources: {
    scss: [
      __dirname + "/assets/utilities/*.scss",
      __dirname + "/assets/mixins/*.scss",
      __dirname + "/assets/vars/*.scss",
    ]
  },

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    "@/plugins/element-ui",
    "@/plugins/axios",
    "@/plugins/i18n",
    "@/plugins/liff"
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    '@nuxtjs/dotenv',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    "@nuxtjs/axios",
    "@nuxtjs/proxy",
    "@nuxtjs/style-resources"
  ],

  axios: {
    proxy: true
  },

  proxy: {
    "/api/": { target: "https://api.flower-monitor.com/", pathRewrite: { "^/api/": "" } },
  },

  serverMiddleware: [
    // { path: "/api", handler: "~/api/rest.js" },
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    transpile: [/^element-ui/],
  }
}
