const fetchGraphQL = async (
    query: string,
    variables: any
) => {
    const response = await fetch("http://localhost:4000/graphql", {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            query,
            variables
        })
    });
    return await response.json();
}

export default fetchGraphQL;