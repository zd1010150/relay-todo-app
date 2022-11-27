import React, { Suspense, useEffect } from 'react';
import { useQueryLoader, usePreloadedQuery, graphql, loadQuery, useRelayEnvironment } from 'react-relay';
import type { HeaderProps, AppProps } from './types';

import { USER_QUERY } from './userQuery';
import Todos from './components/todos';
import Header from './components/header';



const App = ({ queryRef }: AppProps) => {
    const data = usePreloadedQuery(USER_QUERY, queryRef);

    console.log(data);
    return (
        <>
            {data?.user && <Header user={data.user} />}
            {data?.user && <Todos user={data.user} />}

        </>
    )

}

export default App;