import { Card, Table } from 'antd'
import StatusBadge from '@/components/Dashboard/StatusBadge'

const columns = [
  { title: 'Server Name', dataIndex: 'serverName', key: 'serverName' },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    render: (status) => <StatusBadge status={status} />,
  },
  { title: 'Summary', dataIndex: 'summary', key: 'summary' },
  { title: 'Last Check', dataIndex: 'time', key: 'time' },
]

function InspectionResult({ data }) {
  return (
    <Card title="InspectionResult">
      <Table rowKey="id" dataSource={data} columns={columns} pagination={{ pageSize: 6 }} />
    </Card>
  )
}

export default InspectionResult
