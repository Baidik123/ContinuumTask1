import { defineComponent,ref } from "vue";
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
        return {links};
    }
});