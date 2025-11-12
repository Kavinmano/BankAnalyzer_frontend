const SummaryCard = ({ summary }) => {
  if (!summary) return null;

  return (
    <div style={{ padding: 20, border: "1px solid #aaa", width: 350, margin: "10px 0" }}>
      <h3>📊 Monthly Summary</h3>
      <p><b>Total Income:</b> ₹{summary.totalIncome}</p>
      <p><b>Total Expenses:</b> ₹{summary.totalExpense}</p>
      <p><b>Net Savings:</b> ₹{summary.netSavings}</p>
    </div>
  );
};

export default SummaryCard;
