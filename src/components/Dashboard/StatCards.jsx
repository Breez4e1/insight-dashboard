import { Card, Col, Row, Statistic } from 'antd'
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons'
import { mockStats } from '@/mock'

/**
 * StatCards —— 统计卡片行
 *
 * 展示 4 个关键指标：检测数、异常数、完成率、待处理数
 */
function StatCards() {
  return (
    <Row gutter={[16, 16]} style={{ marginBottom: 24 }}>
      {mockStats.map((item) => (
        <Col key={item.label} xs={24} sm={12} lg={6}>
          <Card hoverable>
            <Statistic
              title={item.label}
              value={item.value}
              suffix={item.suffix}
              valueStyle={{ color: item.up ? '#52c41a' : '#ff4d4f' }}
              prefix={item.up ? <ArrowUpOutlined /> : <ArrowDownOutlined />}
              subTitle={`${item.up ? '+' : '-'}${item.change}${item.suffix}`}
            />
          </Card>
        </Col>
      ))}
    </Row>
  )
}

export default StatCards
