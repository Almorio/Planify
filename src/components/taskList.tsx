import type { Task } from "../types/tasktypes";
import  TaskItem  from "./taskItem"

type TaskListProps = {
    tasks: Task[];
    toggleTask: (id: string) => void;
    
}

export default function TaskList({ tasks, toggleTask }: TaskListProps){
    return(
        <ul>
            {tasks.map(task => (
                <TaskItem key={task.id} task={task} toggleTask={toggleTask} />
            ))}
        </ul>
    )
}