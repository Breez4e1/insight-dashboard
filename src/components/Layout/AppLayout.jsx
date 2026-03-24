import { useState } from 'react'
import { Layout, Menu, theme, Typography } from 'antd'
import { Outlet, useNavigate, useLocation } from 'react-router-dom'
import {
  DashboardOutlined,
  SearchOutlined,
  BugOutlined,
  FileTextOutlined,
} from '@ant-design/icons'

const { Header, Sider, Content } = Layout
const { Title } = Typography

// 侧边栏菜单项配置
const menuItems = [
  { key: '/dashboard',  icon: <DashboardOutlined />, label: '仪表盘'   },
  { key: '/inspection', icon: <SearchOutlined />,    label: '巡检管理' },
  { key: '/diagnosis',  icon: <BugOutlined />,       label: '故障诊断' },
  { key: '/reports',    icon: <FileTextOutlined />,  label: '报告中心' },
]

function AppLayout() {
  const [collapsed, setCollapsed] = useState(false)
  const navigate  = useNavigate()
  const location  = useLocation()
  const { token } = theme.useToken()

  // 点击菜单时跳转对应路由
  const handleMenuClick = ({ key }) => navigate(key)

  return (
    <Layout style={{ minHeight: '100vh' }}>
      {/* 侧边栏 */}
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={setCollapsed}
        style={{ background: token.colorBgContainer }}
      >
        {/* Logo 区域 */}
        <div style={{
          height: 64,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderBottom: `1px solid ${token.colorBorderSecondary}`,
        }}>
          <Title
            level={5}
            style={{ margin: 0, color: token.colorPrimary, whiteSpace: 'nowrap' }}
          >
            {collapsed ? 'ID' : 'Insight Dashboard'}
          </Title>
        </div>

        <Menu
          mode="inline"
          selectedKeys={[location.pathname]}
          items={menuItems}
          onClick={handleMenuClick}
          style={{ borderRight: 0, paddingTop: 8 }}
        />
      </Sider>

      {/* 右侧主区域 */}
      <Layout>
        <Header style={{
          background: token.colorBgContainer,
          borderBottom: `1px solid ${token.colorBorderSecondary}`,
          padding: '0 24px',
          display: 'flex',
          alignItems: 'center',
        }}>
          <span style={{ color: token.colorTextSecondary, fontSize: 13 }}>
            欢迎使用 Insight Dashboard
          </span>
        </Header>

        {/* 页面内容区域 —— <Outlet /> 会渲染当前路由对应的页面组件 */}
        <Content style={{ margin: 24, minHeight: 280 }}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  )
}

export default AppLayout
