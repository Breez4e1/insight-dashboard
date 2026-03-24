import { Card, Col, Row, Statistic, Typography } from 'antd'
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons'

const { Title } = Typography

// Mock 数据：首页概览卡片数据
const stats = [
  { label: '今日检测数',   value: 128,  suffix: '次', up: true,  change: 12 },
  { label: '异常设备数',   value: 7,    suffix: '台', up: false, change: 3  },
  { label: '诊断完成率',   value: 94.3, suffix: '%',  up: true,  change: 2  },
  { label: '待处理报告',   value: 5,    suffix: '份', up: false, change: 1  },
]

function Dashboard() {
  return (
    <div>
      <Title level={3} style={{ marginBottom: 24 }}>仪表盘</Title>

      {/* 统计卡片行 */}
      <Row gutter={[16, 16]}>
        {stats.map((item) => (
          <Col key={item.label} xs={24} sm={12} lg={6}>
            <Card>
              <Statistic
                title={item.label}
                value={item.value}
                suffix={item.suffix}
                valueStyle={{ color: item.up ? '#3f8600' : '#cf1322' }}
                prefix={item.up
                  ? <ArrowUpOutlined />
                  : <ArrowDownOutlined />}
              />
              <p style={{ margin: '8px 0 0', color: '#888', fontSize: 12 }}>
                较昨日 {item.up ? '+' : '-'}{item.change}{item.suffix}
              </p>
            </Card>
          </Col>
        ))}
      </Row>

      {/* 图表占位 —— 后续用 ECharts 替换 */}
      <Row gutter={[16, 16]} style={{ marginTop: 16 }}>
        <Col xs={24} lg={16}>
          <Card title="检测趋势（占位）" style={{ height: 280 }}>
            <div style={{
              height: 200,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: '#f0f5ff',
              borderRadius: 8,
              color: '#aaa',
            }}>
              图表区域 — 后续接入 ECharts
            </div>
          </Card>
        </Col>
        <Col xs={24} lg={8}>
          <Card title="设备状态分布（占位）" style={{ height: 280 }}>
            <div style={{
              height: 200,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: '#f0f5ff',
              borderRadius: 8,
              color: '#aaa',
            }}>
              饼图占位
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default Dashboard
