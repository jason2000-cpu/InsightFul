import {
    BarChart,
    Bar,
    XAxis,
    Tooltip,
    ResponsiveContainer,
  } from 'recharts';
  
  const data = [
    { name: 'Jan', revenue: 2400, cap: 200 },
    { name: 'Feb', revenue: 2600, cap: 200 },
    { name: 'Mar', revenue: 1000, cap: 100 },
    { name: 'Apr', revenue: 1000, cap: 100 },
    { name: 'May', revenue: 3500, cap: 200 },
    { name: 'Jun', revenue: 2500, cap: 200 },
    { name: 'Jul', revenue: 3000, cap: 200 },
  ];
  
  export default function RevenueChartWidget() {
    const totalRevenue = 12345;
    const growth = 15;
  
    return (
      <div className="bg-white dark:bg-[#21364A] rounded-lg shadow p-4">
        <h2 className="text-sm font-medium text-gray-500">Monthly Revenue</h2>
        <p className="text-2xl font-bold text-gray-900 dark:text-gray-300">${totalRevenue.toLocaleString()}</p>
        <p className="text-sm text-green-600">This Month +{growth}%</p>
  
        <div className="mt-4" style={{ width: '100%', height: 200 }}>
          <ResponsiveContainer>
            <BarChart data={data} barGap={0}>
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
  