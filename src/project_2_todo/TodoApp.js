import React, { useState } from "react";
import {
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Container,
  Typography,
  Paper,
  Box,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

function TodoApp() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: "2rem" }}>
      <Paper elevation={3} style={{ padding: "1.5rem", textAlign: "center" }}>
        <Typography variant="h4" gutterBottom>
          To Do List
        </Typography>
        <Box
          sx={{
            position: "sticky",
            top: 0,
            background: "white",
            paddingBottom: "10px",
            zIndex: 1,
          }}
        >
          <TextField
            fullWidth
            variant="outlined"
            label="Add a task..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
            style={{ marginBottom: "1rem" }}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={addTask}
            fullWidth
          >
            Add Task
          </Button>
        </Box>

        
        <List style={{ marginTop: "1rem" }}>
          {tasks.map((t, index) => (
            <ListItem key={index} divider>
              <ListItemText primary={t} />
              <ListItemSecondaryAction>
                <IconButton
                  edge="end"
                  color="secondary"
                  onClick={() => deleteTask(index)}
                >
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </Paper>
    </Container>
  );
}

export default TodoApp;

// import React, { useState } from "react";

// function TodoApp() {
//   const [task, setTask] = useState("");
//   const [tasks, setTasks] = useState([]);

//   const addTask = () => {
//     if (task.trim()) {
//       setTasks([...tasks, task]);
//       setTask("");
//     }
//   };

//   const deleteTask = (index) => {
//     // target the index value in the array and remove it..
//     setTasks(tasks.filter((_, i) => i !== index));
//   };

//   return (
//     // create a todo component...
//     <div className="container_todo">
//       <h2>To Do List</h2>
//       {/* value is set to task variable... */}
//       <input
//         type="text"
//         value={task}
//         placeholder="Add a task..."
//         onChange={(e) => setTask(e.target.value)} //task value is updated / added....
//       />
//       {/* changing the state, add a task to the state and below to the tasks array... */}
//       <button onClick={addTask}>Add</button>

//       <ul>
//         {tasks.map((t, index) => (
//           <li>
//             {t} <button onClick={() => deleteTask(index)}>delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default TodoApp;
