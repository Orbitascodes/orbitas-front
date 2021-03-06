import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import colors from '../config/colors/colors';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        ...colors,
      },
    },
  },
});
