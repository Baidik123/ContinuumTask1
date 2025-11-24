import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from "vuetify";
import { aliases,mdi } from "vuetify/iconsets/mdi";
import 'vuetify/styles';
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

import '@fontsource/poppins/300.css' 
import '@fontsource/poppins/400.css' 
import '@fontsource/poppins/500.css'
import '@fontsource/poppins/600.css' 
import '@fontsource/poppins/700.css' 

export default createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: { mdi },
  },
  //apply font globally

  theme: {
    defaultTheme: 'lightTheme',
    themes: {
      lightTheme: {
        dark: false,
        colors: {
          primary: '#faf9f9ff',
          secondary: '#424242',
          background: '#faf7f7ff',
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
  // typography: {
  //   defaultFontFamily: 'Poppins,sans-serif',
  // },
  defaults: {
    global:{
      fontFamily: 'Poppins, sans-serif',
    }
  },  
  
});