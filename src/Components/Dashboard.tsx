import Metrics from "./user-metrics/Metrics"


function Dashboard() {
  return (
    <div className="px-[160px] py-[16px]">
      <div className=" space-y-2">
        <div className="font-bold text-2xl p-[16px]">Dashboard</div>
         <Metrics />
      </div>
    </div>
  )
}

export default Dashboard