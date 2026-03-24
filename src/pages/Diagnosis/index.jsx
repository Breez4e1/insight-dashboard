import { Card, Col, Descriptions, List, Row, Tag, Typography } from 'antd'
import { WarningOutlined } from '@ant-design/icons'

const { Title } = Typography

// Mock 数据：诊断结果
const mockDiagnoses = [
  {
    id: 'd001',
    device: 'PLC-A02',
    fault: '电流过载',
    level: 'warning',
    suggestion: '检查负载是否超出额定范围，建议减少并发任务。',
    time: '2026-03-23 08:32',
  },
  {
    id: 'd002',
    device: 'PLC-B01',
    fault: '通信超时',
    level: 'error',
    suggestion: '检查网线连接及交换机端口状态，必要时重启设备。',
    time: '2026-03-23 09:05',
  },
]

const levelMap = {
  warning: { color: 'orange', text: '告警' },
  error:   { color: 'red',    text: '严重' },
}

function Diagnosis() {
  return (
    <div>
      <Title level={3} style={{ marginBottom: 24 }}>故障诊断</Title>

      <Row gutter={[16, 16]}>
        {mockDiagnoses.map((item) => (
          <Col key={item.id} xs={24} lg={12}>
            <Card
              title={
                <span>
                  <WarningOutlined
                    style={{ color: item.level === 'error' ? 'red' : 'orange', marginRight: 8 }}
                  />
                  {item.device}
                </span>
              }
              extra={<Tag color={levelMap[item.level].color}>{levelMap[item.level].text}</Tag>}
            >
              <Descriptions column={1} size="small">
                <Descriptions.Item label="故障类型">{item.fault}</Descriptions.Item>
                <Descriptions.Item label="诊断时间">{item.time}</Descriptions.Item>
                <Descriptions.Item label="处理建议">{item.suggestion}</Descriptions.Item>
              </Descriptions>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default Diagnosis
