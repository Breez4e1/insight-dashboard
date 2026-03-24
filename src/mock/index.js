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
  { id: 'i001', device: 'PLC-A01', location: '车间一', status: 'normal',  time: '2026-03-23 08:10' },
  { id: 'i002', device: 'PLC-A02', location: '车间一', status: 'warning', time: '2026-03-23 08:32' },
  { id: 'i003', device: 'PLC-B01', location: '车间二', status: 'error',   time: '2026-03-23 09:05' },
  { id: 'i004', device: 'PLC-B02', location: '车间二', status: 'normal',  time: '2026-03-23 09:20' },
  { id: 'i005', device: 'PLC-C01', location: '车间三', status: 'normal',  time: '2026-03-23 10:01' },
]

export const mockDiagnoses = [
  {
    id: 'd001',
    device: 'PLC-A02',
    fault: '电流过载',
    level: 'warning',
    suggestion: '检查负载是否超出额定范围，建议减少并发任务。',
    time: '2026-03-23 08:32',
  },
  {
    id: 'd002',
    device: 'PLC-B01',
    fault: '通信超时',
    level: 'error',
    suggestion: '检查网线连接及交换机端口状态，必要时重启设备。',
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
  { id: 's001', name: 'PLC-A01', ip: '192.168.1.10',  status: 'online',  cpu: 45,  memory: 62, disk: 38, health: 92 },
  { id: 's002', name: 'PLC-A02', ip: '192.168.1.11',  status: 'warning', cpu: 78,  memory: 85, disk: 71, health: 65 },
  { id: 's003', name: 'PLC-B01', ip: '192.168.1.20',  status: 'offline', cpu: 0,   memory: 0,  disk: 0,  health: 15 },
  { id: 's004', name: 'PLC-B02', ip: '192.168.1.21',  status: 'online',  cpu: 32,  memory: 48, disk: 25, health: 88 },
  { id: 's005', name: 'PLC-C01', ip: '192.168.1.30',  status: 'online',  cpu: 56,  memory: 71, disk: 52, health: 80 },
  { id: 's006', name: 'PLC-C02', ip: '192.168.1.31',  status: 'online',  cpu: 38,  memory: 55, disk: 42, health: 85 },
]

// 筛选选项
export const mockFilterOptions = {
  locations: [
    { label: '全部区域',    value: '' },
    { label: '车间一',     value: 'workshop_1' },
    { label: '车间二',     value: 'workshop_2' },
    { label: '车间三',     value: 'workshop_3' },
  ],
  statuses: [
    { label: '全部状态', value: '' },
    { label: '在线',     value: 'online' },
    { label: '告警',     value: 'warning' },
    { label: '离线',     value: 'offline' },
  ],
}
