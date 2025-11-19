import { defineComponent } from "vue";
export default defineComponent({
    name: "HeaderBar",
    methods: {
    toggleTheme() {
      const current = this.$vuetify.theme.global.name; 
      this.$vuetify.theme.global.name = current === 'lightTheme' ? 'darkTheme' : 'lightTheme'; 
    },
  },
});