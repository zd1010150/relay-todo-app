import React, { useState, useCallback } from 'react';

type Props = {
    addTodo: (title: string) => void
}

const AddTodo = (props: Props) => {
    const [value, setValue] = useState<string>('');

    const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            props.addTodo(value);
            setValue('');
        }
        return true;
    }

    const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }, [setValue]);

    return <input type="text" value={value} placeholder="Input the todo item" onKeyDown={onKeyDown} onChange={onChange} />
}

export default AddTodo;