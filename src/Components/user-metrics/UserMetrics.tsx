import Card from "./Card"
import TrendChart from "./TrendChart"

const cardDetails = [
    {
        id: 1,
        title: 'Active Users',
        total: '1,234',
        change: 'pos',
        changeRate: '5' 
    },
    {
        id: 2,
        title: 'New Sign-Ups',
        total: '56',
        change: 'pos',
        changeRate: '10'
    },
    {
        id: 3,
        title: 'User Growth',
        total: '+12',
        change: 'neg',
        changeRate: '2'
    }
]
function UserMetrics() {
  return (
    <div className="px-[16px]">
        <div className="pb-[16px] dark:text-gray-400">Key Metrics</div>
        <div className="flex space-x-[16px] space-y-[16px]  w-full justify-between m">
            {
                cardDetails.map( det => <Card  key={det.id} details={det}/>)
            }
        </div>
        
        <div className="w-full py-8 px-4">
            <TrendChart />
        </div>
    </div>
  )
}

export default UserMetrics