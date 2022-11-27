import React, { Suspense, useEffect } from 'react';
import { useQueryLoader, usePreloadedQuery, graphql, loadQuery, useRelayEnvironment } from 'react-relay';
import type { HeaderProps, AppProps } from './types';

import { USER_QUERY } from './userQuery';
import Todos from './components/todos';

const Header = (props: HeaderProps) => {
    const data = usePreloadedQuery(USER_QUERY, props.appQueryRef);
    return <div>
        {data.user?.id} - {data.user?.fav}
    </div>
}

const App = ({ queryRef }: AppProps) => {
    const data = usePreloadedQuery(USER_QUERY, queryRef);

    console.log(data);
    return (
        <>
            <Header appQueryRef={queryRef} />
            {data?.user && <Todos user={data.user} />}

        </>
    )

}

export default App;