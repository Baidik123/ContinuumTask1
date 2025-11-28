<template lang="pug">
.setup-view
  .viewer-container(:class="{'shrink': panelOpen}")
    ThreeDViewer(:panelOpen="panelOpen")
  .right-panel(v-if="panelOpen")
    RightPanel
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import ThreeDViewer from '@/components/ThreeDViewer/ThreeDviewer.vue'
import RightPanel from '@/components/RightPanel/RightPanel.vue'

const props = defineProps({
  panelOpen: Boolean,
})
</script>

<style scoped>
.setup-view {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
}
.viewer-container {
  flex: 1;
  overflow: hidden;
  transition: all 0.3s ease;
}

.right-panel {
  width: 300px;
  height: 100%;
}
</style>
