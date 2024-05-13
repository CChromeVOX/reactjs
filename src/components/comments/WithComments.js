import React from "react";

export default function withComments(WrappedComponent) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        comments: []
      };
      this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
      this.handleDelete = this.handleDelete.bind(this);
    }

    handleCommentSubmit(newComment) {
      this.setState((prevState) => ({
        comments: [...prevState.comments, newComment]
      }));
    }

    handleDelete(commentIndex) {
      this.setState((prevState) => ({
        comments: prevState.comments.filter((_, index) => index !== commentIndex)
      }));
    }

    render() {
      return (
        <WrappedComponent
          {...this.props}
          comments={this.state.comments}
          onCommentSubmit={this.handleCommentSubmit}
          handleDelete={this.handleDelete}
        />
      );
    }
  };
}
