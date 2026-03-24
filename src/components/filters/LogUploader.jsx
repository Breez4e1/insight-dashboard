import { Upload } from 'antd'
import { InboxOutlined } from '@ant-design/icons'

const { Dragger } = Upload

function LogUploader({ onSelect }) {
  return (
    <Dragger
      multiple={false}
      showUploadList={false}
      accept=".log,.txt,.json"
      beforeUpload={(file) => {
        onSelect(file.name)
        return false
      }}
    >
      <p className="ant-upload-drag-icon">
        <InboxOutlined />
      </p>
      <p className="ant-upload-text">LogUploader</p>
      <p className="ant-upload-hint">Mock only, no backend upload</p>
    </Dragger>
  )
}

export default LogUploader
