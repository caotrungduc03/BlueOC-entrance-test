import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "../features/posts/postsSlice";

const PostsList = () => {
  const { posts, isLoading } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <main>
      <h1 className="py-10 text-3xl font-bold uppercase text-center">
        The list of posts
      </h1>
      {isLoading ? (
        <div className="text-center">Loading...</div>
      ) : (
        <div className="grid grid-cols-1 gap-4 px-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {posts.map((post, index) => (
            <div
              key={index}
              className="h-full border-[1px] border-solid border-gray-200 rounded-lg shadow-md p-4"
            >
              <h2 className="text-xl font-bold text-blue-700">{post.title}</h2>
              <h4>UserID: {post.userId}</h4>
              <p>{post.body}</p>
            </div>
          ))}
        </div>
      )}
    </main>
  );
};

export default PostsList;
