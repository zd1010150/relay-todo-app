import { graphql } from 'react-relay';


export const USER_QUERY = graphql`
    query userQuery_app_Query($id: String){
        user(id: $id){
            id
            fav
            ...todos_fragment
        }
    }
`;