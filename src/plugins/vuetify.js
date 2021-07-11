import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);
// https://vuetifyjs.com/en/styles/spacing/#how-it-works
// https://vuetifyjs.com/en/styles/colors/#sass-color-pack
export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: colors.teal.lighten2, //
                secondary: colors.teal.darken2, // #FFCDD2
                accent: colors.teal.accent2, // #3F51B5
            },
        },
    },
});
