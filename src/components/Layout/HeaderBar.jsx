import { Avatar, Badge, Input, Layout, Select, Space, Typography } from 'antd'
import { BellOutlined, GlobalOutlined, SearchOutlined, UserOutlined } from '@ant-design/icons'

const { Header } = Layout
const { Text } = Typography

/**
 * HeaderBar —— 顶部导航栏
 * 包含：Logo、Search、Notification、User Info、Language
 */
function HeaderBar() {

  return (
    <Header
      style={{
        background: '#fff',
        padding: '0 20px',
        height: 64,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottom: '1px solid #f0f0f0',
      }}
    >
      <Space align="center" size={16}>
        <Text strong style={{ fontSize: 16 }}>Logo</Text>
        <Input
          placeholder="Search"
          prefix={<SearchOutlined />}
          style={{ width: 260 }}
        />
      </Space>

      <Space size={16} align="center">
        <Space>
          <GlobalOutlined />
          <Select
            defaultValue="en"
            size="small"
            style={{ width: 110 }}
            options={[
              { label: 'English', value: 'en' },
              { label: '中文', value: 'zh' },
            ]}
          />
        </Space>
        <Badge count={3}>
          <BellOutlined style={{ fontSize: 18 }} />
        </Badge>
        <Space>
          <Avatar size="small" icon={<UserOutlined />} />
          <Text>User Info</Text>
        </Space>
      </Space>
    </Header>
  )
}

export default HeaderBar
