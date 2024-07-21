import { useState } from 'react';

function AddTodo({ addtodo }) {
    const [inputText, setInputText] = useState('');

    const addTodo = () => {
        if (inputText.trim()) {
            addtodo({ todoText: inputText });
            setInputText('');
        }
    };

    return (
        <div className='flex items-center justify-center m-[50px] gap-7'>
            <input
                type="text"
                value={inputText}
                placeholder="type here"
                onChange={e => setInputText(e.target.value)}
                className="input input-bordered input-primary w-full max-w-xs font-mono"
            />
            
            <button onClick={addTodo} className="btn btn-outline btn-accent font-mono">Add Todo</button>
        </div>
    );
}

export default AddTodo;
