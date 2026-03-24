import { Card, Empty, List, Tag, Typography } from 'antd'

const { Text } = Typography

function DiagnosisResult({ data }) {
  return (
    <Card title="DiagnosisResult">
      {!data.length ? (
        <Empty description="No diagnosis result" />
      ) : (
        <List
          dataSource={data}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                title={
                  <>
                    {item.serverName} <Tag color="orange">{item.level}</Tag>
                  </>
                }
                description={
                  <>
                    <Text>{item.error}</Text>
                    <br />
                    <Text type="secondary">{item.suggestion}</Text>
                  </>
                }
              />
            </List.Item>
          )}
        />
      )}
    </Card>
  )
}

export default DiagnosisResult
