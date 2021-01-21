import React, { useCallback, useState } from 'react';

const NewTaskForm = ({applyNewTask}) => {
    const [newTask, setNewTask] = useState('');

    const onChange = useCallback((e) => {
        const value = e.target.value;

        setNewTask(value);
    }, [setNewTask]);

    const onSubmit = useCallback((e) => {
        e.preventDefault();

        applyNewTask(newTask);
        setNewTask('');
    }, [newTask, applyNewTask, setNewTask]);
    

    return (
        <form onSubmit={onSubmit}>
            <label>
                New task:
                <input
                    value={newTask}
                    onChange={onChange}
                />
            </label>
            <button type='submit'>+</button>
        </form>
    );
}

export {NewTaskForm};
