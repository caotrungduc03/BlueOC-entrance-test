import { useSelector } from "react-redux";
import PostForm from "./components/PostForm";
import PostsList from "./components/PostList";

function App() {
  const { status } = useSelector((state) => state.general);

  return status === 0 ? <PostsList /> : <PostForm />;
}

export default App;
