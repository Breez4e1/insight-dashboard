import { Layout, Menu } from 'antd'
import { useNavigate, useLocation } from 'react-router-dom'
import {
  DashboardOutlined,
  MonitorOutlined,
  BugOutlined,
  FileTextOutlined,
  ThunderboltOutlined,
} from '@ant-design/icons'

const { Sider } = Layout

/**
 * 导航菜单配置
 * key 对应路由路径，icon 是 Ant Design 图标，label 是显示文字
 */
const MENU_ITEMS = [
  { key: '/dashboard',  icon: <DashboardOutlined />, label: 'Dashboard'  },
  { key: '/inspection', icon: <MonitorOutlined />,   label: 'Inspection' },
  { key: '/diagnosis',  icon: <BugOutlined />,       label: 'Diagnosis'  },
  { key: '/reports',    icon: <FileTextOutlined />,  label: 'Reports'    },
]

/**
 * SidebarMenu —— 左侧导航栏
 *
 * Props:
 *   collapsed  {boolean}   是否折叠
 *   onCollapse {function}  切换折叠状态的回调（由 AppLayout 传入）
 */
function SidebarMenu({ collapsed, onCollapse }) {
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <Sider
      collapsed={collapsed}
      onCollapse={onCollapse}
      collapsible
      theme="dark"
      width={220}
      style={{
        // 固定高度 = 整个视口，不随页面滚动
        height: '100vh',
        overflow: 'hidden',
      }}
    >
      {/* ── Logo 区域 ── */}
      <div
        style={{
          height: 64,
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          // 折叠时居中，展开时靠左
          padding: collapsed ? 0 : '0 20px',
          justifyContent: collapsed ? 'center' : 'flex-start',
          borderBottom: '1px solid rgba(255,255,255,0.07)',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          flexShrink: 0,
        }}
      >
        <ThunderboltOutlined style={{ fontSize: 22, color: '#4e9af1', flexShrink: 0 }} />
        {/* 折叠时隐藏文字 */}
        {!collapsed && (
          <span style={{ color: '#fff', fontWeight: 700, fontSize: 15, letterSpacing: 0.5 }}>
            Insight
          </span>
        )}
      </div>

      {/* ── 导航菜单 ── */}
      <Menu
        theme="dark"
        mode="inline"
        // 根据当前 URL 高亮对应菜单项
        selectedKeys={[location.pathname]}
        items={MENU_ITEMS}
        onClick={({ key }) => navigate(key)}
        style={{ border: 'none', marginTop: 8 }}
      />
    </Sider>
  )
}

export default SidebarMenu
