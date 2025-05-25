import type { Task } from "../types/tasktypes";

type TaskListProps = {
    task: Task;
    toggleTask: (id: string) => void
};

export default function TaskItem ({ task, toggleTask}: TaskListProps){
    return(
        <li>
            <input type="checkbox"
            checked={task.completed} 
            onChange={()=> toggleTask(task.id)}/>
            <span style={{textDecoration: task.completed ? "line-through" : "none"}}
            >{task.title}</span>
        </li>
    );
}