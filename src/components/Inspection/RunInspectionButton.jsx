import { Button } from 'antd'
import { PlayCircleOutlined } from '@ant-design/icons'

function RunInspectionButton({ loading, onClick }) {
  return (
    <Button
      type="primary"
      icon={<PlayCircleOutlined />}
      loading={loading}
      onClick={onClick}
    >
      Run Inspection
    </Button>
  )
}

export default RunInspectionButton