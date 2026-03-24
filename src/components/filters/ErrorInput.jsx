import { Input } from 'antd'

const { TextArea } = Input

function ErrorInput({ value, onChange }) {
  return (
    <TextArea
      rows={5}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="ErrorInput"
    />
  )
}

export default ErrorInput
