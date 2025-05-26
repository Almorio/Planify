import { useState } from "react";
import { Footer } from "./components/footer";
import { Header } from "./components/hearder";
import  TaskForm  from "./components/taskForm";
import  TaskList  from "./components/taskList";
import  Filters  from "./components/filters";
import type { FilterType, Task } from "./types/tasktypes";



export  const App = () =>{
    const [tasks, setTasks] = useState<Task[]>([]);
    const [filter, setFilter] = useState<FilterType>("all");
    const addTask = (title: string) =>{
        const newTask: Task = {
        id: Date.now().toString(),
        title,
        priority: 'medium',
        completed: false
    };
    setTasks([...tasks, newTask]);
    };
    const toggleTask =(id: string) => {
        setTasks(
            tasks.map(tasks =>
                tasks.id === id ? {...tasks, completed: !tasks.completed} : tasks
            )
        );
    };
    return (
        <div>
            
        <Header />
        <Filters filter={filter} setFilter={setFilter}/>
        <TaskForm addTask={addTask}/>
        <TaskList tasks={tasks}  toggleTask={toggleTask}/>

        <Footer />
       
        </div>
    )

}