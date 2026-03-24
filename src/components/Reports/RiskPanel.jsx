import { Alert, Card, Space, Tag } from 'antd'

const levelMap = {
  high: { color: 'red', text: '高风险', type: 'error' },
  medium: { color: 'orange', text: '中风险', type: 'warning' },
  low: { color: 'blue', text: '低风险', type: 'info' },
}

function RiskPanel({ risks }) {
  return (
    <Card title="Risk Panel">
      <Space direction="vertical" style={{ width: '100%' }}>
        {risks.map((risk) => (
          <Alert
            key={risk.id}
            type={levelMap[risk.level].type}
            showIcon
            message={
              <span>
                {risk.title} <Tag color={levelMap[risk.level].color}>{levelMap[risk.level].text}</Tag>
              </span>
            }
            description={risk.desc}
          />
        ))}
      </Space>
    </Card>
  )
}

export default RiskPanel