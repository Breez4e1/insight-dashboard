import { useMemo, useState } from 'react'
import { Card, Flex, Typography, message } from 'antd'
import { mockInspections, mockServers } from '@/mock'
import ServerSelector from '@/components/Inspection/ServerSelector'
import RunInspectionButton from '@/components/Inspection/RunInspectionButton'
import InspectionResultPanel from '@/components/Inspection/InspectionResultPanel'

const { Title, Text } = Typography

function Inspection() {
  const [selectedServer, setSelectedServer] = useState('all')
  const [running, setRunning] = useState(false)
  const [lastRunAt, setLastRunAt] = useState('-')

  const filteredResults = useMemo(() => {
    if (selectedServer === 'all') return mockInspections
    return mockInspections.filter((item) => item.device === selectedServer)
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
              servers={mockServers}
              value={selectedServer}
              onChange={setSelectedServer}
            />
            <RunInspectionButton
              loading={running}
              onClick={handleRunInspection}
            />
          </Flex>
          <Text type="secondary">最近运行时间: {lastRunAt}</Text>
        </Flex>
      </Card>

      <InspectionResultPanel results={filteredResults} />
    </div>
  )
}

export default Inspection
