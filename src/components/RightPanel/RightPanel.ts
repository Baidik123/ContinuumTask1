import { defineComponent, ref, watch} from 'vue'
export default defineComponent({
  name: 'Right-Panel',
  emits: ['panelToggled'],
  setup(props,{emit}) {
    const isOpen = ref(false)
    const openPanel = () => {
      isOpen.value = true
    }
    const closePanel = () => {
      isOpen.value = false
    }
    const dialog=ref(false);  
    const headers=[
      {title:'ID', value:'id'},
      {title:'Name', value:'name'},
      {title:'Progress', value:'progress'},
    ]
    const items=ref([
      {id:1,name:'Tumwater',progress:'50%'},
      {id:2,name:'Siena',progress:'70%'},
      {id:3,name:'Cold Harbor',progress:'90%'},
      {id:4,name:'Cairns',progress:'30%'},
      {id:5,name:'Allentown',progress:'60%'},
      {id:6,name:'Franklin',progress:'80%'},
      {id:7,name:'Georgetown',progress:'40%'},
    ]);
    
    watch(
      () => isOpen.value,
      (val)=>emit("panelToggled",val)
    );
    return {
      isOpen,
      openPanel,
      closePanel,
      dialog,
      headers,
      items,
     
    }
  },
})
