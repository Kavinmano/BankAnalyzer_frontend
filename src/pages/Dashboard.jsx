import React, { useState } from "react";
import FileUpload from "../components/FileUpload";
import SummaryCard from "../components/SummaryCard";
import ExpenseChart from "../components/ExpenseChart";

const Dashboard = () => {
  const [summary, setSummary] = useState(null);

  return (
    <div style={{ padding: 20 }}>
      <h1>Bank Statement Analyzer</h1>

      <FileUpload setResult={setSummary} />

      {summary && (
        <>
          <SummaryCard summary={summary} />
          <ExpenseChart summary={summary} />

          <h4>🔁 Recurring Payments:</h4>
          {summary.recurring.length ? (
            summary.recurring.map((r, i) => (
              <p key={i}>{r.description} ({r.occurrences} times)</p>
            ))
          ) : (
            <p>No Recurring Transactions</p>
          )}
        </>
      )}
    </div>
  );
};

export default Dashboard;
