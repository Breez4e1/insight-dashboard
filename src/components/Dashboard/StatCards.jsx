import { Card, Col, Row, Statistic } from 'antd'
import useServerStore from '@/store/serverStore'

/**
 * StatCards —— 统计卡片行
 *
 * 展示 4 个关键指标：Total Servers、Healthy、Warning、Critical
 */
function StatCards() {
  const servers = useServerStore((state) => state.servers)

  const total = servers.length
  const healthy = servers.filter((item) => item.status === 'healthy').length
  const warning = servers.filter((item) => item.status === 'warning').length
  const critical = servers.filter((item) => item.status === 'critical').length

  const items = [
    { label: 'Total Servers', value: total },
    { label: 'Healthy', value: healthy },
    { label: 'Warning', value: warning },
    { label: 'Critical', value: critical },
  ]

  return (
    <Row gutter={[16, 16]} style={{ marginBottom: 24 }}>
      {items.map((item) => (
        <Col key={item.label} xs={24} sm={12} lg={6}>
          <Card>
            <Statistic
              title={item.label}
              value={item.value}
            />
          </Card>
        </Col>
      ))}
    </Row>
  )
}

export default StatCards
