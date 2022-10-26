<template>
  <a-modal
    title="添加设备"
    :visible="visible"
    @cancel="close"
    @ok="close"
  >
    <div class="flex justify-center h-276px">
      <a-spin :spinning="!dataURL">
        <img :src="dataURL">
      </a-spin>
    </div>
  </a-modal>
</template>

<script setup lang="ts">
import QRCode from 'qrcode'
import { useModalInner } from '../hooks/useModal';

const dataURL = ref('')

const { visible, close } = useModalInner(async() => {
  const es = new EventSource('/api/device/login')
  es.onopen = (ev) => {
    console.log(ev);
  }
  es.onmessage = async (ev) => {
    console.log(ev);
    dataURL.value = await QRCode.toDataURL(ev.data)
  }
  es.onerror = (ev) => {
    console.log(ev);
  }
  es.addEventListener('success', (ev) => {
    console.log(ev);
    es.close()
    close()
  })
})

</script>

<style scoped>

</style>