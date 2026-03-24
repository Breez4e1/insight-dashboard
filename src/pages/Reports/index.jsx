import { Row, Col, Typography } from 'antd'
import {
  mockReportHeader,
  mockHealthScore,
  mockIssueSummary,
  mockRisks,
} from '@/mock'
import ReportHeader from '@/components/Dashboard/ReportHeader'
import HealthScoreBar from '@/components/Dashboard/HealthScoreBar'
import IssueSection from '@/components/Dashboard/IssueSection'
import RiskPanel from '@/components/Dashboard/RiskPanel'
import DownloadButtons from '@/components/actions/DownloadButtons'

const { Title } = Typography

function Reports() {
  return (
    <div>
      <Title level={3} style={{ marginBottom: 24 }}>Reports</Title>

      <ReportHeader data={mockReportHeader} />

      <Row gutter={[16, 16]} style={{ marginBottom: 16 }}>
        <Col xs={24} lg={10}>
          <HealthScoreBar data={mockHealthScore} />
        </Col>
        <Col xs={24} lg={14}>
          <RiskPanel data={mockRisks} />
        </Col>
      </Row>

      <IssueSection data={mockIssueSummary} />

      <DownloadButtons />
    </div>
  )
}

export default Reports
