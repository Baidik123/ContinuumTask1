
import { defineComponent, ref, reactive } from "vue";
import { useTheme } from "vuetify";

export default defineComponent({
  name: "HeaderBar",
  setup() {
    const userMenu = ref(false);
    const user = reactive({
      name: "BAIDIK",
      email: "user@gmail.com",
    });

    const theme = useTheme();
    const toggleTheme = () => {
      const current = theme.global.name.value;
      theme.global.name.value =current === "lightTheme" ? "darkTheme" : "lightTheme";
    };

    return {
      userMenu,
      user,
      toggleTheme,
    };
  },
});