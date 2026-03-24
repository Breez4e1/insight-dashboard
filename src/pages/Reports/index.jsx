import { Row, Col, Typography } from 'antd'
import {
  mockReportHeader,
  mockHealthScore,
  mockIssueSummary,
  mockRisks,
} from '@/mock'
import ReportHeader from '@/components/Reports/ReportHeader'
import HealthScoreSection from '@/components/Reports/HealthScoreSection'
import IssueSummarySection from '@/components/Reports/IssueSummarySection'
import RiskPanel from '@/components/Reports/RiskPanel'
import DownloadButtons from '@/components/Reports/DownloadButtons'

const { Title } = Typography

function Reports() {
  return (
    <div>
      <Title level={3} style={{ marginBottom: 24 }}>Reports</Title>

      <ReportHeader data={mockReportHeader} />

      <Row gutter={[16, 16]} style={{ marginBottom: 16 }}>
        <Col xs={24} lg={10}>
          <HealthScoreSection data={mockHealthScore} />
        </Col>
        <Col xs={24} lg={14}>
          <RiskPanel risks={mockRisks} />
        </Col>
      </Row>

      <IssueSummarySection items={mockIssueSummary} />

      <DownloadButtons />
    </div>
  )
}

export default Reports
