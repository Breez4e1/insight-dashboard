import { Input, Typography } from 'antd'

const { Text } = Typography
const { TextArea } = Input

function ErrorInputBox({ value, onChange }) {
  return (
    <>
      <TextArea
        rows={7}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="粘贴错误信息或输入关键词，例如: 通信超时、电流过载"
      />
      <Text type="secondary">输入内容将用于筛选 mock 诊断结果</Text>
    </>
  )
}

export default ErrorInputBox