<template lang="pug">
.setup-view
  ThreeDViewer
</template>
<script setup lang="ts">
import ThreeDViewer from "@/components/ThreeDViewer/ThreeDviewer.vue";
</script>
<style scoped>
.setup-view {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>