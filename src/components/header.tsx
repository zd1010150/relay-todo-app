import React from 'react';
import { graphql, useFragment } from 'react-relay';
import type { header_fragment$key } from './__generated__/header_fragment.graphql';

type Props = {
    user: header_fragment$key
}

const Header = (props: Props) => {
    const data = useFragment(
        graphql`
        fragment header_fragment on User{
            id
            fav
        }
        `,

        props.user)
    return <h1>{data.id} - fav: {data.fav}</h1>
}

export default Header;