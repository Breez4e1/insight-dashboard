import { useState } from 'react'
import { Layout } from 'antd'
import { Outlet } from 'react-router-dom'
import SidebarMenu from './SidebarMenu'
import HeaderBar from './HeaderBar'

const { Content } = Layout

/**
 * AppLayout —— 应用根布局（骨架）
 *
 * 布局结构（flex row）：
 * ┌─────────────┬──────────────────────────────┐
 * │             │  HeaderBar                   │
 * │ SidebarMenu │──────────────────────────────│
 * │             │  Content（<Outlet />）        │
 * └─────────────┴──────────────────────────────┘
 *
 * 关键样式说明：
 * - 外层 Layout：height: 100vh + overflow: hidden → 让视口高度固定，不出现全局滚动条
 * - 内层 Layout：overflow: hidden → 将滚动行为限制在 Content 内
 * - Content：flex: 1 + overflowY: auto → 内容超长时只在此区域滚动
 */
function AppLayout() {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <Layout style={{ height: '100vh', overflow: 'hidden' }}>
      {/* 左侧导航 */}
      <SidebarMenu
        collapsed={collapsed}
        onCollapse={setCollapsed}
      />

      {/* 右侧区域：头部 + 内容 */}
      <Layout style={{ overflow: 'hidden' }}>
        <HeaderBar
          collapsed={collapsed}
          onCollapse={() => setCollapsed((c) => !c)}
        />

        {/* 内容区：这里渲染各业务页面 */}
        <Content
          style={{
            flex: 1,
            overflowY: 'auto',
            padding: 24,
            background: '#f5f6fa',
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  )
}

export default AppLayout

