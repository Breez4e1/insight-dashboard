import { useState } from 'react'
import { Typography } from 'antd'
import FilterBar from '@/components/Dashboard/FilterBar'
import StatCards from '@/components/Dashboard/StatCards'
import HealthChart from '@/components/Dashboard/HealthChart'
import AlertPanel from '@/components/Dashboard/AlertPanel'
import TrendChart from '@/components/Dashboard/TrendChart'
import ServerTable from '@/components/Dashboard/ServerTable'
import BulkActionBar from '@/components/Dashboard/BulkActionBar'

const { Title } = Typography

/**
 * Dashboard 页面 —— 仪表盘
 *
 * 布局：
 * 1. 筛选栏（FilterBar）
 * 2. 统计卡片（StatCards）
 * 3. 健康图表（HealthChart）+ 告警面板（AlertPanel）
 * 4. 趋势图（TrendChart）
 * 5. 设备表格（ServerTable）+ 批量操作栏（BulkActionBar）
 */
function Dashboard() {
  const [selectedCount, setSelectedCount] = useState(0)
  const [filters, setFilters] = useState({})

  const handleFilterChange = (newFilters) => {
    setFilters((prev) => ({ ...prev, ...newFilters }))
  }

  const handleSelectChange = (count) => {
    setSelectedCount(count)
  }

  const handleClearSelect = () => {
    setSelectedCount(0)
  }

  return (
    <div style={{ paddingBottom: 60 }}>
      <Title level={3} style={{ marginBottom: 24 }}>仪表盘</Title>

      {/* 筛选栏 */}
      <FilterBar onFilter={handleFilterChange} />

      {/* 统计卡片 */}
      <StatCards />

      {/* 两列布局：左健康图表，右告警面板 */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginBottom: 24 }}>
        <HealthChart />
        <AlertPanel />
      </div>

      {/* 响应式调整：小屏时堆叠 */}
      <style>{`
        @media (max-width: 1024px) {
          div[style*="grid-template-columns: 1fr 1fr"] {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      {/* 趋势图 */}
      <TrendChart />

      {/* 设备列表 */}
      <ServerTable onSelectChange={handleSelectChange} />

      {/* 批量操作栏 */}
      <BulkActionBar selectedCount={selectedCount} onClearSelect={handleClearSelect} />
    </div>
  )
}

export default Dashboard

