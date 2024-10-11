import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

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
  {
    name: 'Aug',
    Likes: 3490,
    Comments: 4300,
    amt: 2100,
  },
  {
    name: 'Sep',
    Likes: 3490,
    Comments: 4300,
    amt: 2100,
  },
  {
    name: 'Oct',
    Likes: 3490,
    Comments: 4300,
    amt: 2100,
  },
  {
    name: 'Nov',
    Likes: 3490,
    Comments: 4300,
    amt: 2100,
  },
  {
    name: 'Dec',
    Likes: 3490,
    Comments: 4300,
    amt: 2100,
  },
];

const SimpleLineChart = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
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
        <CartesianGrid strokeDasharray="3 3" vertical={false} horizontal={true} />
        <XAxis 
          dataKey="name" 
          axisLine={false} 
          tickLine={false} 
          padding={{ left: 30, right: 30 }}
        />
        <YAxis 
          axisLine={false} 
          tickLine={false} 
          tickCount={4}
        />
        <Tooltip />
      
        <Line type="monotone" dataKey="Likes" stroke="blue" fill="url(#gradient-1)" dot={false} />
        <Line type="monotone" dataKey="Comments" stroke="#82ca9d" dot={false} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default SimpleLineChart;
