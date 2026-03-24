import { Avatar, Badge, Breadcrumb, Button, Dropdown, Layout, Space, theme } from 'antd'
import { useLocation } from 'react-router-dom'
import {
  BellOutlined,
  LogoutOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  SettingOutlined,
  UserOutlined,
} from '@ant-design/icons'

const { Header } = Layout

/**
 * 路由路径 → 面包屑文字映射
 * 格式：[{ title: '...' }, { title: '...' }]  （AntD Breadcrumb 的 items 格式）
 */
const BREADCRUMB_MAP = {
  '/dashboard':  [{ title: '首页' }, { title: 'Dashboard'  }],
  '/inspection': [{ title: '首页' }, { title: 'Inspection' }],
  '/diagnosis':  [{ title: '首页' }, { title: 'Diagnosis'  }],
  '/reports':    [{ title: '首页' }, { title: 'Reports'    }],
}

/** 用户下拉菜单 */
const USER_MENU = [
  { key: 'profile',  icon: <UserOutlined />,   label: '个人信息' },
  { key: 'settings', icon: <SettingOutlined />, label: '系统设置' },
  { type: 'divider' },
  { key: 'logout',   icon: <LogoutOutlined />,  label: '退出登录', danger: true },
]

/**
 * HeaderBar —— 顶部导航栏
 *
 * Props:
 *   collapsed  {boolean}   侧边栏是否折叠（用于决定显示哪个折叠图标）
 *   onCollapse {function}  点击折叠按钮的回调
 */
function HeaderBar({ collapsed, onCollapse }) {
  const location = useLocation()
  const { token } = theme.useToken()

  const breadcrumbItems = BREADCRUMB_MAP[location.pathname] ?? [{ title: '首页' }]

  return (
    <Header
      style={{
        background: token.colorBgContainer,
        padding: '0 24px 0 0',
        height: 64,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottom: `1px solid ${token.colorBorderSecondary}`,
        // 头部固定，不参与内容区滚动
        flexShrink: 0,
        boxShadow: '0 1px 6px rgba(0, 21, 41, 0.06)',
        zIndex: 10,
      }}
    >
      {/* ── 左侧：折叠按钮 + 面包屑 ── */}
      <Space align="center" size={0}>
        {/* 折叠 / 展开按钮 */}
        <Button
          type="text"
          icon={
            collapsed
              ? <MenuUnfoldOutlined style={{ fontSize: 16 }} />
              : <MenuFoldOutlined  style={{ fontSize: 16 }} />
          }
          onClick={onCollapse}
          style={{ width: 64, height: 64 }}
        />
        <Breadcrumb items={breadcrumbItems} />
      </Space>

      {/* ── 右侧：通知铃 + 用户头像 ── */}
      <Space size={4} align="center">
        {/* 通知铃铛，count 表示未读数 */}
        <Badge count={3} size="small" offset={[-4, 4]}>
          <Button
            type="text"
            icon={<BellOutlined style={{ fontSize: 17 }} />}
            style={{ width: 40, height: 40 }}
          />
        </Badge>

        {/* 用户下拉菜单 */}
        <Dropdown menu={{ items: USER_MENU }} placement="bottomRight" arrow>
          <Space
            align="center"
            style={{ cursor: 'pointer', padding: '0 12px', height: 64 }}
            // 阻止 AntD Dropdown 的点击事件冒泡警告
            onClick={(e) => e.preventDefault()}
          >
            <Avatar
              size={30}
              icon={<UserOutlined />}
              style={{ background: token.colorPrimary }}
            />
            <span style={{ fontSize: 14, fontWeight: 500 }}>Jordi</span>
          </Space>
        </Dropdown>
      </Space>
    </Header>
  )
}

export default HeaderBar
