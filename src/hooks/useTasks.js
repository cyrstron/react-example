import { useCallback, useState } from "react";

export function useTasks() {
    const [tasks, setTasks] = useState([]);

    const addTask = useCallback((newTask) => {
        setTasks([...tasks, newTask]);
    }, [tasks, setTasks]);
    
    const updateTask = useCallback((index, newValue) => {
        setTasks([
            ...tasks.slice(0, index), 
            newValue,
            ...tasks.slice(index + 1),
        ]);
    }, [tasks, setTasks]);
    
    const deleteTask = useCallback((index) => {
        setTasks([
            ...tasks.slice(0, index), 
            ...tasks.slice(index + 1),
        ]);
    }, [tasks, setTasks]);

    return {
        tasks,
        addTask,
        deleteTask,
        updateTask,
    }
}
