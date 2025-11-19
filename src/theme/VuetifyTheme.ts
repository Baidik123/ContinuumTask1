import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from "vuetify";
import { aliases,mdi } from "vuetify/iconsets/mdi";
import 'vuetify/styles';
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
// export default createVuetify({
//     components,
//     directives,
//     icons: {
//         defaultSet: 'mdi',
//         aliases,
//         sets: {
//             mdi,
//         },
//     },
//     theme: {
//         defaultTheme: 'customTheme',
//         themes: {
//             customTheme: {
//                 dark: false,
//                 colors: {
//                     primary:'#faf9f9ff',
//                     secondary: '#424242',
//                     accent: '#82B1FF',  
//                     background: '#f9f9f9',
//                 },
//             },
//         },
//     },        
// });
export default createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: { mdi },
  },
  theme: {
    defaultTheme: 'lightTheme',
    themes: {
      lightTheme: {
        dark: false,
        colors: {
          primary: '#faf9f9ff',
          secondary: '#424242',
          background: '#f9f9f9',
        },
      },
      darkTheme: {
        dark: true,
        colors: {
          primary: '#424242',
          secondary: '#faf9f9ff',
          background: '#444343ff',
        },
      },
    },
  },
});