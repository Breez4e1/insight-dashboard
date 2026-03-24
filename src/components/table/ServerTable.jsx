import { useMemo } from 'react'
import { Button, Card, Space, Table, message } from 'antd'
import { BugOutlined, EyeOutlined, SearchOutlined } from '@ant-design/icons'
import useServerStore from '@/store/serverStore'
import StatusBadge from '@/components/Dashboard/StatusBadge'

function ServerTable() {
  const servers = useServerStore((state) => state.servers)
  const selected = useServerStore((state) => state.selected)
  const setSelected = useServerStore((state) => state.setSelected)
  const filters = useServerStore((state) => state.filters)

  const dataSource = useMemo(() => {
    const keyword = filters.search.trim().toLowerCase()

    return servers.filter((server) => {
      const matchRegion = !filters.region || server.region === filters.region
      const matchCinema = !filters.cinema || server.cinema === filters.cinema
      const matchScreen = !filters.screen || server.screen === filters.screen
      const matchStatus = !filters.status || server.status === filters.status
      const matchSearch =
        !keyword ||
        `${server.name} ${server.sn} ${server.cinema} ${server.screen} ${server.model}`
          .toLowerCase()
          .includes(keyword)

      return matchRegion && matchCinema && matchScreen && matchStatus && matchSearch
    })
  }, [servers, filters])

  const columns = [
    { title: 'Server Name', dataIndex: 'name', key: 'name', width: 140 },
    { title: 'SN', dataIndex: 'sn', key: 'sn', width: 120 },
    { title: 'Cinema', dataIndex: 'cinema', key: 'cinema', width: 120 },
    { title: 'Screen', dataIndex: 'screen', key: 'screen', width: 120 },
    { title: 'Model', dataIndex: 'model', key: 'model', width: 120 },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      width: 120,
      render: (status) => <StatusBadge status={status} />,
    },
    { title: 'Health Score', dataIndex: 'healthScore', key: 'healthScore', width: 120 },
    { title: 'Last Check', dataIndex: 'lastCheck', key: 'lastCheck', width: 180 },
    {
      title: 'Actions',
      key: 'actions',
      fixed: 'right',
      width: 220,
      render: (_, record) => (
        <Space size="small">
          <Button
            type="link"
            icon={<SearchOutlined />}
            onClick={() => message.info(`Inspect ${record.name}`)}
          >
            Inspect
          </Button>
          <Button
            type="link"
            icon={<BugOutlined />}
            onClick={() => message.info(`Diagnose ${record.name}`)}
          >
            Diagnose
          </Button>
          <Button
            type="link"
            icon={<EyeOutlined />}
            onClick={() => message.info(`View ${record.name}`)}
          >
            View
          </Button>
        </Space>
      ),
    },
  ]

  return (
    <Card title={`ServerTable (${dataSource.length})`}>
      <Table
        rowKey="id"
        dataSource={dataSource}
        columns={columns}
        rowSelection={{
          selectedRowKeys: selected,
          onChange: (keys) => setSelected(keys),
        }}
        pagination={{ pageSize: 8 }}
        scroll={{ x: 1300 }}
      />
    </Card>
  )
}

export default ServerTable
