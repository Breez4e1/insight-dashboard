import { Button, Card, Space, message } from 'antd'
import { DownloadOutlined, FilePdfOutlined, FileExcelOutlined } from '@ant-design/icons'

function DownloadButtons() {
  return (
    <Card title="Download Buttons">
      <Space wrap>
        <Button
          type="primary"
          icon={<FilePdfOutlined />}
          onClick={() => message.success('开始下载 PDF（Mock）')}
        >
          下载 PDF
        </Button>
        <Button
          icon={<FileExcelOutlined />}
          onClick={() => message.success('开始下载 Excel（Mock）')}
        >
          下载 Excel
        </Button>
        <Button
          icon={<DownloadOutlined />}
          onClick={() => message.info('打包下载（Mock）')}
        >
          打包下载
        </Button>
      </Space>
    </Card>
  )
}

export default DownloadButtons