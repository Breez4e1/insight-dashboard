import { Button, Card, Space, Table, Tag, Typography } from 'antd'
import { DownloadOutlined, EyeOutlined } from '@ant-design/icons'

const { Title } = Typography

// Mock 数据：报告列表
const mockReports = [
  { key: 'r001', name: '周检测报告 2026-03-17', type: 'weekly',  status: 'done',    size: '2.3 MB', date: '2026-03-17' },
  { key: 'r002', name: '日检测报告 2026-03-22', type: 'daily',   status: 'done',    size: '0.8 MB', date: '2026-03-22' },
  { key: 'r003', name: '日检测报告 2026-03-23', type: 'daily',   status: 'pending', size: '-',      date: '2026-03-23' },
  { key: 'r004', name: '月度诊断报告 2026-02',  type: 'monthly', status: 'done',    size: '6.1 MB', date: '2026-02-28' },
]

const typeMap   = { daily: '日报', weekly: '周报', monthly: '月报' }
const statusMap = { done: 'success', pending: 'processing' }

const columns = [
  { title: '报告名称', dataIndex: 'name', key: 'name' },
  {
    title: '类型',
    dataIndex: 'type',
    key: 'type',
    render: (t) => <Tag>{typeMap[t]}</Tag>,
  },
  { title: '大小', dataIndex: 'size', key: 'size' },
  { title: '生成日期', dataIndex: 'date', key: 'date' },
  {
    title: '状态',
    dataIndex: 'status',
    key: 'status',
    render: (s) => (
      <Tag color={statusMap[s]}>
        {s === 'done' ? '已生成' : '生成中'}
      </Tag>
    ),
  },
  {
    title: '操作',
    key: 'action',
    render: (_, record) => (
      <Space>
        <Button size="small" icon={<EyeOutlined />} disabled={record.status !== 'done'}>
          预览
        </Button>
        <Button size="small" icon={<DownloadOutlined />} disabled={record.status !== 'done'}>
          下载
        </Button>
      </Space>
    ),
  },
]

function Reports() {
  return (
    <div>
      <Title level={3} style={{ marginBottom: 24 }}>报告中心</Title>
      <Card>
        <Table
          dataSource={mockReports}
          columns={columns}
          pagination={{ pageSize: 10 }}
        />
      </Card>
    </div>
  )
}

export default Reports
