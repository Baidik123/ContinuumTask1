import { defineComponent } from "vue";
import HeaderBar from './components/HeaderBar/HeaderBar.vue'
import Navbar from "./components/Navbar/Navbar.vue";
import SideBar from "./components/SideBar/SideBar.vue";
export default defineComponent({
  // name: "App",
  components: {HeaderBar,Navbar,SideBar},
});