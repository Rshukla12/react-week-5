import { makeStyles } from '@mui/styles';
import {
  Card,
  CardContent,
  Typography,
  Divider
} from "@mui/material";
import React from "react";

const useStyles = makeStyles(() => ({
  header: {
    textTransform: "uppercase"
  }
}));

function CardBar({ title, chart }) {
  const styles = useStyles();
  return (
    <>
      <Card>
        <CardContent>
          <Typography className={styles.header} color="textPrimary">
            {title}
          </Typography>
          <Divider />
          {chart}
        </CardContent>
      </Card>
    </>
  );
}

export default CardBar;
