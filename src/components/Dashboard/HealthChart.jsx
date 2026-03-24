import { Card, Col, Progress, Row } from 'antd'
import { mockHealthMetrics } from '@/mock'

/**
 * HealthChart —— 健康图表（占位）
 *
 * 展示系统健康度、设备在线率、运行时间等关键指标
 */
function HealthChart() {
  const metrics = [
    { label: '系统健康度', value: mockHealthMetrics.systemHealth,  color: '#1f6feb' },
    { label: '设备在线率', value: mockHealthMetrics.deviceStatus,  color: '#52c41a' },
    { label: '系统可用性', value: mockHealthMetrics.uptime,        color: '#faad14' },
  ]

  return (
    <Card title="系统健康指标" style={{ marginBottom: 24 }}>
      <Row gutter={[24, 24]}>
        {metrics.map((item) => (
          <Col key={item.label} xs={24} sm={8}>
            <div style={{ textAlign: 'center' }}>
              <Progress
                type="circle"
                percent={item.value}
                strokeColor={item.color}
                width={120}
              />
              <p style={{ marginTop: 12, color: '#666', fontSize: 14 }}>{item.label}</p>
            </div>
          </Col>
        ))}
      </Row>
    </Card>
  )
}

export default HealthChart
