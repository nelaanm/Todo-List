import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../redux/reducers/todosReducer'

function InputTodo() {
    const dispatch = useDispatch()
    const [input, setInput] = useState("")

    const handleClick = (e) => {
        e.preventDefault()
        console.log(input);
        dispatch(addTodo(input))
        setInput("")

    }

    return (
        <div>
            <form className='form-group custom-form'>
                <input 
                    type="text" 
                    placeholder="What to do" 
                    value={input} 
                    onChange={(e)=> setInput(e.target.value)}
                />
                <button onClick={handleClick}>Add</button>
            </form>
        </div>
    )
}

export default InputTodo