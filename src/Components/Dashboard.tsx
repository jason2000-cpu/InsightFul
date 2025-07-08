import RevenueMetrics from "./revenue-metrics/RevenueMetrics"
import SystemMetrics from "./system-metrics/SystemMetrics"
import UserMetrics from "./user-metrics/UserMetrics"



function Dashboard() {
  return (
    <div className="px-[160px] py-[16px]">
      <div className=" space-y-2">
        <div className="font-bold text-2xl p-[16px] dark:text-gray-400">Dashboard</div>
         <UserMetrics />
         <RevenueMetrics />
         <SystemMetrics />
      </div>
    </div>
  )
}

export default Dashboard