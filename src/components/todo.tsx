import React, { useState } from 'react';
import { useFragment, graphql } from 'react-relay';
import type { todo_fragment$key } from './__generated__/todo_fragment.graphql';


type Props = {
    todo: todo_fragment$key
}


const Todo = (props: Props) => {
    const data = useFragment(
        graphql`
            fragment todo_fragment on TODO {
                id
                title,
                isComplete
            }
        `,
        props.todo);
    const [isChecked, setIsChecked] = useState<boolean>(data.isComplete);

    const toggleComplete = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsChecked(!isChecked);
    };

    return <li>
        <input type="checkbox" id={`todo-${data.id}`} checked={isChecked} onChange={toggleComplete} />
        <label htmlFor={`todo - ${data.id}`}>{data.title}</label>
    </li >

}

export default Todo;
