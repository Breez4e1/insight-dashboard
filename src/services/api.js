import {
  mockServers,
  mockInspections,
  mockDiagnoses,
  mockReportHeader,
  mockHealthScore,
  mockIssueSummary,
  mockRisks,
} from '@/mock'

const wait = (ms = 250) => new Promise((resolve) => setTimeout(resolve, ms))

export async function getServers() {
  await wait()
  return [...mockServers]
}

export async function runInspection(serverIds = []) {
  await wait()
  if (!serverIds.length) return [...mockInspections]
  return mockInspections.filter((item) => serverIds.includes(item.serverId))
}

export async function runDiagnosis(keyword = '') {
  await wait()
  const text = keyword.trim().toLowerCase()
  if (!text) return [...mockDiagnoses]
  return mockDiagnoses.filter((item) => {
    const payload = `${item.serverName} ${item.error} ${item.suggestion}`.toLowerCase()
    return payload.includes(text)
  })
}

export async function getReport() {
  await wait()
  return {
    header: mockReportHeader,
    healthScore: mockHealthScore,
    issueSummary: mockIssueSummary,
    risks: mockRisks,
  }
}
