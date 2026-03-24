import { Card, Col, Row, Statistic } from 'antd'

function IssueSummarySection({ items }) {
  return (
    <Card title="Issue Summary Section" style={{ marginBottom: 16 }}>
      <Row gutter={[16, 16]}>
        {items.map((item) => (
          <Col key={item.key} xs={24} md={8}>
            <Card size="small">
              <Statistic
                title={item.label}
                value={item.count}
                valueStyle={{ color: item.color }}
              />
            </Card>
          </Col>
        ))}
      </Row>
    </Card>
  )
}

export default IssueSummarySection