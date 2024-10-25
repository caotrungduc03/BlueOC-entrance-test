import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setStatus } from "../features/general/generalSlice";
import { addPost } from "../features/posts/postsAction";
import { setPostLoading } from "../features/posts/postsSlice";

const PostForm = () => {
  const [userId, setUserId] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const { postLoading, error } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    if (postLoading === "succeeded") {
      alert("Create post successfully");
      dispatch(setPostLoading("idle"));
      dispatch(setStatus(0));
    } else if (postLoading === "failed") {
      alert(error);
      dispatch(setPostLoading("idle"));
    }
  }, [postLoading, error]);

  const handleBack = () => {
    dispatch(setStatus(0));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addPost({
        userId: userId,
        title: title,
        body: body,
      })
    );
  };

  return (
    <main>
      <h1 className="py-10 text-3xl font-bold uppercase text-center">
        Create a new post
      </h1>
      <div className="max-w-[600px] mx-auto">
        <form className="flex flex-col items-center" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-y-4 w-full mb-4">
            <input
              type="text"
              placeholder="UserID"
              className="border-[1px] border-solid border-gray-300 p-2 rounded-md"
              onChange={(e) => setUserId(e.target.value)}
            />

            <input
              type="text"
              placeholder="Title"
              className="border-[1px] border-solid border-gray-300 p-2 rounded-md"
              onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
              placeholder="Body"
              className="border-[1px] border-solid border-gray-300 p-2 rounded-md"
              onChange={(e) => setBody(e.target.value)}
            ></textarea>
          </div>
          <div className="flex justify-center gap-4">
            <button
              type="button"
              className="btn bg-red-500 text-white rounded-md"
              onClick={handleBack}
            >
              Back to list
            </button>
            <button
              type="submit"
              className="btn bg-blue-500 text-white rounded-md"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default PostForm;
