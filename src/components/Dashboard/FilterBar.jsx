import { Button, Col, Input, Row, Select, Space } from 'antd'
import { SearchOutlined, FilterOutlined, RedoOutlined } from '@ant-design/icons'
import useDashboardStore from '@/store/dashboard'
import { mockFilterOptions } from '@/mock'

/**
 * FilterBar —— 筛选栏
 *
 * 使用 Zustand store 管理筛选条件
 */
function FilterBar() {
  const filters = useDashboardStore((state) => state.filters)
  const setFilters = useDashboardStore((state) => state.setFilters)
  const clearFilters = useDashboardStore((state) => state.clearFilters)

  const handleSearchChange = (e) => {
    setFilters({ searchText: e.target.value })
  }

  const handleStatusChange = (value) => {
    setFilters({ statusFilter: value })
  }

  const handleReset = () => {
    clearFilters()
  }

  return (
    <div style={{ marginBottom: 24, padding: '16px', background: '#fff', borderRadius: 8 }}>
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={12} md={6}>
          <Input
            placeholder="搜索设备名称或 IP"
            prefix={<SearchOutlined />}
            value={filters.searchText}
            onChange={handleSearchChange}
            allowClear
          />
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Select
            placeholder="选择状态"
            options={mockFilterOptions.statuses}
            value={filters.statusFilter || undefined}
            onChange={handleStatusChange}
            allowClear
          />
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Space>
            <Button icon={<FilterOutlined />}>高级筛选</Button>
            <Button icon={<RedoOutlined />} onClick={handleReset}>重置</Button>
          </Space>
        </Col>
      </Row>
    </div>
  )
}

export default FilterBar
