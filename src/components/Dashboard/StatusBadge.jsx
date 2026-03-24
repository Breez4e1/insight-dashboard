import { Tag } from 'antd'

const statusMap = {
  healthy: { color: 'success', text: 'Healthy' },
  warning: { color: 'warning', text: 'Warning' },
  critical: { color: 'error', text: 'Critical' },
  offline: { color: 'default', text: 'Offline' },
}

function StatusBadge({ status }) {
  const config = statusMap[status] || { color: 'default', text: status || 'Unknown' }
  return <Tag color={config.color}>{config.text}</Tag>
}

export default StatusBadge
