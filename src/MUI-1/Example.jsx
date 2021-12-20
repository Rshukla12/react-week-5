import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import MenuItem from "@mui/material/MenuItem";
import { makeStyles } from "@mui/styles";

import Upload from "@mui/icons-material/Upload";

const countries = [
    {
      value: 'India',
      label: 'India',
    },
    {
      value: 'US',
      label: 'US',
    },
    {
      value: 'UK',
      label: 'UK',
    },
    {
      value: 'Japan',
      label: 'Japan',
    },
  ];

const useStyles = makeStyles({
	paper: {
		height: "8rem",
		margin: "2rem",
		padding: "1rem",
	}
});

const Example = () => {
    const [isChecked, setIsChecked] = React.useState(false);
    const [name, setName] = React.useState("");
    const [country, setCountry] = React.useState("");
    const classes = useStyles();   
    return (
        <Container maxWidth="xl" className="App">
            {/* Problem 1 */}
            <Container>
                <Grid container spacing={2}>
                    {
                        [1,2,3,4,5,6,7,8,9,10,11,12].map( num => ( 
                            <Grid xs={12} sm={6} md={4} lg={3} xl={2} key={num} item>
                                <Paper className={classes.paper}>{num}</Paper>
                            </Grid>
                        ))
                    }
                </Grid>
            </Container>
            
            {/* Problem 2 */}

            <Container>
                <Box>
                    <Button variant="contained">Hello</Button>
                </Box>
                <Box>
                    <Button variant="outlined" color="primary">Hello</Button>
                </Box>

                <Box>
                    <Button startIcon={<Upload />} variant="contained">
                        {" "}
                        Upload
                    </Button>
                </Box>
                <Box>
                    <Checkbox checked={isChecked} onChange={()=>setIsChecked(!isChecked)} />
                </Box>
                <Box>
                    <TextField label="name" required variant="outlined" value={name} onChange={(e)=>setName(e.target.value)}/>
                </Box>
                <Box>
                    <TextField
                        select
                        label="Select"
                        value={country}
                        onChange={(e)=>setCountry(e.target.value)}
                        helperText="Please select your country"
                        variant="filled"
                    >
                        {countries.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                            {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                </Box>
                <Box>
                    <TextField
                        inputFormat="MM/dd/yyyy"
                        type="date"
                    />
                </Box>
            </Container>

            
            {/* Problem 3 */}

            <Container>

            </Container>
        </Container>
    );
}

export default Example;