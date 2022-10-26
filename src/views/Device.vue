<template>
  <a-card>
    <a-button
      type="primary"
      @click="open"
    >
      添加设备
    </a-button>
    <BaseTable
      :data="'/device'"
      :columns="columns"
    >
      <template #bodyCell="{ text, column }">
        <a-tag
          v-if="column.dataIndex === 'online'"
          :color="text ? 'green' : 'red'"
        >
          {{ text ? '在线' : '离线' }}
        </a-tag>
      </template>
    </BaseTable>
  </a-card>
</template>

<script lang="ts" setup>
import BaseTable from '@/components/BaseTable/BaseTable.vue';
import type { ColumnType } from 'ant-design-vue/es/table/interface';
import DeviceAddModal from './DeviceAddModal.vue';
import { useModal } from '../hooks/useModal';

const columns = [
  { title: '名称', dataIndex: 'pushName' },
  { title: 'JID', dataIndex: 'jid' },
  { title: '平台', dataIndex: 'platform' },
  { title: '状态', dataIndex: 'online' },
] as ColumnType[]

const { open } = useModal(DeviceAddModal)

</script>
