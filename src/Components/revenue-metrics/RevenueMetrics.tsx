import Card from "../user-metrics/Card"
import RevenueChartWidget from "./RevenueChartWidget"


const cardDetails = [
    {
        id: 1,
        title: "Monthly Revenue",
        total: "12, 345",
        change: "pos",
        changeRate: '15'
    },
    {
        id: 2,
        title: "Total Sales",
        total: "678",
        change: "pos",
        changeRate: '10'
    }
]

function RevenueMetrics() {
  return (
    <div className="px-[16px]">
        <div className="pb-[16px]">Revenue Overview</div>
        <div className="flex space-x-[16px] space-y-[16px]  w-full justify-between">
            {
                cardDetails.map( det => <Card  key={det.id} details={det}/>)
            }
        </div>
        
        <div className="w-full py-8 px-4">
            <RevenueChartWidget />
        </div>
    </div>
  )
}

export default RevenueMetrics