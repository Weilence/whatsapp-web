<template>
  <ConfigProvider>
    <router-view />
  </ConfigProvider>
</template>

<script setup lang="ts">
import { ConfigProvider } from 'ant-design-vue';
import { useUserTheme } from './hooks/useTheme';

useUserTheme();
</script>
