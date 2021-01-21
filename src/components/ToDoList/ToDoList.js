import React from 'react';
import { useTasks } from '../../hooks/useTasks';
import { NewTaskForm } from '../NewTaskForm';
import { TaskItem } from '../TaskItem';
import './ToDoList.scss'

const ToDoList = () => {
    const {tasks, addTask, deleteTask, updateTask} = useTasks();

    return (
        <div className='to-do-list'>
            <NewTaskForm applyNewTask={addTask} />
            {!!tasks.length && <ul className={'tasks-list'}>
                {tasks.map((task, index) => (
                    <TaskItem 
                        key={index} 
                        index={index}
                        onDelete={deleteTask} 
                        onUpdate={updateTask}
                    >
                        {task}
                    </TaskItem>
                ))}
            </ul>}
            {!tasks.length && 'No Tasks Added'}
        </div>
    );
}

export {ToDoList};
