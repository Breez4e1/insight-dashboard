import { useState } from 'react'
import { Badge, Card, Progress, Space, Table, Tag } from 'antd'
import { mockServers } from '@/mock'

const statusMap = {
  online:  { color: 'success', text: '在线'   },
  warning: { color: 'warning', text: '告警'   },
  offline: { color: 'error',   text: '离线'   },
}

const columns = [
  {
    title: '设备名称',
    dataIndex: 'name',
    key: 'name',
    render: (text, record) => (
      <Space>
        <Badge
          status={statusMap[record.status].color}
          text={text}
        />
      </Space>
    ),
  },
  {
    title: 'IP 地址',
    dataIndex: 'ip',
    key: 'ip',
  },
  {
    title: '状态',
    dataIndex: 'status',
    key: 'status',
    render: (status) => (
      <Tag color={statusMap[status].color}>{statusMap[status].text}</Tag>
    ),
  },
  {
    title: 'CPU',
    dataIndex: 'cpu',
    key: 'cpu',
    render: (value) => (
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <Progress
          type="circle"
          percent={value}
          width={40}
          strokeColor={value > 80 ? '#ff4d4f' : '#1f6feb'}
        />
        <span>{value}%</span>
      </div>
    ),
  },
  {
    title: '内存',
    dataIndex: 'memory',
    key: 'memory',
    render: (value) => (
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <Progress
          type="circle"
          percent={value}
          width={40}
          strokeColor={value > 80 ? '#ff4d4f' : '#52c41a'}
        />
        <span>{value}%</span>
      </div>
    ),
  },
  {
    title: '磁盘',
    dataIndex: 'disk',
    key: 'disk',
    render: (value) => (
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <Progress
          type="circle"
          percent={value}
          width={40}
          strokeColor={value > 80 ? '#ff4d4f' : '#faad14'}
        />
        <span>{value}%</span>
      </div>
    ),
  },
  {
    title: '健康度',
    dataIndex: 'health',
    key: 'health',
    render: (value) => (
      <Tag color={value >= 80 ? 'green' : value >= 60 ? 'orange' : 'red'}>
        {value}%
      </Tag>
    ),
  },
]

/**
 * ServerTable —— 服务器/设备表格
 *
 * Props:
 *   onSelectChange {function} 选中项数改变时的回调
 *
 * 展示所有设备的实时状态和资源占用
 */
function ServerTable({ onSelectChange }) {
  const [selectedRowKeys, setSelectedRowKeys] = useState([])

  const handleSelectChange = (newSelectedRowKeys) => {
    setSelectedRowKeys(newSelectedRowKeys)
    onSelectChange?.(newSelectedRowKeys.length)
  }

  const rowSelection = {
    selectedRowKeys,
    onChange: handleSelectChange,
  }

  return (
    <Card title="设备列表">
      <Table
        dataSource={mockServers}
        columns={columns}
        rowKey="id"
        rowSelection={rowSelection}
        pagination={{ pageSize: 10, showTotal: (total) => `共 ${total} 个设备` }}
        scroll={{ x: 1200 }}
      />
    </Card>
  )
}

export default ServerTable

