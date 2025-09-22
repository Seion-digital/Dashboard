"use client";

import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [{ name: "Success", value: 87 }];
const COLORS = ["#0088FE", "#CCCCCC"];

export function SuccessMetricsGaugeChart() {
  const value = data[0].value;
  const chartData = [
    { name: "Success", value: value },
    { name: "Remaining", value: 100 - value },
  ];

  return (
    <ResponsiveContainer width="100%" height={200}>
      <PieChart>
        <Pie
          data={chartData}
          cx="50%"
          cy="50%"
          startAngle={180}
          endAngle={0}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {chartData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          className="text-2xl font-bold"
        >
          {`${value}%`}
        </text>
      </PieChart>
    </ResponsiveContainer>
  );
}
