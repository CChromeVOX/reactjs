import React from "react";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      article: null
    };
  }

  async componentDidMount() {
    document.title = "Home";
    const response = await fetch("https://api.spaceflightnewsapi.net/v3/articles");
    const articles = await response.json();
    const randomArticle = articles[Math.floor(Math.random() * articles.length)];
    this.setState({ article: randomArticle });
  }

  render() {
    return (
      <section className="section">
        <h1 className="section-title">Random Article</h1>
        <p className="section-description">
          Use links in navigation page
        </p>
        {this.state.article && (
          <div>
            <h2>{this.state.article.title}</h2>
            <img
            src={this.state.article.imageUrl}
            alt="article-img"
            className="article-image"
          />
            <p>{this.state.article.summary}</p>
            
          </div>
        )}
      </section>
    );
  }
}

export default Home;
