import React, { useCallback, useState } from 'react';

const TaskItem = ({index, children, onDelete, onUpdate}) => {
    const [value, setValue] = useState(children);
    const [isEdit, setIsEdit] = useState(false);

    const onEditClick = useCallback(() => {
        if (isEdit) {
            onUpdate(index, value);

            setIsEdit(false);
        } else {
            setIsEdit(true);
        }
    }, [onUpdate, setIsEdit, isEdit, value, index]);

    const onDeleteClick = useCallback(() => {
        onDelete(index)
    }, [onDelete, index]);

    
    const onChange = useCallback((e) => {
        const {value} = e.target;

        setValue(value);
    }, [setValue]);

    return (
        <li>
            {!isEdit && children}
            {isEdit && (
                <input value={value} onChange={onChange}/>
            )}
            <button onClick={onEditClick}>{isEdit ? 'Apply' : 'Edit'}</button>
            <button onClick={onDeleteClick}>-</button>
        </li>    
    );
}

export {TaskItem};
