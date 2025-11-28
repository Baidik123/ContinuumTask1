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
    watch(
      () => isOpen.value,
      (val)=>emit("panelToggled",val)
    );
    return {
      isOpen,
      openPanel,
      closePanel,
    }
  },
})
