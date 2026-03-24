import { useMemo, useState } from 'react'
import { Card, Flex, Typography, message } from 'antd'
import { mockInspections, mockServers } from '@/mock'
import ServerSelector from '@/components/filters/ServerSelector'
import InspectionRunner from '@/components/actions/InspectionRunner'
import InspectionResult from '@/components/table/InspectionResult'

const { Title, Text } = Typography

function Inspection() {
  const [selectedServer, setSelectedServer] = useState('')
  const [running, setRunning] = useState(false)
  const [lastRunAt, setLastRunAt] = useState('-')

  const serverOptions = useMemo(() => {
    return [
      { label: 'All Servers', value: '' },
      ...mockServers.map((server) => ({ label: `${server.name} (${server.sn})`, value: server.id })),
    ]
  }, [])

  const filteredResults = useMemo(() => {
    if (!selectedServer) return mockInspections
    return mockInspections.filter((item) => item.serverId === selectedServer)
  }, [selectedServer])

  const handleRunInspection = () => {
    setRunning(true)
    setTimeout(() => {
      setRunning(false)
      setLastRunAt(new Date().toLocaleString())
      message.success('巡检任务已触发（Mock）')
    }, 600)
  }

  return (
    <div>
      <Title level={3} style={{ marginBottom: 24 }}>Inspection</Title>

      <Card style={{ marginBottom: 16 }}>
        <Flex gap={12} wrap="wrap" align="center" justify="space-between">
          <Flex gap={12} wrap="wrap" align="center">
            <ServerSelector
              options={serverOptions}
              value={selectedServer}
              onChange={setSelectedServer}
            />
            <InspectionRunner
              loading={running}
              onRun={handleRunInspection}
            />
          </Flex>
          <Text type="secondary">最近运行时间: {lastRunAt}</Text>
        </Flex>
      </Card>

      <InspectionResult data={filteredResults} />
    </div>
  )
}

export default Inspection
