import { defineComponent, ref } from "vue";
import HeaderBar from './components/HeaderBar/HeaderBar.vue'
import Navbar from "./components/Navbar/Navbar.vue";
import SideBar from "./components/SideBar/SideBar.vue";
import RightPanel from "./components/RightPanel/RightPanel.vue";
export default defineComponent({
  // name: "App",
  components: {HeaderBar,Navbar,SideBar,RightPanel},
  setup() {
    const rightPanelRef=ref(null);
    const panelOpen=ref(false);
    const handleOpenRightPanel=()=>{
      if(rightPanelRef.value){
        rightPanelRef.value.openPanel();
      }
    };
    return { 
       rightPanelRef,
      handleOpenRightPanel,
      panelOpen,
    };
  }
});