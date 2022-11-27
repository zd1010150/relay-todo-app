import relayEnvironment from './RelayEnvironment';
import { loadQuery } from 'react-relay';
import { USER_QUERY } from './userQuery';
import type { userQuery_app_Query } from './__generated__/userQuery_app_Query.graphql';

export const getQueryRef = (id: string) => loadQuery<userQuery_app_Query>(relayEnvironment, USER_QUERY, { id });

