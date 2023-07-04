import "./posts.css";
import { useEffect, useState } from "react";
import { posts } from "../../services/api";
import { useParams } from "react-router-dom";
import SinglePost from "../../components/SinglePost";

export default function Posts() {
  const [userPosts, setUserPosts] = useState([]);
  const postId = useParams();
  const getPosts = async () => {
    const data = await posts(postId.id);
    setUserPosts(data.posts);
  };
  useEffect(() => {
    getPosts();
  }, [postId.id]);

  const postsList = userPosts.map((post) => {
    return (
      <div className="card text-center mb-5" key={post.id}>
        <SinglePost post={post} />
      </div>
    );
  });
  return (
    <div className="container posts">
      <h1>Posts: </h1>
      {postsList}
    </div>
  );
}
