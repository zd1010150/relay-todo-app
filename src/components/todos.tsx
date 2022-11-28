import React from 'react';
import Todo from './todo';
import isNull from 'lodash/fp/isNull'
import { useFragment, graphql } from 'react-relay';
import type { todos_fragment$key } from './__generated__/todos_fragment.graphql';

type Props = {
    user: todos_fragment$key
}

const Todos = (props: Props) => {
    const data = useFragment(graphql`
    fragment todos_fragment on User {
        todos  {
            id
            ...todo_fragment
        }
    }
`, props.user);
    if (!isNull(data.todos)) {
        return <>
            {data.todos.map(d => {
                if (!isNull(d)) {
                    return <Todo todo={d} key={d.id}></Todo>
                }
            })}
        </>
    } else return null;

}

export default Todos;