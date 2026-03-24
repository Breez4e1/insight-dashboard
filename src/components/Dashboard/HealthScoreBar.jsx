import { Card, Progress, Space, Statistic } from 'antd'

function HealthScoreBar({ data }) {
  return (
    <Card title="HealthScoreBar">
      <Space align="center" size={20}>
        <Progress type="dashboard" percent={data.score} />
        <Statistic title="Trend" value={data.trend} />
        <Statistic title="Level" value={data.level} />
      </Space>
    </Card>
  )
}

export default HealthScoreBar
