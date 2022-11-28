import { Environment, graphql, useMutation, commitMutation } from "react-relay";
import { RecordSourceSelectorProxy } from "relay-runtime";
import type { addTodo_AddTODOMutation } from './__generated__/addTodo_AddTODOMutation.graphql';
import type { userQuery_app_Query$data } from '../__generated__/userQuery_app_Query.graphql';

const mutation = graphql`
mutation addTodo_AddTODOMutation($input: AddTODOInput!) {
    addTodo(input:$input) {
        id
        title
        isComplete
    }
}
`;

export const addTodo = (environment: Environment, title: string, userData: userQuery_app_Query$data) => {
    commitMutation(environment, {
        mutation,
        variables: {
            input: {
                title
            }
        },
        updater: (store: RecordSourceSelectorProxy) => {
            if (userData.user?.id) {
                const todoRecord = store.getRootField("addTodo");
                const userRecord = store.get(userData.user?.id);
                const todos = userRecord?.getLinkedRecords('todos') || [];
                userRecord?.setLinkedRecords([todoRecord, ...todos], 'todos');
            }

        }
    })
}