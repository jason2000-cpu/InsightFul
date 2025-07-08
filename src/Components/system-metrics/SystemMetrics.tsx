import { useFetchData } from "../../hooks/useFetchData"
import Card from "../user-metrics/Card"


function SystemMetrics() {
    const { data, loading, error } = useFetchData('https://my.api.mockaroo.com/system_health_stats.json');

    if (loading) return <p>Loading....</p>
    if(error) return <p>{error}</p>


    return (
        <div className="px-[16px]">
            <div className="pb-[16px] font-bold text-[18px]">System Health</div>
            <div className="flex space-x-[16px] space-y-[16px]  w-full justify-between">
            { Array.isArray(data) && data.map(det => (
                <Card key={det.id} details={det} />
                )) }
            </div>
            
        </div>
    )
}

export default SystemMetrics