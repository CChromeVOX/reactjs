import React from "react";

class Comments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newComment: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onCommentSubmit(this.state.newComment);
    this.setState({ newComment: "" });
  }

  render() {
    return (
      <div>
        {this.props.comments.map((comment, index) => (
          <div key={index} className="card mb-3">
            <div className="card-body">
              <p className="card-text">{comment}</p>
              <button onClick={() => this.props.handleDelete(index)} className="btn btn-danger">Delete</button>
            </div>
          </div>
        ))}
        <form onSubmit={this.handleSubmit}>
          <textarea
            value={this.state.newComment}
            onChange={(e) => this.setState({ newComment: e.target.value })}
            className="form-control mb-3"
          />
          <button className="btn btn-primary" type="submit">Post Comment</button>
        </form>
      </div>
    );
  }
}

export default Comments;
