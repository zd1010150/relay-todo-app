import React, { Suspense, useEffect } from 'react';
import { useQueryLoader, usePreloadedQuery, graphql } from 'react-relay';
import type { HeaderProps } from './types';
import type { app_AppQuery } from './__generated__/app_AppQuery.graphql';

const USER_QUERY = graphql`
    query app_AppQuery($id: String){
        user(id: $id){
            id
            fav
        }
    }
`;

const Header = (props: HeaderProps) => {
    const data = usePreloadedQuery(USER_QUERY, props.appQueryRef);
    return <div>
        {data.user?.id} - {data.user?.fav}
    </div>
}

const App = () => {
    const [reference, load] = useQueryLoader<app_AppQuery>(USER_QUERY);
    if (reference === null || reference === undefined)
        return <>
            <button onClick={() => load({ id: 'jser1' })}> jser1</button> | <button onClick={() => load({ id: 'jser2' })}>jser2</button>
        </>
    return <Suspense fallback="..."><Header appQueryRef={reference} /></Suspense>
}

export default App;