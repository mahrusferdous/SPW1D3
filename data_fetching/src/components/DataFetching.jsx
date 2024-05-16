import React, { useEffect } from "react";
import { useQuery, useMutation } from "react-query";
import axios from "axios";

function DataFetching() {
    //GET
    const {
        data: posts,
        isLoading,
        error,
    } = useQuery("posts", async () => {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
        return response.data;
    });

    //POST
    //const createPostMutation = useMutation(newPost => createPost(newPost));

    //PUT
    //const updatePostMutation = useMutation(updatedPost => updatePost(updatedPost));

    //DELETE
    const deletePostMutation = useMutation((postId) => {
        axios.delete(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    });

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div>
            {posts.map((post) => (
                <div key={post.id}>
                    <p>{post.title}</p>
                    <button onClick={() => deletePostMutation.mutate(post.id)}>Delete</button>
                </div>
            ))}
        </div>
    );
}

export default DataFetching;
