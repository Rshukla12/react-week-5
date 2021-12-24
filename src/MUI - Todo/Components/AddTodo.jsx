import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import { useState } from "react"

const AddTodo = ({onCreateTask}) => {
    const [title, setTitle] = useState("");

    const handleClick = () => {
        onCreateTask({title});
        setTitle("");
    }

    return (
        <Container sx={{display: "flex", height: "2rem", gap: "1rem", alignItems:"center", width:"100%"}}>
            <TextField label="New Task..." value={title} onChange={(e)=>setTitle(e.target.value)} variant="outlined" />
            <Button variant="contained" onClick={handleClick}>Add Task</Button>
        </Container>
    )
    
}

export default AddTodo;