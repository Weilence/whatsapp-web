import { createVNode, render, type Component } from 'vue';

const container = document.createDocumentFragment()
const dataTrasfer = reactive({})

export const useModal = (c: Component) => {
  const vm = createVNode(c)
  render(vm, container as any)

  if (!vm.component) {
    throw new Error('useModal error');
  }
  
  const uid = vm.component.uid
  
  return {
    open: (data: any = null) => {
      if (data?.target) {
        console.warn('modal open with event object')
      }

      dataTrasfer[uid] = data
    },
    close: () => {      
      delete dataTrasfer[uid]
    }
  }
}

export const useModalInner = (callback: any = null) => {
  const currentInstance = getCurrentInstance()
  if (!currentInstance) {
    throw new Error('useModalInner error');
  }

  const uid = currentInstance.uid
  const visible = computed(() => dataTrasfer[uid] !== undefined)

  if (callback) {
    watch(() => dataTrasfer[uid], (value) => {
      if (value === undefined) {
        return
      }
      callback(value)
    })
  }

  return {
    visible,
    close: () => {
      delete dataTrasfer[uid]
    }
  }
}