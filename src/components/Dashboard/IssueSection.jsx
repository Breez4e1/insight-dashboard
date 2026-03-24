import { Card, Col, Row, Statistic } from 'antd'

function IssueSection({ data }) {
  return (
    <Card title="IssueSection" style={{ marginBottom: 16 }}>
      <Row gutter={[12, 12]}>
        {data.map((item) => (
          <Col xs={24} md={8} key={item.key}>
            <Card size="small">
              <Statistic title={item.label} value={item.count} valueStyle={{ color: item.color }} />
            </Card>
          </Col>
        ))}
      </Row>
    </Card>
  )
}

export default IssueSection
