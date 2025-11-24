import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'Right-Panel',
  setup() {
    const isOpen = ref(false)
    const openPanel = () => {
      isOpen.value = true
    }

    return {
      isOpen,
      openPanel,
    }
  },
})
