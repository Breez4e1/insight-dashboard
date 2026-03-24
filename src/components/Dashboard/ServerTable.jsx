import { useMemo, useCallback } from 'react'
import { Badge, Button, Card, message, Progress, Space, Table, Tag } from 'antd'
import { BugOutlined, DatabaseOutlined, EyeOutlined } from '@ant-design/icons'
import useDashboardStore from '@/store/dashboard'

const statusMap = {
  online:  { color: 'success', text: '在线'   },
  warning: { color: 'warning', text: '告警'   },
  offline: { color: 'error',   text: '离线'   },
}

/**
 * ServerTable —— 服务器/设备表格
 *
 * 功能：
 * - 显示筛选后的设备列表
 * - 支持行多选
 * - 每行有操作按钮（Inspect、Diagnose、View）
 */
function ServerTable() {
  const filteredServers = useDashboardStore((state) => state.getFilteredServers())
  const selectedRowKeys = useDashboardStore((state) => state.selectedRowKeys)
  const setSelectedRowKeys = useDashboardStore((state) => state.setSelectedRowKeys)

  // 操作按钮处理（用 useCallback 缓存以避免无限更新）
  const handleInspect = useCallback((server) => {
    message.info(`正在巡检 ${server.name}...`)
  }, [])

  const handleDiagnose = useCallback((server) => {
    message.info(`正在诊断 ${server.name}...`)
  }, [])

  const handleView = useCallback((server) => {
    message.info(`查看 ${server.name} 详情...`)
  }, [])

  // 表格列定义（缓存以避免无限更新）
  const columns = useMemo(() => [
    {
      title: '设备名称',
      dataIndex: 'name',
      key: 'name',
      render: (text, record) => (
        <Space>
          <Badge
            status={statusMap[record.status].color}
            text={text}
          />
        </Space>
      ),
    },
    {
      title: 'IP 地址',
      dataIndex: 'ip',
      key: 'ip',
    },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
      render: (status) => (
        <Tag color={statusMap[status].color}>{statusMap[status].text}</Tag>
      ),
    },
    {
      title: 'CPU',
      dataIndex: 'cpu',
      key: 'cpu',
      render: (value) => (
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <Progress
            type="circle"
            percent={value}
            width={40}
            strokeColor={value > 80 ? '#ff4d4f' : '#1f6feb'}
          />
          <span>{value}%</span>
        </div>
      ),
    },
    {
      title: '内存',
      dataIndex: 'memory',
      key: 'memory',
      render: (value) => (
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <Progress
            type="circle"
            percent={value}
            width={40}
            strokeColor={value > 80 ? '#ff4d4f' : '#52c41a'}
          />
          <span>{value}%</span>
        </div>
      ),
    },
    {
      title: '磁盘',
      dataIndex: 'disk',
      key: 'disk',
      render: (value) => (
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <Progress
            type="circle"
            percent={value}
            width={40}
            strokeColor={value > 80 ? '#ff4d4f' : '#faad14'}
          />
          <span>{value}%</span>
        </div>
      ),
    },
    {
      title: '健康度',
      dataIndex: 'health',
      key: 'health',
      render: (value) => (
        <Tag color={value >= 80 ? 'green' : value >= 60 ? 'orange' : 'red'}>
          {value}%
        </Tag>
      ),
    },
    {
      title: '操作',
      key: 'action',
      fixed: 'right',
      width: 180,
      render: (_, record) => (
        <Space size="small">
          <Button
            type="link"
            size="small"
            icon={<DatabaseOutlined />}
            onClick={() => handleInspect(record)}
            title="运行巡检"
          >
            巡检
          </Button>
          <Button
            type="link"
            size="small"
            icon={<BugOutlined />}
            onClick={() => handleDiagnose(record)}
            title="故障诊断"
          >
            诊断
          </Button>
          <Button
            type="link"
            size="small"
            icon={<EyeOutlined />}
            onClick={() => handleView(record)}
            title="查看详情"
          >
            查看
          </Button>
        </Space>
      ),
    },
  ], [])

  // 行选择配置（缓存以避免无限更新）
  const rowSelection = useMemo(() => ({
    selectedRowKeys,
    onChange: setSelectedRowKeys,
  }), [selectedRowKeys, setSelectedRowKeys])

  return (
    <Card title={`设备列表 (共 ${filteredServers.length} 个)`}>
      <Table
        dataSource={filteredServers}
        columns={columns}
        rowKey="id"
        rowSelection={rowSelection}
        pagination={{ pageSize: 10, showTotal: (total) => `共 ${total} 个设备` }}
        scroll={{ x: 1400 }}
      />
    </Card>
  )
}

export default ServerTable

