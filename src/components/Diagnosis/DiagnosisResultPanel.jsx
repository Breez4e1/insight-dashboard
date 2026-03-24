import { Alert, Card, Col, Descriptions, Empty, Row, Tag, Typography } from 'antd'

const { Text } = Typography

const levelMap = {
  warning: { color: 'orange', text: '告警' },
  error: { color: 'red', text: '严重' },
}

function DiagnosisResultPanel({ uploadedLogName, errorText, results }) {
  return (
    <Card
      style={{ marginTop: 16 }}
      title="Diagnosis Result Panel"
      extra={<Text type="secondary">结果数: {results.length}</Text>}
    >
      <Alert
        type="info"
        showIcon
        style={{ marginBottom: 16 }}
        message={`日志文件: ${uploadedLogName || '未选择'} | 关键词: ${errorText || '未输入'}`}
      />

      {results.length === 0 ? (
        <Empty description="暂无匹配结果" />
      ) : (
        <Row gutter={[16, 16]}>
          {results.map((item) => (
            <Col key={item.id} xs={24} lg={12}>
              <Card
                size="small"
                title={item.device}
                extra={<Tag color={levelMap[item.level].color}>{levelMap[item.level].text}</Tag>}
              >
                <Descriptions size="small" column={1}>
                  <Descriptions.Item label="故障类型">{item.fault}</Descriptions.Item>
                  <Descriptions.Item label="诊断时间">{item.time}</Descriptions.Item>
                  <Descriptions.Item label="处理建议">{item.suggestion}</Descriptions.Item>
                </Descriptions>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Card>
  )
}

export default DiagnosisResultPanel