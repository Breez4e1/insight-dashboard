import { Card, Progress, Space, Statistic, Tag } from 'antd'

function HealthScoreSection({ data }) {
  return (
    <Card title="Health Score Section">
      <Space size={24} align="center">
        <Progress type="dashboard" percent={data.score} size={150} />
        <Space direction="vertical" size={4}>
          <Statistic title="综合健康分" value={data.score} suffix="/ 100" />
          <Tag color="green">当前等级: {data.level}</Tag>
          <Statistic title="较上周变化" value={data.trend} suffix="分" valueStyle={{ color: '#3f8600' }} />
        </Space>
      </Space>
    </Card>
  )
}

export default HealthScoreSection