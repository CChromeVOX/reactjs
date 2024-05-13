import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      searchQuery: "",
      dateFilter: "",
      sourceFilter: "",
      monthFilter: ""
    };
  }

  async getArticles() {
    try {
      const request = await fetch("https://api.spaceflightnewsapi.net/v3/articles");
      if (!request.ok) {
        throw new Error(`HTTP error! status: ${request.status}`);
      }
      const response = await request.json();
      this.setState({ articles: response, loading: false });
    } catch (error) {
      console.log('Fetch error: ', error);
    }
  }

  componentDidMount() {
    document.title = "Blog";
    this.getArticles();
  }

  render() {
    return (
      <section className="section">
        <h1 className="section-title">Blog Page</h1>
        <p className="section-description">Here is mini blog which gets info from public API</p>

        <input
          type="text"
          placeholder="Search..."
          value={this.state.searchQuery}
          onChange={(e) => this.setState({ searchQuery: e.target.value })}
          className="form-control"
        />
        <input
          type="number"
          placeholder="Year..."
          value={this.state.dateFilter}
          onChange={(e) => this.setState({ dateFilter: e.target.value })}
          className="form-control"
        />
        <input
          type="number"
          placeholder="Month"
          value={this.state.monthFilter}
          min="1"
          max="12"
          onChange={(e) => this.setState({ monthFilter: e.target.value })}
          className="form-control"
        />
        <input
          type="text"
          placeholder="Source..."
          value={this.state.sourceFilter}
          onChange={(e) => this.setState({ sourceFilter: e.target.value })}
          className="form-control"
        />

        <div className="articles">
          {this.state.loading ? "Loading..." : ""}
          {this.state.articles
            .filter((item) => {
              const itemDate = new Date(item.publishedAt);
              const itemYear = itemDate.getFullYear().toString();
              const itemMonth = (itemDate.getMonth() + 1).toString();
              const itemSource = item.newsSite.toLowerCase();
              return (
                item.title.toLowerCase().includes(this.state.searchQuery.toLowerCase()) &&
                itemYear.includes(this.state.dateFilter) &&
                itemSource.includes(this.state.sourceFilter.toLowerCase()) &&
                itemMonth.includes(this.state.monthFilter)
              );
            })
            .map(function (item) {
              return (
                <article key={item.id} className="article text-white">
                  <h2 className="article-title">
                    <Link to={`/blog/${item.id}`} className="text-white">{item.title}</Link>
                  </h2>
                  <time className="article-time">
                    {new Date(item.publishedAt).toLocaleDateString()}
                  </time>
                </article>
              );
            })}
        </div>
      </section>
    );
  }
}

export default Blog;
