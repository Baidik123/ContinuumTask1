import { defineComponent,ref} from "vue";
import{reactive} from "vue";

import { useTheme } from "vuetify";

export default defineComponent({
    name: "Nav-bar",
    setup(){
        const links=ref([
            {name:'Setup',path:'/'},
            {name:'Import',path:'/import'},
            {name:'Estimate',path:'/estimate'},
            {name:'3D Model',path:'/model3d'},
            {name:'Schedule',path:'/schedule'},
            {name:'Core Data',path:'/coredata'},
            {name:'Export',path:'/export'},
        ]);
        const userMenu=ref(false);
        const user=reactive({
            name:'BAIDIK',
            email:"user@gmail.com",
        });
        const theme = useTheme();
        const ToggleTheme=()=> {
          const current = theme.global.name.value; 
          theme.global.name.value = current === 'lightTheme' ? 'darkTheme' : 'lightTheme'; 
        };

        return {
            links,
            userMenu,
            user,
            ToggleTheme,
            
        };
    },
});