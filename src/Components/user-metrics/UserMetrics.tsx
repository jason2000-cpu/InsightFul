import { useFetchData } from "../../hooks/useFetchData";
import Card from "./Card"
import TrendChart from "./TrendChart"


type UserStat = {
    id: number;
    title: string;
    total: string;
    change: string;
    changeRate: string;
  };

function UserMetrics() {
    const { data, loading, error } = useFetchData<UserStat[]>(
        'https://my.api.mockaroo.com/user_stats.json'
      );

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    console.log("REVENUE DATA", data);


    return (
        <div className="px-[16px]">
            <div className="pb-[16px] dark:text-gray-400">Key Metrics</div>
            <div className="flex space-x-[16px] space-y-[16px]  w-full justify-between m">
                { Array.isArray(data) && data.map(det => (
                <Card key={det.id} details={det} />
                )) }
            </div>
            
            <div className="w-full py-8 px-4">
                <TrendChart />
            </div>
        </div>
    )
}

export default UserMetrics