import React, { Suspense, useEffect } from 'react';
import { useQueryLoader, usePreloadedQuery, graphql, loadQuery, useRelayEnvironment } from 'react-relay';
import type { HeaderProps, AppProps } from './types';

import { addTodo as addTodoMutation } from './mutations';
import { USER_QUERY } from './userQuery';
import Todos from './components/todos';
import Header from './components/header';
import AddTodo from './components/addTodo';


const App = ({ queryRef }: AppProps) => {
    const data = usePreloadedQuery(USER_QUERY, queryRef);
    const environment = useRelayEnvironment();

    const addTodo = (title: string) => {
        addTodoMutation(environment, title, data);
    }

    return (
        <>

            {data?.user && <Header user={data.user} />}
            <AddTodo addTodo={addTodo} />
            {data?.user && <Todos user={data.user} />}

        </>
    )

}

export default App;