import {
    BarChart,
    Bar,
    XAxis,
    Tooltip,
    ResponsiveContainer,
  } from 'recharts';

import { useFetchData } from '../../hooks/useFetchData';
interface RevenueDataPoint {
  name: string;
  revenue: number;
  cap: number;
}
  
export default function RevenueChartWidget() {
  const totalRevenue = 12345;
  const growth = 15;

  const { data = [], loading, error } = useFetchData<RevenueDataPoint>(
    'https://my.api.mockaroo.com/revenue_chart.json'
  );

  if (loading) return <p>Loading...</p>;
  if(error) return <p>{error}</p>

  console.log("REVENUE DATA", data);

  return (
    <div className="bg-white dark:bg-[#21364A] rounded-lg shadow p-4">
      <h2 className="text-sm font-medium text-gray-500">Monthly Revenue</h2>
      <p className="text-2xl font-bold text-gray-900 dark:text-gray-300">${totalRevenue.toLocaleString()}</p>
      <p className="text-sm text-green-600">This Month +{growth}%</p>

      <div className="mt-4" style={{ width: '100%', height: 200 }}>
        <ResponsiveContainer>
          <BarChart data={data || []} barGap={0}>
            <XAxis dataKey="name" axisLine={false} tickLine={false} />
            <Tooltip />
              <Bar
                  dataKey="revenue"
                  fill="#E5E7EB"
                  stackId="a"
              />

              <Bar
                  dataKey="cap"
                  fill="#4B5563"
                  stackId="a" 
                  radius={[3, 3, 0, 0]}
              />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
  