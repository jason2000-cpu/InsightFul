import Card from "../user-metrics/Card"


const cardDetails = [
    {
        id: 1,
        title: "Monthly Revenue",
        change: "pos",
        changeRate: 15
    },
    {
        id: 2,
        title: "Total Sales",
        change: "pos",
        changeRate: 8
    }
]

function Metrics() {
  return (
    <div className="px-[16px]">
        <div className="pb-[16px]">Revenue Overview</div>
        <div className="flex space-x-[16px] space-y-[16px]  w-full justify-between m">
            {
                cardDetails.map( det => <Card  key={det.id} details={det}/>)
            }
        </div>
        
        <div className="w-full py-8 px-4">

        </div>
    </div>
  )
}

export default Metrics