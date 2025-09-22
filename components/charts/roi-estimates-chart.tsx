"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Social Media Automation", roi: 150 },
  { name: "Chatbot", roi: 200 },
  { name: "Email Campaigns", roi: 120 },
];

export function RoiEstimatesChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="roi" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
}
