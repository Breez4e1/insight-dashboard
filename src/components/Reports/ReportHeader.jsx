import { Card, Descriptions } from 'antd'

function ReportHeader({ data }) {
  return (
    <Card title="Report Header" style={{ marginBottom: 16 }}>
      <Descriptions size="small" column={2}>
        <Descriptions.Item label="报告名称">{data.title}</Descriptions.Item>
        <Descriptions.Item label="统计周期">{data.period}</Descriptions.Item>
        <Descriptions.Item label="生成时间">{data.generatedAt}</Descriptions.Item>
        <Descriptions.Item label="生成主体">{data.owner}</Descriptions.Item>
      </Descriptions>
    </Card>
  )
}

export default ReportHeader