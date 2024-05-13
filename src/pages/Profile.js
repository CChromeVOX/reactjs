import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      newPostTitle: "",
      newPostDescription: "",
      prevPostCount: 0
    };
    this.handlePostSubmit = this.handlePostSubmit.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    document.title = "Profile";
  }

  componentDidUpdate() {
    if (this.state.prevPostCount !== this.state.posts.length) {
      console.log('Posts count has changed');
      this.setState({ prevPostCount: this.state.posts.length });
    }
  }
  
  handlePostSubmit(e) {
    e.preventDefault();
    this.setState((prevState) => ({
      posts: [...prevState.posts, { title: this.state.newPostTitle, description: this.state.newPostDescription }],
      newPostTitle: "",
      newPostDescription: ""
    }));
  }

  handleTitleChange(e) {
    this.setState({ newPostTitle: e.target.value });
  }

  handleDescriptionChange(e) {
    this.setState({ newPostDescription: e.target.value });
  }

  handleDelete(index) {
    this.setState((prevState) => ({
      posts: prevState.posts.filter((_, i) => i !== index)
    }));
  }

  render() {
    return (
      <section className="section">
        <h1 className="section-title">Profile Page</h1>
        <p className="section-description">
          Hi, My name is Aliya and here is my Project for Examination
        </p>
        <form onSubmit={this.handlePostSubmit} className="mb-3">
          <input
            type="text"
            value={this.state.newPostTitle}
            onChange={this.handleTitleChange}
            placeholder="Post title"
            className="form-control mb-2"
          />
          <textarea
            value={this.state.newPostDescription}
            onChange={this.handleDescriptionChange}
            placeholder="Post description"
            className="form-control mb-2"
          />
          <button type="submit" className="btn btn-primary">Post</button>
        </form>
        <ul>
          {this.state.posts.map((post, index) => (
            <li key={index}>
              <h2>{post.title}</h2>
              <p>{post.description}</p>
              <button onClick={() => this.handleDelete(index)} className="btn btn-danger">Delete</button>
            </li>
          ))}
        </ul>
      </section>
    );
  }
}

export default Profile;
