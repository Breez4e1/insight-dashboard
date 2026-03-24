import { Card, Table, Tag, Typography } from 'antd'

const { Text } = Typography

const statusMap = {
  normal: { color: 'success', text: '正常' },
  warning: { color: 'warning', text: '告警' },
  error: { color: 'error', text: '异常' },
}

const columns = [
  { title: '设备', dataIndex: 'device', key: 'device' },
  { title: '区域', dataIndex: 'location', key: 'location' },
  {
    title: '状态',
    dataIndex: 'status',
    key: 'status',
    render: (status) => <Tag color={statusMap[status].color}>{statusMap[status].text}</Tag>,
  },
  { title: '检查时间', dataIndex: 'time', key: 'time' },
]

function InspectionResultPanel({ results }) {
  return (
    <Card
      title="Result Panel"
      extra={<Text type="secondary">共 {results.length} 条记录</Text>}
    >
      <Table
        rowKey="id"
        dataSource={results}
        columns={columns}
        pagination={{ pageSize: 6, showSizeChanger: false }}
      />
    </Card>
  )
}

export default InspectionResultPanel