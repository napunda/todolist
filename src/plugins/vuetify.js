import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#663399",
        secondary: "#997642",
        accent: "#720D5D",
        error: "#F57C00",
      },
    },
  },
});
