import { Col, Input, Row, Select } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import useServerStore from '@/store/serverStore'
import { mockFilterOptions } from '@/mock'

function FilterBar() {
  const filters = useServerStore((state) => state.filters)
  const setFilters = useServerStore((state) => state.setFilters)

  return (
    <Row gutter={[12, 12]} style={{ marginBottom: 16 }}>
      <Col xs={24} sm={12} md={4}>
        <Select
          value={filters.region || undefined}
          placeholder="Region"
          options={mockFilterOptions.regions}
          onChange={(value) => setFilters({ region: value || '' })}
          allowClear
        />
      </Col>
      <Col xs={24} sm={12} md={4}>
        <Select
          value={filters.cinema || undefined}
          placeholder="Cinema"
          options={mockFilterOptions.cinemas}
          onChange={(value) => setFilters({ cinema: value || '' })}
          allowClear
        />
      </Col>
      <Col xs={24} sm={12} md={4}>
        <Select
          value={filters.screen || undefined}
          placeholder="Screen"
          options={mockFilterOptions.screens}
          onChange={(value) => setFilters({ screen: value || '' })}
          allowClear
        />
      </Col>
      <Col xs={24} sm={12} md={4}>
        <Select
          value={filters.status || undefined}
          placeholder="Status"
          options={mockFilterOptions.statuses}
          onChange={(value) => setFilters({ status: value || '' })}
          allowClear
        />
      </Col>
      <Col xs={24} sm={24} md={8}>
        <Input
          value={filters.search}
          placeholder="Search"
          prefix={<SearchOutlined />}
          onChange={(e) => setFilters({ search: e.target.value })}
          allowClear
        />
      </Col>
    </Row>
  )
}

export default FilterBar
