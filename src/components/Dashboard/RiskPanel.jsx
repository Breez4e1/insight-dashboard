import { Alert, Card, Space, Tag } from 'antd'

function RiskPanel({ data }) {
  return (
    <Card title="RiskPanel" style={{ marginBottom: 16 }}>
      <Space direction="vertical" style={{ width: '100%' }}>
        {data.map((item) => (
          <Alert
            key={item.id}
            type={item.level === 'high' ? 'error' : item.level === 'medium' ? 'warning' : 'info'}
            showIcon
            message={<>{item.title} <Tag>{item.level}</Tag></>}
            description={item.desc}
          />
        ))}
      </Space>
    </Card>
  )
}

export default RiskPanel
