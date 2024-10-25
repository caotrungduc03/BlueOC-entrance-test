import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "../features/posts/postsAction";
import { setStatus } from "../features/general/generalSlice";

const PostsList = () => {
  const { posts, getLoading, error } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    if (getLoading === "idle") {
      dispatch(fetchPosts());
    }
  }, []);

  const handleAdd = () => {
    dispatch(setStatus(1));
  };

  if (getLoading === "failed") {
    alert(error);
  }

  return (
    <main>
      <h1 className="py-10 text-3xl font-bold uppercase text-center">
        The list of posts
      </h1>
      <div className="flex justify-center mb-10">
        <button
          className="btn border-[1px] border-solid border-gray-700 rounded-lg bg-green-500 text-white"
          onClick={handleAdd}
        >
          Add new post
        </button>
      </div>
      {getLoading === "pending" ? (
        <div className="text-center">Loading...</div>
      ) : (
        <div className="grid grid-cols-1 gap-4 px-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-10">
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
