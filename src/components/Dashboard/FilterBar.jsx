import { Button, Col, Input, Row, Select, Space } from 'antd'
import { SearchOutlined, FilterOutlined, RedoOutlined } from '@ant-design/icons'
import { mockFilterOptions } from '@/mock'

/**
 * FilterBar —— 筛选栏
 *
 * Props:
 *   onFilter {function} 筛选条件改变时的回调
 */
function FilterBar({ onFilter }) {
  const handleLocationChange = (value) => {
    onFilter?.({ location: value })
  }

  const handleStatusChange = (value) => {
    onFilter?.({ status: value })
  }

  const handleSearch = (e) => {
    onFilter?.({ search: e.target.value })
  }

  const handleReset = () => {
    onFilter?.({ location: '', status: '', search: '' })
  }

  return (
    <div style={{ marginBottom: 24, padding: '16px', background: '#fff', borderRadius: 8 }}>
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={12} md={6}>
          <Input
            placeholder="搜索设备名称"
            prefix={<SearchOutlined />}
            onChange={handleSearch}
            allowClear
          />
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Select
            placeholder="选择区域"
            options={mockFilterOptions.locations}
            onChange={handleLocationChange}
            allowClear
          />
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Select
            placeholder="选择状态"
            options={mockFilterOptions.statuses}
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
