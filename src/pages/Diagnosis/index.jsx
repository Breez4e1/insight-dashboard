import { useMemo, useState } from 'react'
import { Card, Row, Col, Typography } from 'antd'
import { mockDiagnoses } from '@/mock'
import LogUploader from '@/components/filters/LogUploader'
import ErrorInput from '@/components/filters/ErrorInput'
import DiagnosisResult from '@/components/table/DiagnosisResult'

const { Title } = Typography

function Diagnosis() {
  const [uploadedLogName, setUploadedLogName] = useState('')
  const [errorText, setErrorText] = useState('')

  const filteredResults = useMemo(() => {
    const keyword = errorText.trim().toLowerCase()
    if (!keyword) return mockDiagnoses
    return mockDiagnoses.filter((item) => {
      const content = `${item.serverName} ${item.error} ${item.suggestion}`.toLowerCase()
      return content.includes(keyword)
    })
  }, [errorText])

  return (
    <div>
      <Title level={3} style={{ marginBottom: 24 }}>Diagnosis</Title>

      <Row gutter={[16, 16]}>
        <Col xs={24} lg={12}>
          <Card title="日志上传">
            <LogUploader onSelect={setUploadedLogName} />
          </Card>
        </Col>

        <Col xs={24} lg={12}>
          <Card title="错误输入">
            <ErrorInput value={errorText} onChange={setErrorText} />
          </Card>
        </Col>
      </Row>

      <Card style={{ marginTop: 16, marginBottom: 16 }}>
        日志文件: {uploadedLogName || '未选择'} | 关键词: {errorText || '未输入'}
      </Card>

      <DiagnosisResult data={filteredResults} />
    </div>
  )
}

export default Diagnosis
