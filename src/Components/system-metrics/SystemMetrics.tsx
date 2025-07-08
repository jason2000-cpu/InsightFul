import Card from "../user-metrics/Card"

const cardDetails = [
    {
        id: 1,
        title: 'System Uptime',
        total: '99.9%',
        change: 'pos',
        changeRate:' 0.1',
    },
    {
        id: 2, 
        title: 'Server Status',
        total: 'Online',
        change: 'pos',
        changeRate: 'N/A'
    },
    {
        id: 3, 
        title: 'Critical Alerts',
        total: '0',
        change: 'pos',
        changeRate: 'N/A'
    }
]

function SystemMetrics() {
  return (
    <div className="px-[16px]">
        <div className="pb-[16px] font-bold text-[18px]">System Health</div>
        <div className="flex space-x-[16px] space-y-[16px]  w-full justify-between">
            {
                cardDetails.map( details => <Card key={details.id} details={details} />)
            }
        </div>
        
    </div>
  )
}

export default SystemMetrics