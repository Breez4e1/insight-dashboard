import { Card } from 'antd'
import { LineChartOutlined } from '@ant-design/icons'
import { mockTrendData } from '@/mock'

/**
 * TrendChart —— 趋势图（占位）
 *
 * 用于展示检测数和错误数的时间序列图表
 * 后续可集成 ECharts 实现真实图表
 */
function TrendChart() {
  return (
    <Card
      title={<span><LineChartOutlined style={{ marginRight: 8 }} />检测趋势</span>}
      style={{ marginBottom: 24 }}
    >
      <div
        style={{
          height: 240,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#fafafa',
          borderRadius: 8,
          color: '#999',
        }}
      >
        <div style={{ textAlign: 'center' }}>
          <LineChartOutlined style={{ fontSize: 32, marginBottom: 8 }} />
          <p>图表区域 — 后续用 ECharts 渲染</p>
          <p style={{ fontSize: 12, marginTop: 4 }}>
            当前数据：{mockTrendData.dates.length} 天，{mockTrendData.detected.reduce((a, b) => a + b, 0)} 次检测
          </p>
        </div>
      </div>
    </Card>
  )
}

export default TrendChart
