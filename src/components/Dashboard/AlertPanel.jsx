import { Alert, Card, Empty, Space, Tag } from 'antd'
import { AlertOutlined, ClockCircleOutlined } from '@ant-design/icons'
import { mockAlerts } from '@/mock'

const levelMap = {
  error:   { type: 'error',   title: '严重告警'  },
  warning: { type: 'warning', title: '告警提醒' },
  info:    { type: 'info',    title: '信息提示' },
}

/**
 * AlertPanel —— 告警面板
 *
 * 展示最近的系统告警和异常信息
 */
function AlertPanel() {
  return (
    <Card
      title={<span><AlertOutlined style={{ marginRight: 8 }} />告警面板</span>}
      style={{ marginBottom: 24 }}
    >
      {mockAlerts.length > 0 ? (
        <Space direction="vertical" style={{ width: '100%' }} size="middle">
          {mockAlerts.map((alert) => (
            <Alert
              key={alert.id}
              type={levelMap[alert.level].type}
              message={<strong>{alert.title}</strong>}
              description={
                <div>
                  <p style={{ margin: '8px 0 0' }}>{alert.desc}</p>
                  <span style={{ fontSize: 12, color: '#999' }}>
                    <ClockCircleOutlined style={{ marginRight: 4 }} />
                    {alert.time}
                  </span>
                </div>
              }
              closable
              showIcon
            />
          ))}
        </Space>
      ) : (
        <Empty description="暂无告警" style={{ marginTop: 16 }} />
      )}
    </Card>
  )
}

export default AlertPanel
