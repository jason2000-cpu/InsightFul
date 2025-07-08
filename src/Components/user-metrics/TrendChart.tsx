import {
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    AreaChart,
    Area,
  } from 'recharts';
import { useFetchData } from '../../hooks/useFetchData';
  
  
export default function TrendChart() {

    const { data, loading, error} = useFetchData("https://my.api.mockaroo.com/user_chart_data.json");

    if(loading) return <p>Loading...</p>
    if(error) return <p>{error}</p>

    return (
      <div className="w-full rounded-lg border dark:border-gray-500 border-[#DBE0E5] p-6">
        <h2 className="text-sm text-gray-500 mb-1 ">User Growth Trend</h2>
        <p className="text-2xl font-bold dark:text-gray-300">+12%</p>
        <p className="text-xs text-gray-500">
          Last 30 Days <span className="text-green-500">+2%</span>
        </p>
  
        <div className="mt-4 w-full h-40">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data || []}>
              <defs>
                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#61758A" stopOpacity={0.2} />
                  <stop offset="95%" stopColor="#61758A" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="name" />
              <YAxis domain={['dataMin', 'dataMax']} />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="value"
                stroke="#61758A"
                fillOpacity={1}
                fill="url(#colorValue)"
                strokeWidth={2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
}
  