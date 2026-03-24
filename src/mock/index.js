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

// 趋势图 Mock 数据（折线图用）
export const mockTrendData = {
  dates:    ['03-17', '03-18', '03-19', '03-20', '03-21', '03-22', '03-23'],
  detected: [98, 115, 107, 130, 122, 118, 128],
  errors:   [4,  6,   3,   8,   5,   4,   7],
}
