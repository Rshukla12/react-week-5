import { Button, Container } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router"

const Task = () => {
    const { id } = useParams();
    const history = useHistory();
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    
    
    const fetchTask = () => {
        fetch(`https://fake-rjson-server-pro.herokuapp.com/task/${id}`)
        .then( res => res.json())
        .then( res => setData(res) )
        .catch( err => {
            console.log(err);
            setIsError(true);
        })
        .finally( () => setLoading(false) )
    }

    const updateStatus = () => {
        setLoading(true)

        const payload = {
            ...data,
            status: !data.status
        }

        const config = {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        }

        fetch("https://fake-rjson-server-pro.herokuapp.com/task/"+id, config)
        .then( res => fetchTask())
        .catch( err => {
            console.log(err);
            setIsError(true);
        })
        .finally( () => setLoading(false) )
    };

    const deleteTask = () => {
        setLoading(true)

        const config = {
            method: "DELETE"
        }

        fetch("https://fake-rjson-server-pro.herokuapp.com/task/"+id, config)
        .then( res => history.push("/") )
        .catch( err => {
            console.log(err);
            setIsError(true);
        })
    };

    useEffect(() => {
        fetchTask()
    }, [id]);


    return (
        <Container sx={{border: "1px solid black", width: "33%", margin:"2rem auto"}}>
            <h1>Todo</h1>
            <Box>
                { loading ? (
                    <Box>...Loading</Box>
                ) : isError ? (
                    <Box>Something went wrong</Box>
                ) : (
                    <Box sx={{display:"flex", gap:"1rem", flexDirection: "column", margin:"0rem auto 1rem"}}>
                        { data.title }
                        <Button variant="contained" color="secondary" onClick={updateStatus}> { data.status ? "Mark as Incomplete" : "Mark as Complete" } </Button>
                        <Button variant="contained" onClick={deleteTask}>Delete</Button>
                    </Box>
                )}
            </Box>
        </Container>
    )
}

export default Task;