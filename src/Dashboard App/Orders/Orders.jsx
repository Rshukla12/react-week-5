import TextField from '@mui/material/TextField';
import { makeStyles } from "@mui/styles";
import Grid from "@mui/material/Grid";
import { Paper, Slider, Typography } from "@mui/material";
import { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useEffect } from 'react';

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'orders_size', headerName: 'Size', width: 70 },
    { field: 'full_name', headerName: 'Full name', width: 200 },
    { field: 'user_city', headerName: 'User City', width: 200 },
    { field: 'order_price', headerName: 'Order Price', type: 'number', width: 150 },
    { field: 'status', headerName: 'Status', width: 150},
    { field: 'created_at', headerName: 'Created at', width: 150},
    { field: 'days_to_finish', headerName: 'Duration', width: 200},
];

const useStyles = makeStyles((theme) => ({
    options: {
        display: "flex",
        gap: "2rem",
        justifyContent: "center",
        width: "10rem",
        padding: "1rem 8rem",
        marginLeft: "-5rem"
    },
}));

const Orders = () => {
    const styles = useStyles();
    const [price, setPrice] = useState(0);
    const [data, setData] = useState([]);

    const fetchData = () => {
        fetch( "http://localhost:3000/data" )
        .then( res => res.json() )
        .then( res => setData( res ) )
        .catch( err => console.log(err) )
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <Grid sx={{width: "80%", margin: "5rem 2rem"}}>
            <Grid container spacing={3}>
                <Grid item xl={3} lg={3} md={4} sm={6} xs={12}>
                    <Paper className={styles.options}>
                        <div>All</div>
                        <div>SHIPPED</div>
                        <div>PROCESSING</div>
                        <div>COMPLETED</div>
                    </Paper>
                </Grid>
                <Grid item xl={3} lg={3} md={4} sm={6} xs={12}>
                    <TextField type="date"/>
                </Grid>
                <Grid item xl={3} lg={3} md={4} sm={6} xs={12}>
                    <TextField type="date"/>
                </Grid>
                <Grid item xl={3} lg={3} md={4} sm={6} xs={12}>
                    <Paper sx={{padding: "0.5rem 1rem"}}>
                        <Typography variant="h6">
                            Price Range
                        </Typography>
                        <Slider
                            aria-label="Small steps"
                            defaultValue={0}
                            getAriaValueText={setPrice}
                            step={100}
                            marks
                            min={0.1}
                            max={600}
                            valueLabelDisplay="auto"
                        />
                    </Paper>
                </Grid>
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                    <div style={{ height: 640, width: '100%' }}>
                        <DataGrid
                            rows={data}
                            columns={columns}
                            pageSize={10}
                            rowsPerPageOptions={[10]}
                            checkboxSelection
                        />
                    </div>
                </Grid>
            </Grid>
        </Grid>
    )
};
export default Orders;