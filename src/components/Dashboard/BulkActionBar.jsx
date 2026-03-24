import { Button, Divider, Popconfirm, Space, message } from 'antd'
import {
  DeleteOutlined,
  PauseOutlined,
  PlayCircleOutlined,
  PoweroffOutlined,
} from '@ant-design/icons'

/**
 * BulkActionBar —— 批量操作栏
 *
 * Props:
 *   selectedCount {number} 已选中的设备数
 *   onClearSelect {function} 清空选中的回调
 */
function BulkActionBar({ selectedCount = 0, onClearSelect }) {
  if (selectedCount === 0) return null

  const handleRestart = () => {
    message.success(`已选择 ${selectedCount} 个设备进行重启`)
    onClearSelect?.()
  }

  const handlePause = () => {
    message.info(`已选择 ${selectedCount} 个设备进行暂停`)
    onClearSelect?.()
  }

  const handleStop = () => {
    message.warning(`已选择 ${selectedCount} 个设备进行停止`)
    onClearSelect?.()
  }

  const handleDelete = () => {
    message.error(`已删除 ${selectedCount} 个设备`)
    onClearSelect?.()
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
          已选中 <strong style={{ color: '#1f6feb', fontSize: 16 }}>{selectedCount}</strong> 个设备
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
          description="删除后无法恢复"
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
          onClick={onClearSelect}
          style={{ marginLeft: 'auto' }}
        >
          清空选择
        </Button>
      </Space>
    </div>
  )
}

export default BulkActionBar
