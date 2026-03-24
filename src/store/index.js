import { create } from 'zustand'

/**
 * 全局状态 Store（Zustand）
 *
 * 用法示例：
 *   import useAppStore from '@/store'
 *   const { user, setUser } = useAppStore()
 */
const useAppStore = create((set) => ({
  // 当前登录用户（Mock）
  user: { name: 'Jordi', role: 'admin' },
  setUser: (user) => set({ user }),

  // 全局 loading 状态
  loading: false,
  setLoading: (loading) => set({ loading }),

  // 侧边栏折叠状态
  sidebarCollapsed: false,
  toggleSidebar: () => set((state) => ({ sidebarCollapsed: !state.sidebarCollapsed })),
}))

export default useAppStore
