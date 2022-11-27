import type { PreloadedQuery } from "react-relay";
import type { userQuery_app_Query } from './__generated__/userQuery_app_Query.graphql';

export type HeaderProps = {
    appQueryRef: PreloadedQuery<userQuery_app_Query>
}

export type AppProps = {
    queryRef: PreloadedQuery<userQuery_app_Query>
}