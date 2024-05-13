import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import withComments from "../components/comments/WithComments";
import Comments from "../components/comments/Comments";

function BlogDetail() {
  const [article, setArticle] = useState({});
  const [loading, setLoading] = useState(true);
  const [notfound, setNotFound] = useState(false);
  const [comments, setComments] = useState([]);

  const params = useParams();

  const handleCommentSubmit = (newComment) => {
    setComments((prevComments) => [...prevComments, newComment]);
  };
  const handleDelete = (commentIndex) => {
    setComments((prevComments) =>
      prevComments.filter((_, index) => index !== commentIndex)
    );
  };

  

  

  useEffect(
    function () {
      async function getArticle() {
        const request = await fetch(
          `https://api.spaceflightnewsapi.net/v3/articles/${params.id}`
        );

        if (!request.ok) {
          return setNotFound(true);
        }

        const response = await request.json();

        document.title = response.title;
        setArticle(response);
        setLoading(false);
      }
      getArticle();
    },
    [params]
  );

  if (notfound) {
    return <h1>Article is not found :(</h1>;
  }
  return (
    <section className="section">
      {loading ? (
        <p>Loading article...</p>
      ) : (
        <article className="article">
          <h2 className="article-title">{article.title}</h2>
          <time className="article-time">
            {new Date(article.publishedAt).toLocaleDateString()}
          </time>
          <img
            src={article.imageUrl}
            alt="article-img"
            className="article-image"
          />
          <p className="article-summary">{article.summary}</p>
          <p className="article-source">
            Source:{" "}
            <a className="article text-white" href={article.url} target="_blank" rel="noreferrer">
              {article.newsSite}
            </a>
          </p>
        </article>
      )}
      <Comments comments={comments} onCommentSubmit={handleCommentSubmit} handleDelete={handleDelete}/>

    </section>
  );
}
export default withComments(BlogDetail);