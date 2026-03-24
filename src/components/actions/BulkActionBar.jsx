import { Button, Card, Space, Typography, message } from 'antd'
import useServerStore from '@/store/serverStore'

const { Text } = Typography

function BulkActionBar() {
  const selected = useServerStore((state) => state.selected)

  if (!selected.length) return null

  return (
    <Card style={{ position: 'sticky', bottom: 12, marginTop: 12, zIndex: 2 }}>
      <Space style={{ width: '100%', justifyContent: 'space-between' }} wrap>
        <Text>Selected: {selected.length}</Text>
        <Space>
          <Button type="primary" onClick={() => message.success('Run Inspection (mock)')}>
            Run Inspection
          </Button>
          <Button onClick={() => message.success('Generate Report (mock)')}>
            Generate Report
          </Button>
        </Space>
      </Space>
    </Card>
  )
}

export default BulkActionBar
