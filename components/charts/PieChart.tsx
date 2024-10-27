
import React from "react";
import { PieChart, Pie, Cell } from "recharts";


const COLORS = ["#808080", "#0000FF", "#FFBB28", "#FF8042"];

export default function PieChartSection({
  dataArr
}: { dataArr: { name: string, value: number }[] }) {
  return (
    <PieChart width={400} height={250}>
      <Pie
        data={dataArr}
      
        innerRadius={40}
        outerRadius={100}
        fill="#8884d8"
        paddingAngle={5}
        dataKey="value"
      >
        {dataArr.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    
      
    </PieChart>
  );
}
