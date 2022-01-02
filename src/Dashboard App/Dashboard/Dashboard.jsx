import React from "react";
import { Grid } from "@mui/material";
import PieChartComponent from "./Components/PieChart";
import BarChartApp from "./Components/BarChart";
import CardBar from "./Components/CardBar";
import CardSummary from "./Components/CardSummary";

function Dashboard() {

  return (
    <Grid sx={{width: "80%", margin: "5rem 2rem"}}>
      <Grid container spacing={3}>
        <Grid item xl={3} lg={3} md={4} sm={6} xs={12}>
          <CardSummary
            title="Sales Today"
            value={51}
            footer={<div> 24% increase from yesterday </div>}
          />
        </Grid>
        <Grid item xl={3} lg={3} md={4} sm={6} xs={12}>
          <CardSummary
            title="Order Processed"
            value={42}
            footer={<div> 8% increase from yesterday </div>}
          />
        </Grid>
        <Grid item xl={3} lg={3} md={4} sm={6} xs={12}>
            <CardSummary
            title="Total Sales this week"
            value={900}
            footer={<div> 20% increase from last week </div>}
            />
        </Grid>
        <Grid item xl={3} lg={3} md={4} sm={6} xs={12}>
          <CardSummary
            title="Orders Processed this week"
            value={`78%`}
            footer={<div> 5% decrease from last week </div>}
          />
        </Grid>
        <Grid item xl={8} lg={8} md={12} sm={12} xs={12}>
          <CardBar title="Orders" chart={<BarChartApp />} />
        </Grid>
        <Grid item xl={4} lg={4} md={12} sm={12} xs={12}>
          <CardBar title="Order Status" chart={<PieChartComponent />} />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Dashboard;
