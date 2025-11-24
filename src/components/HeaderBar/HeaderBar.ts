
import { defineComponent, ref, reactive } from "vue";
import { useTheme } from "vuetify";

export default defineComponent({
  name: "HeaderBar",
  emits: ["open-right-panel"],
  setup(props,{emit}) {
    const userMenu = ref(false);
    const user = reactive({
      name: "BAIDIK",
      email: "user@gmail.com",
    });
    const cloudDialog = ref(false)
    const theme = useTheme();
    const toggleTheme = () => {
      const current = theme.global.name.value;
      theme.global.name.value =current === "lightTheme" ? "darkTheme" : "lightTheme";
    };
    const shield=()=>{
      console.log("shield");
    }
    const openRightPanel=()=>{
      emit("open-right-panel");
    }
    return {
      userMenu,
      user,
      toggleTheme,
      shield,
      cloudDialog,
      openRightPanel,
    };
  },
});