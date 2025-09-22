"use client";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", sent: 4000, opened: 2400 },
  { name: "Feb", sent: 3000, opened: 1398 },
  { name: "Mar", sent: 2000, opened: 9800 },
  { name: "Apr", sent: 2780, opened: 3908 },
  { name: "May", sent: 1890, opened: 4800 },
  { name: "Jun", sent: 2390, opened: 3800 },
  { name: "Jul", sent: 3490, opened: 4300 },
];

export function EmailCampaignPerformanceChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="opened"
          stroke="#8884d8"
          fill="#8884d8"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
