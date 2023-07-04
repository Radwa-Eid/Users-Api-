export default function SinglePost({post}) {
  return (
    <>
      <div className="card-header">{post.title}</div>
      <div className="card-body">
        <p className="card-text">{post.body}</p>
      </div>
      <div className="card-footer text-body-secondary">
        Number of Reactions : {" "+ post.reactions}
      </div>
    </>
  );
}
