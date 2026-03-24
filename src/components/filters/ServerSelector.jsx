import { Select } from 'antd'

function ServerSelector({ options, value, onChange }) {
  return (
    <Select
      style={{ minWidth: 260 }}
      value={value}
      onChange={onChange}
      placeholder="ServerSelector"
      options={options}
    />
  )
}

export default ServerSelector
