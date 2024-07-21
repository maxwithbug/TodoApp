import React, { useState } from 'react';

function Todo({ TodoData, isFinished, changedFinished, onDelete, onEdit }) {
    const [finished, setFinished] = useState(isFinished);
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(TodoData);

    return (
        <div className='flex items-center justify-center m-[50px] gap-7 font-mono'>
            <input
                type="checkbox"
                className="checkbox checkbox-warning "
                checked={finished}
                onChange={(e) => {
                    setFinished(e.target.checked);
                    changedFinished(e.target.checked);
                }}
            />
            {isEditing ? (
                <input
                    type="text"
                    className="input input-bordered input-warning w-full max-w-xs font-mono"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                />
            ) : (
                <span className='text-3xl font-mono'>{TodoData}</span>
            )}
            <button
                type="button"
                className="btn btn-outline btn-success font-mono"
                onClick={() => {
                    if (isEditing) {
                        onEdit(editText);
                    }
                    setIsEditing(!isEditing);
                }}

            >
                {isEditing ? 'Save' : 'Edit'}
            </button>
            <button
                type="button"
                className="btn btn-outline btn-error font-mono"
                onClick={onDelete}
            >
                Delete
            </button>
        </div>
    );
}

export default Todo;
