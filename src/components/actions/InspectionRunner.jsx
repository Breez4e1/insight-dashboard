import { Button } from 'antd'
import { PlayCircleOutlined } from '@ant-design/icons'

function InspectionRunner({ loading, onRun }) {
  return (
    <Button type="primary" icon={<PlayCircleOutlined />} loading={loading} onClick={onRun}>
      InspectionRunner
    </Button>
  )
}

export default InspectionRunner
