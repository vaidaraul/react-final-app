export const getPosts = async () => {
    const postDataResponse = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        }
    )
        .then((res) => res.json())
        .catch((error) => console.error(error));

    return postDataResponse;
};
