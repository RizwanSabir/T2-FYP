import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const data = [
  {
    name: 'Jan',
    Likes: 4000,
    Comments: 2400,
    amt: 2400,
  },
  {
    name: 'Feb',
    Likes: 3000,
    Comments: 1398,
    amt: 2210,
  },
  {
    name: 'Mar',
    Likes: 2000,
    Comments: 9800,
    amt: 2290,
  },
  {
    name: 'Apr',
    Likes: 2780,
    Comments: 3908,
    amt: 2000,
  },
  {
    name: 'May',
    Likes: 1890,
    Comments: 4800,
    amt: 2181,
  },
  {
    name: 'Jun',
    Likes: 2390,
    Comments: 3800,
    amt: 2500,
  },
  {
    name: 'July',
    Likes: 3490,
    Comments: 4300,
    amt: 2100,
  },

 
];


const SimpleBarChart = () => {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 5,
            left: 5,
            bottom: 10,
          }}
        >
          <defs>
            <linearGradient id="gradient-pv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0.2} />
            </linearGradient>
            <linearGradient id="gradient-uv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0.2} />
            </linearGradient>
          </defs>
          <XAxis 
            dataKey="name" 
            axisLine={false} 
            tickLine={false} 
            padding={{ left: 30, right: 30 }} 
          />
          <YAxis 
            axisLine={false} 
            tickLine={false} 
            tickCount={5}
          />
          <Tooltip />
          <Bar dataKey="Likes" stroke="#8884d8" fill="url(#gradient-pv)" />
          <Bar dataKey="Comments" stroke="#82ca9d" fill="url(#gradient-uv)" />
        </BarChart>
      </ResponsiveContainer>
      <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', padding: '10px' }}>
        <Legend verticalAlign="top" align="center" iconType="rect" />
      </div>
    </div>
  );
};

export default SimpleBarChart;
