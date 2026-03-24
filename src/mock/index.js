/**
 * Mock 数据集中管理
 * 后续接入真实 API 时，只需修改 api/ 目录下的请求，这里的数据可直接复用做对照。
 */

export const mockStats = [
  { label: '今日检测数',   value: 128,  suffix: '次', up: true,  change: 12 },
  { label: '异常设备数',   value: 7,    suffix: '台', up: false, change: 3  },
  { label: '诊断完成率',   value: 94.3, suffix: '%',  up: true,  change: 2  },
  { label: '待处理报告',   value: 5,    suffix: '份', up: false, change: 1  },
]

export const mockInspections = [
  { id: 'i001', serverId: 's001', serverName: 'Server-A01', status: 'healthy', summary: 'All checks passed', time: '2026-03-23 08:10' },
  { id: 'i002', serverId: 's002', serverName: 'Server-A02', status: 'warning', summary: 'High memory usage', time: '2026-03-23 08:32' },
  { id: 'i003', serverId: 's003', serverName: 'Server-B01', status: 'critical', summary: 'Offline detected', time: '2026-03-23 09:05' },
  { id: 'i004', serverId: 's004', serverName: 'Server-B02', status: 'healthy', summary: 'All checks passed', time: '2026-03-23 09:20' },
  { id: 'i005', serverId: 's005', serverName: 'Server-C01', status: 'healthy', summary: 'All checks passed', time: '2026-03-23 10:01' },
]

export const mockDiagnoses = [
  {
    id: 'd001',
    serverName: 'Server-A02',
    error: 'Memory overflow detected in player process',
    level: 'warning',
    suggestion: 'Restart player service and review memory limit settings.',
    time: '2026-03-23 08:32',
  },
  {
    id: 'd002',
    serverName: 'Server-B01',
    error: 'Network timeout between screen controller and gateway',
    level: 'error',
    suggestion: 'Check switch port and gateway heartbeat policy.',
    time: '2026-03-23 09:05',
  },
]

export const mockReports = [
  { id: 'r001', name: '周检测报告 2026-03-17', type: 'weekly',  status: 'done',    size: '2.3 MB', date: '2026-03-17' },
  { id: 'r002', name: '日检测报告 2026-03-22', type: 'daily',   status: 'done',    size: '0.8 MB', date: '2026-03-22' },
  { id: 'r003', name: '日检测报告 2026-03-23', type: 'daily',   status: 'pending', size: '-',      date: '2026-03-23' },
  { id: 'r004', name: '月度诊断报告 2026-02',  type: 'monthly', status: 'done',    size: '6.1 MB', date: '2026-02-28' },
]

export const mockReportHeader = {
  title: '系统健康评估报告',
  period: '2026-03-17 ~ 2026-03-23',
  generatedAt: '2026-03-23 18:30',
  owner: '智能巡检平台',
}

export const mockHealthScore = {
  score: 86,
  trend: '+4',
  level: '良好',
}

export const mockIssueSummary = [
  { key: 'critical', label: '严重问题', count: 1, color: '#ff4d4f' },
  { key: 'warning', label: '一般告警', count: 5, color: '#faad14' },
  { key: 'info', label: '提示项', count: 9, color: '#1677ff' },
]

export const mockRisks = [
  {
    id: 'risk-1',
    level: 'high',
    title: 'PLC-B01 离线时长较高',
    desc: '连续离线超过 120 分钟，建议优先排查网络链路。',
  },
  {
    id: 'risk-2',
    level: 'medium',
    title: 'PLC-A02 负载接近阈值',
    desc: 'CPU 与内存高于 80% 的时间占比持续上升。',
  },
  {
    id: 'risk-3',
    level: 'low',
    title: '部分设备日志上报延迟',
    desc: '建议检查日志采集批次与上传策略。',
  },
]

// 趋势图 Mock 数据（折线图用）
export const mockTrendData = {
  dates:    ['03-17', '03-18', '03-19', '03-20', '03-21', '03-22', '03-23'],
  detected: [98, 115, 107, 130, 122, 118, 128],
  errors:   [4,  6,   3,   8,   5,   4,   7],
}

// ─────────────────────────────────────────────────────────────
// Dashboard 页面相关 Mock 数据
// ─────────────────────────────────────────────────────────────

// 告警面板数据
export const mockAlerts = [
  { id: 'a001', level: 'error',   title: 'PLC-A02 电流过载',    desc: '实时电流 125A，超出额定 110A', time: '2026-03-23 14:32' },
  { id: 'a002', level: 'warning', title: 'PLC-B01 通信超时',   desc: '最后心跳 45 秒前',           time: '2026-03-23 14:28' },
  { id: 'a003', level: 'warning', title: 'PLC-C03 温度告警',   desc: '设备温度 78°C，接近上限',    time: '2026-03-23 14:15' },
]

// 健康指标（仪表盘、圆形进度指示）
export const mockHealthMetrics = {
  systemHealth:  85,  // 系统健康度 0-100
  deviceStatus:  92,  // 设备在线率 0-100
  uptime:        99.8, // 运行时间 0-100
}

// 服务器/设备列表（仪表）
export const mockServers = [
  {
    id: 's001',
    name: 'Server-A01',
    sn: 'SN-A01',
    region: 'north',
    cinema: 'Cinema One',
    screen: 'Screen 1',
    model: 'X100',
    status: 'healthy',
    healthScore: 95,
    lastCheck: '2026-03-23 10:10',
  },
  {
    id: 's002',
    name: 'Server-A02',
    sn: 'SN-A02',
    region: 'north',
    cinema: 'Cinema One',
    screen: 'Screen 2',
    model: 'X100',
    status: 'warning',
    healthScore: 72,
    lastCheck: '2026-03-23 10:08',
  },
  {
    id: 's003',
    name: 'Server-B01',
    sn: 'SN-B01',
    region: 'south',
    cinema: 'Cinema Two',
    screen: 'Screen 5',
    model: 'X200',
    status: 'critical',
    healthScore: 38,
    lastCheck: '2026-03-23 09:55',
  },
  {
    id: 's004',
    name: 'Server-B02',
    sn: 'SN-B02',
    region: 'south',
    cinema: 'Cinema Two',
    screen: 'Screen 6',
    model: 'X200',
    status: 'healthy',
    healthScore: 88,
    lastCheck: '2026-03-23 10:01',
  },
  {
    id: 's005',
    name: 'Server-C01',
    sn: 'SN-C01',
    region: 'east',
    cinema: 'Cinema Three',
    screen: 'Screen 3',
    model: 'X300',
    status: 'healthy',
    healthScore: 90,
    lastCheck: '2026-03-23 10:11',
  },
  {
    id: 's006',
    name: 'Server-C02',
    sn: 'SN-C02',
    region: 'east',
    cinema: 'Cinema Three',
    screen: 'Screen 4',
    model: 'X300',
    status: 'warning',
    healthScore: 67,
    lastCheck: '2026-03-23 10:06',
  },
]

// 筛选选项
export const mockFilterOptions = {
  regions: [
    { label: 'All Region', value: '' },
    { label: 'North', value: 'north' },
    { label: 'South', value: 'south' },
    { label: 'East', value: 'east' },
  ],
  cinemas: [
    { label: 'All Cinema', value: '' },
    { label: 'Cinema One', value: 'Cinema One' },
    { label: 'Cinema Two', value: 'Cinema Two' },
    { label: 'Cinema Three', value: 'Cinema Three' },
  ],
  screens: [
    { label: 'All Screen', value: '' },
    { label: 'Screen 1', value: 'Screen 1' },
    { label: 'Screen 2', value: 'Screen 2' },
    { label: 'Screen 3', value: 'Screen 3' },
    { label: 'Screen 4', value: 'Screen 4' },
    { label: 'Screen 5', value: 'Screen 5' },
    { label: 'Screen 6', value: 'Screen 6' },
  ],
  statuses: [
    { label: 'All Status', value: '' },
    { label: 'Healthy', value: 'healthy' },
    { label: 'Warning', value: 'warning' },
    { label: 'Critical', value: 'critical' },
  ],
}
