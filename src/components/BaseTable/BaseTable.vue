<template>
  <a-table
    v-bind="$attrs"
    :data-source="dataSource"
  >
    <template
      v-for="(_, slotName) in $slots"
      #[slotName]="slotData"
    >
      <slot
        :name="slotName"
        v-bind="slotData"
      />
    </template>
  </a-table>
</template>

<script setup lang="ts">
import config from './config'

const http = config.http

const props = withDefaults(defineProps<{
    data: string,
    page?: number,
    size?: number,
}>(), { page: 1, size: 10 })

const dataSource = ref([])

onMounted(async () => {
  const res = await http.request({
    url: props.data,
    params: {
      page: props.page,
      size: props.size,
    },
  })

  console.log(res.data)
  dataSource.value = res.data
})

</script>

<style scoped>

</style>