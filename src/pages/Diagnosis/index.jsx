import { useMemo, useState } from 'react'
import { Card, Row, Col, Typography } from 'antd'
import { mockDiagnoses } from '@/mock'
import LogUploadArea from '@/components/Diagnosis/LogUploadArea'
import ErrorInputBox from '@/components/Diagnosis/ErrorInputBox'
import DiagnosisResultPanel from '@/components/Diagnosis/DiagnosisResultPanel'

const { Title } = Typography

function Diagnosis() {
  const [uploadedLogName, setUploadedLogName] = useState('')
  const [errorText, setErrorText] = useState('')

  const filteredResults = useMemo(() => {
    const keyword = errorText.trim().toLowerCase()
    if (!keyword) return mockDiagnoses
    return mockDiagnoses.filter((item) => {
      const content = `${item.device} ${item.fault} ${item.suggestion}`.toLowerCase()
      return content.includes(keyword)
    })
  }, [errorText])

  return (
    <div>
      <Title level={3} style={{ marginBottom: 24 }}>Diagnosis</Title>

      <Row gutter={[16, 16]}>
        <Col xs={24} lg={12}>
          <Card title="日志上传">
            <LogUploadArea onUploaded={setUploadedLogName} />
          </Card>
        </Col>

        <Col xs={24} lg={12}>
          <Card title="错误输入">
            <ErrorInputBox value={errorText} onChange={setErrorText} />
          </Card>
        </Col>
      </Row>

      <DiagnosisResultPanel
        uploadedLogName={uploadedLogName}
        errorText={errorText}
        results={filteredResults}
      />
    </div>
  )
}

export default Diagnosis
