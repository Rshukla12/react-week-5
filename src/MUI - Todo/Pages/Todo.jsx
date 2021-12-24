import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react"
import AddTodo from "../Components/AddTodo";
import { useHistory } from "react-router-dom";

const Todo = () => {
    const history = useHistory();
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    const fetchTasks = () => {
        fetch("https://fake-rjson-server-pro.herokuapp.com/task")
        .then( res => res.json())
        .then( res => setData(res) )
        .catch( err => {
            console.log(err);
            setIsError(true);
        })
        .finally( () => setLoading(false) )
    }

    const createTask = ({title}) => {
        setLoading(true)

        const payload = {
            title,
            status: false,
        }

        const config = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        }

        fetch("https://fake-rjson-server-pro.herokuapp.com/task", config)
        .then( res => fetchTasks())
        .catch( err => {
            console.log(err);
            setIsError(true);
        })
        .finally( () => setLoading(false) )
    };

    useEffect(() => {
        fetchTasks()
    }, []);

    const handleClick = (id) => {
        history.push(`/tasks/${id}`);
    }


    let limit = 5;

    return (
        <Container sx={{border: "1px solid black", width: "33%", margin:"2rem auto"}}>
            <h1>Todo</h1>
            <Box sx={{padding:"2% 5%", margin:"2rem auto"}}>
                <AddTodo onCreateTask={createTask} />
            </Box>
            <Box>
                { loading ? (
                    <Box>...Loading</Box>
                ) : isError ? (
                    <Box>Something went wrong</Box>
                ) : (
                    <Box sx={{display:"flex", gap:"1rem", flexDirection: "column", margin:"0rem auto 1rem"}}>
                        { data && data.filter( (_,index) => index >= ( (page-1)*limit) && index < ((page-1)*limit)+limit ).map( item => (
                            <Box 
                                onClick={()=>handleClick(item.id)} 
                                key={item.id} 
                                sx={{border: "1px solid black"}}>
                                {item.title}
                            </Box>
                        ))
                        }
                    </Box>
                )}
            </Box>
            <Box>
                { page !== 1 && <Button variant="contained" onClick={()=>setPage(page=>page-1)}>Prev</Button> }
                <Button variant="contained" onClick={()=>setPage(page=>page+1)}>Next</Button>
            </Box>
        </Container>
    );
}

export default Todo;