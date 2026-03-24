import { create } from 'zustand'
import { mockServers } from '@/mock'

/**
 * useDashboardStore —— Dashboard 专用状态管理（Zustand）
 *
 * 管理以下状态：
 * - servers: 所有服务器列表
 * - selectedRowKeys: 表格多选的行 ID
 * - filters: 当前筛选条件（searchText、statusFilter）
 */
const useDashboardStore = create((set, get) => ({
  // ─────────────────────────────────────────────────
  // 数据状态
  // ─────────────────────────────────────────────────
  servers: mockServers,

  // ─────────────────────────────────────────────────
  // 选择状态
  // ─────────────────────────────────────────────────
  selectedRowKeys: [],

  // ─────────────────────────────────────────────────
  // 筛选条件
  // ─────────────────────────────────────────────────
  filters: {
    searchText: '',    // 关键词搜索（设备名称或 IP）
    statusFilter: '',  // 状态筛选（online / warning / offline）
  },

  // ─────────────────────────────────────────────────
  // Actions —— 修改状态的方法
  // ─────────────────────────────────────────────────

  /**
   * 设置选中的行
   */
  setSelectedRowKeys: (keys) => set({ selectedRowKeys: keys }),

  /**
   * 更新筛选条件
   */
  setFilters: (newFilters) =>
    set((state) => ({
      filters: { ...state.filters, ...newFilters },
    })),

  /**
   * 清空筛选条件
   */
  clearFilters: () =>
    set({
      filters: { searchText: '', statusFilter: '' },
    }),

  /**
   * 清空选择
   */
  clearSelectedRowKeys: () => set({ selectedRowKeys: [] }),

  /**
   * 获取筛选后的服务器列表
   * ─ 根据 searchText 和 statusFilter 过滤
   */
  getFilteredServers: () => {
    const { servers, filters } = get()
    return servers.filter((server) => {
      // 按关键词过滤：设备名称或 IP
      const matchSearch =
        !filters.searchText ||
        server.name.toLowerCase().includes(filters.searchText.toLowerCase()) ||
        server.ip.includes(filters.searchText)

      // 按状态过滤
      const matchStatus = !filters.statusFilter || server.status === filters.statusFilter

      return matchSearch && matchStatus
    })
  },

  /**
   * 获取已选中的服务器列表
   */
  getSelectedServers: () => {
    const { servers, selectedRowKeys } = get()
    return servers.filter((server) => selectedRowKeys.includes(server.id))
  },

  /**
   * 模拟批量操作（删除）
   */
  deleteServers: (serverIds) => {
    set((state) => ({
      servers: state.servers.filter((s) => !serverIds.includes(s.id)),
      selectedRowKeys: [], // 删除后清空选择
    }))
  },
}))

export default useDashboardStore
