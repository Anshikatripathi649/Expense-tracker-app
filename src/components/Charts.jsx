 import { PieChart, Pie, Tooltip, Legend, Cell } from "recharts";

 const CATEGORY_COLORS = {
  "Grocery": "#ff3c77",       // Pink
  "Transport": "#FFBB28",     // Yellow
  "Food": "#00C49F",          // Green
  "Entertainment": "#0088FE", // Blue
  "Other": "#8884d8"          // Default/Fallback
};

const formatCategory = (category) => {
  if (!category) return "Other";
  const trimmed = category.trim();
  // Capitalize first letter, lowercase the rest
  return trimmed.charAt(0).toUpperCase() + trimmed.slice(1).toLowerCase();
};

const Charts = ({expenseData}) => {
   if (!expenseData || expenseData.length === 0) return null;

  const chartData = expenseData.reduce((acc, expense) => {
    const rawCategory = expense.category;
     const category = formatCategory(rawCategory);
    const amount = Number(expense.amount);

     if (!category || !amount) return acc;

    const existing = acc.find(item => item.name === category);
    if (existing) {
    existing.value += amount;
  } else {
    acc.push({ name: category, value: amount });
  }

  return acc;

  }, [])
  return (
     <div className="border pb-3 me-5">
      <h6 className="border p-2">EXPENSE CHARTS</h6>
       <PieChart width={200} height={200} >
         <Pie
          data={chartData}
          dataKey="value"
          nameKey="name"
          outerRadius={60}
        >
           {chartData.map((entry, index) => (
            <Cell 
              key={index} 
              fill={CATEGORY_COLORS[entry.name] || CATEGORY_COLORS["Other"]} 
            />
          ))}
        </Pie>
        <Tooltip  />
        <Legend />
       </PieChart >
      </div>
  );
}

export default Charts;
