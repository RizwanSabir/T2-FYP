import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';


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
  

const SimpleAreaChart = () => {
  return (
 
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
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
           <linearGradient id="gradient-1" x1="0" y1="0" x2="0" y2="1">
  <stop offset="5%" stopColor="#1E90FF" stopOpacity={0.8} />
  <stop offset="95%" stopColor="#87CEFA" stopOpacity={0.2} />
</linearGradient>
      </defs>
          <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
          <XAxis dataKey="name" 
            axisLine={false} 
            tickLine={false} 
            padding={{ left: 30, right: 30 }} />
          <YAxis   axisLine={false} 
            tickLine={false} 
            tickCount={5} />
          <Tooltip />
          <Area type="monotone" dataKey="Likes" stroke="#0A9B21" fill="url(#gradient-1)" />
        </AreaChart>
      </ResponsiveContainer>
     
  );
};

export default SimpleAreaChart;
