import { useFetchData } from "../../hooks/useFetchData"
import Card from "../user-metrics/Card"
import RevenueChartWidget from "./RevenueChartWidget"


function RevenueMetrics() {

    const { data, loading, error } = useFetchData('');

    if (loading) return <p>Loading....</p>
    if(error) return <p>{error}</p>
    
    return (
        <div className="px-[16px]">
            <div className="pb-[16px]">Revenue Overview</div>
            <div className="flex space-x-[16px] space-y-[16px]  w-full justify-between">
                { Array.isArray(data) && data.map(det => (
                    <Card key={det.id} details={det} />
                )) }
            </div>
            
            <div className="w-full py-8 px-4">
                <RevenueChartWidget />
            </div>
        </div>
    )
}

export default RevenueMetrics