import React from "react";
import Paper from "@mui/material/Paper"
import { BarChart, Bar } from 'recharts';

const data = [
  { date: "03-10-2020", status: "2" },
  { date: "04-10-2020", status: "3" },
  { date: "05-10-2020", status: "3" },
  { date: "06-10-2020", status: "4" },
  { date: "07-10-2020", status: "5" },
  { date: "08-10-2020", status: "6" },
  { date: "09-10-2020", status: "6" }
];

function BarChartApp() {
  return (
    <Paper>
      <BarChart width={860} height={400} data={data}>
        <Bar dataKey="status" fill="#8884d8" />
      </BarChart>
    </Paper>
  );
}

export default BarChartApp;
