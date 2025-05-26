import { useState } from "react";
type TaskFormProps ={
    addTask: (title: string) => void;
};

export default function TaskForm({ addTask}: TaskFormProps) {
    const [title, setTitle] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (title.trim()){
            addTask(title)
            setTitle('');
        }
    };
    return (
        <form onSubmit={handleSubmit}>
            <input 
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Adicionar tarefa..." />
            <button 
             type="submit"
             className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl ">Adicionar</button>
        </form>

        
    );
};

