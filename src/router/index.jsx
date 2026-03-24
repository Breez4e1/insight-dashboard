import { createBrowserRouter, Navigate } from 'react-router-dom'
import AppLayout from '@/components/Layout/AppLayout'
import Dashboard from '@/pages/Dashboard'
import Inspection from '@/pages/Inspection'
import Diagnosis from '@/pages/Diagnosis'
import Reports from '@/pages/Reports'

/**
 * 路由配置
 * - AppLayout 是公共布局（侧边栏 + 顶栏）
 * - 4 个业务页面都嵌套在 AppLayout 里
 * - 根路径 / 自动重定向到 /dashboard
 */
const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      // 默认重定向到 dashboard
      { index: true, element: <Navigate to="/dashboard" replace /> },
      { path: 'dashboard',  element: <Dashboard /> },
      { path: 'inspection', element: <Inspection /> },
      { path: 'diagnosis',  element: <Diagnosis /> },
      { path: 'reports',    element: <Reports /> },
    ],
  },
])

export default router
