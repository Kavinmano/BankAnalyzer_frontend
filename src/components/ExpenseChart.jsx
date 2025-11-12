import React from "react";
import { PieChart, Pie, Tooltip, Legend, Cell } from "recharts";

const ExpenseChart = ({ summary }) => {
  if (!summary || !summary.categories) return null;

  const COLORS = ["#ff6384", "#36a2eb", "#ffcd56", "#4bc0c0", "#9966ff"];

  return (
    <div style={{ marginTop: 20 }}>
      <h4>Top Expense Categories</h4>

      <PieChart width={400} height={300}>
        <Pie
          data={summary.categories}
          dataKey="amount"
          nameKey="category"
          cx="50%"
          cy="50%"
          outerRadius={110}
          label
        >
          {summary.categories.map((entry, index) => (
            <Cell key={index} fill={COLORS[index % COLORS.length]} />   // ✅ Cycle colors
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
};

export default ExpenseChart;
