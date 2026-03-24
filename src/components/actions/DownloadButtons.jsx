import { Button, Card, Space, message } from 'antd'
import { DownloadOutlined, FileExcelOutlined, FilePdfOutlined } from '@ant-design/icons'

function DownloadButtons() {
  return (
    <Card title="DownloadButtons">
      <Space>
        <Button type="primary" icon={<FilePdfOutlined />} onClick={() => message.success('Download PDF (mock)')}>
          PDF
        </Button>
        <Button icon={<FileExcelOutlined />} onClick={() => message.success('Download Excel (mock)')}>
          Excel
        </Button>
        <Button icon={<DownloadOutlined />} onClick={() => message.info('Download package (mock)')}>
          ZIP
        </Button>
      </Space>
    </Card>
  )
}

export default DownloadButtons
