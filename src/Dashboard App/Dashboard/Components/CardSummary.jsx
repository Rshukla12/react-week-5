import { makeStyles } from '@mui/styles';
import { Card, CardContent, Typography, Divider } from "@mui/material";
import React from "react";

const useStyles = makeStyles(() => ({
  header: {
    textTransform: "uppercase"
  }
}));

function CardSummary({ title, value, footer }) {
  const styles = useStyles();
  return (
    <>
      <Card>
        <CardContent>
          <Typography
            gutterBottom
            className={styles.header}
            color="textPrimary"
          >
            {title}
          </Typography>
          <Divider />
          <Typography variant="h3" color="textPrimary">
            {value}
          </Typography>
          <div>{footer}</div>
        </CardContent>
      </Card>
    </>
  );
}

export default CardSummary;
