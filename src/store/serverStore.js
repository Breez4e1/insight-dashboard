import { create } from 'zustand'
import { mockServers } from '@/mock'

const defaultFilters = {
  region: '',
  cinema: '',
  screen: '',
  status: '',
  search: '',
}

const useServerStore = create((set) => ({
  servers: mockServers,
  selected: [],
  filters: defaultFilters,

  setServers: (servers) => set({ servers }),
  setSelected: (selected) => set({ selected }),
  setFilters: (patch) => set((state) => ({ filters: { ...state.filters, ...patch } })),
  clearFilters: () => set({ filters: defaultFilters }),
}))

export default useServerStore
