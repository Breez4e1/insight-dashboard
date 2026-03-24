import { Button, Divider, Popconfirm, Space, message } from 'antd'
import {
  DeleteOutlined,
  PauseOutlined,
  PlayCircleOutlined,
  PoweroffOutlined,
} from '@ant-design/icons'
import useDashboardStore from '@/store/dashboard'

/**
 * BulkActionBar —— 批量操作栏
 *
 * 从 store 读取已选中的行数，如果为 0 则不显示
 * 支持批量操作：重启、暂停、停止、删除
 */
function BulkActionBar() {
  const selectedRowKeys = useDashboardStore((state) => state.selectedRowKeys)
  const clearSelectedRowKeys = useDashboardStore((state) => state.clearSelectedRowKeys)
  const deleteServers = useDashboardStore((state) => state.deleteServers)
  const getSelectedServers = useDashboardStore((state) => state.getSelectedServers)

  // 如果没有选中任何行，则不显示
  if (selectedRowKeys.length === 0) return null

  const selectedServers = getSelectedServers()
  const serverNames = selectedServers.map((s) => s.name).join(', ')

  const handleRestart = () => {
    message.success(`已重启 ${selectedRowKeys.length} 个设备: ${serverNames}`)
    clearSelectedRowKeys()
  }

  const handlePause = () => {
    message.info(`已暂停 ${selectedRowKeys.length} 个设备`)
    clearSelectedRowKeys()
  }

  const handleStop = () => {
    message.warning(`已停止 ${selectedRowKeys.length} 个设备`)
    clearSelectedRowKeys()
  }

  const handleDelete = () => {
    deleteServers(selectedRowKeys)
    message.error(`已删除 ${selectedRowKeys.length} 个设备`)
  }

  const handleClearSelect = () => {
    clearSelectedRowKeys()
  }

  return (
    <div
      style={{
        position: 'sticky',
        bottom: 0,
        left: 0,
        right: 0,
        padding: '12px 16px',
        background: '#fff',
        borderTop: '1px solid #f0f0f0',
        boxShadow: '0 -2px 8px rgba(0, 0, 0, 0.08)',
        zIndex: 100,
      }}
    >
      <Space>
        <span style={{ color: '#666' }}>
          已选中 <strong style={{ color: '#1f6feb', fontSize: 16 }}>{selectedRowKeys.length}</strong> 个设备
        </span>

        <Divider type="vertical" />

        <Button
          icon={<PlayCircleOutlined />}
          type="primary"
          onClick={handleRestart}
        >
          重启
        </Button>

        <Button
          icon={<PauseOutlined />}
          onClick={handlePause}
        >
          暂停
        </Button>

        <Button
          icon={<PoweroffOutlined />}
          onClick={handleStop}
          danger
        >
          停止
        </Button>

        <Popconfirm
          title="确定要删除吗？"
          description={`将删除以下 ${selectedRowKeys.length} 个设备: ${serverNames}`}
          onConfirm={handleDelete}
          okText="确定"
          cancelText="取消"
        >
          <Button
            icon={<DeleteOutlined />}
            danger
          >
            删除
          </Button>
        </Popconfirm>

        <Button
          type="dashed"
          onClick={handleClearSelect}
          style={{ marginLeft: 'auto' }}
        >
          清空选择
        </Button>
      </Space>
    </div>
  )
}

export default BulkActionBar
