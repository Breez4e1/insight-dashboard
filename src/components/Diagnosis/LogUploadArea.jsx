import { InboxOutlined } from '@ant-design/icons'
import { Typography, Upload, message } from 'antd'

const { Dragger } = Upload
const { Text } = Typography

function LogUploadArea({ onUploaded }) {
  return (
    <>
      <Dragger
        multiple={false}
        beforeUpload={(file) => {
          onUploaded(file.name)
          message.success(`已选择日志文件: ${file.name}`)
          return false
        }}
        showUploadList={false}
        accept=".log,.txt,.json"
      >
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">拖拽日志文件到这里，或点击上传</p>
        <p className="ant-upload-hint">仅做前端展示，不会上传到后端</p>
      </Dragger>
      <Text type="secondary">支持格式: .log / .txt / .json</Text>
    </>
  )
}

export default LogUploadArea