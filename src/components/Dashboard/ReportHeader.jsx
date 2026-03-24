import { Card, Descriptions } from 'antd'

function ReportHeader({ data }) {
  return (
    <Card title="ReportHeader" style={{ marginBottom: 16 }}>
      <Descriptions size="small" column={2}>
        <Descriptions.Item label="Title">{data.title}</Descriptions.Item>
        <Descriptions.Item label="Period">{data.period}</Descriptions.Item>
        <Descriptions.Item label="Generated At">{data.generatedAt}</Descriptions.Item>
        <Descriptions.Item label="Owner">{data.owner}</Descriptions.Item>
      </Descriptions>
    </Card>
  )
}

export default ReportHeader
