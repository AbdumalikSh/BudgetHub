import React, { useEffect, useState } from "react";
import CustomPieChart from "../Charts/CustomPieChart";

const COLORS = ["#875CF5", "#FA2C37", "#FF6900", "#4F39F6"];

const RecentIncomeWithChart = ({ data, totalIncome }) => {
  const currency = import.meta.env.VITE_CURRENCY;

  const [chartData, setChartData] = useState([]);
  const prepareChartData = () => {
    if (!data || !Array.isArray(data) || data.length === 0) {
      setChartData([]);
      return;
    }
    const dataArr = data
      .filter((item) => item?.source && item?.amount)
      .map((item) => ({
        name: item?.source,
        amount: item?.amount,
      }));

    setChartData(dataArr);
  };

  useEffect(() => {
    prepareChartData();
    return () => {};
  }, [data]);

  if (!chartData || chartData.length === 0) {
    return (
      <div className="card">
        <div className="flex items-center justify-between">
          <h5 className="text-lg">Last 60 Days Income</h5>
        </div>
        <div className="p-8 text-center text-gray-500">
          No income data available for the last 60 days
        </div>
      </div>
    );
  }

  return (
    <div className="card">
      <div className="flex items-center justify-between">
        <h5 className="text-lg">Last 60 Days Income</h5>
      </div>

      <CustomPieChart
        data={chartData}
        label="Total Income"
        totalAmount={`${totalIncome} ${currency}`}
        colors={COLORS}
        showTextAnchor
      />
    </div>
  );
};

export default RecentIncomeWithChart;
