import { Badge, Card, Table, Tag, Typography } from 'antd'

const { Title } = Typography

// Mock 数据：巡检记录
const mockData = [
  { key: '1', device: 'PLC-A01', location: '车间一', status: 'normal',  time: '2026-03-23 08:10' },
  { key: '2', device: 'PLC-A02', location: '车间一', status: 'warning', time: '2026-03-23 08:32' },
  { key: '3', device: 'PLC-B01', location: '车间二', status: 'error',   time: '2026-03-23 09:05' },
  { key: '4', device: 'PLC-B02', location: '车间二', status: 'normal',  time: '2026-03-23 09:20' },
  { key: '5', device: 'PLC-C01', location: '车间三', status: 'normal',  time: '2026-03-23 10:01' },
]

const statusMap = {
  normal:  { color: 'success', text: '正常' },
  warning: { color: 'warning', text: '告警' },
  error:   { color: 'error',   text: '异常' },
}

const columns = [
  { title: '设备编号', dataIndex: 'device',   key: 'device' },
  { title: '所在区域', dataIndex: 'location', key: 'location' },
  {
    title: '状态',
    dataIndex: 'status',
    key: 'status',
    render: (status) => (
      <Tag color={statusMap[status].color}>{statusMap[status].text}</Tag>
    ),
  },
  { title: '巡检时间', dataIndex: 'time', key: 'time' },
]

function Inspection() {
  return (
    <div>
      <Title level={3} style={{ marginBottom: 24 }}>巡检管理</Title>
      <Card>
        <Table
          dataSource={mockData}
          columns={columns}
          pagination={{ pageSize: 10 }}
        />
      </Card>
    </div>
  )
}

export default Inspection
