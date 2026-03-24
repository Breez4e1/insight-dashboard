import { Select, Space, Typography } from 'antd'

const { Text } = Typography

function ServerSelector({ servers, value, onChange }) {
  const options = [
    { label: '全部服务器', value: 'all' },
    ...servers.map((server) => ({
      label: `${server.name} (${server.ip})`,
      value: server.name,
    })),
  ]

  return (
    <Space direction="vertical" size={4}>
      <Text type="secondary">Server Selector</Text>
      <Select
        value={value}
        onChange={onChange}
        options={options}
        style={{ width: 320 }}
      />
    </Space>
  )
}

export default ServerSelector