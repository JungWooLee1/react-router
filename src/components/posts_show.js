import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPost, deletePost } from '../actions';


class PostsShow extends Component {
  componentDidMount() {
    console.log(this.props)
    const { id } = this.props.match.params;
    this.props.fetchPost(id);
  }

  onDeleteClick() {
    const { id } = this.props.match.params;
    this.props.deletePost(id, () => {
      this.props.history.push('/');
    });
  }

  render() {
    const { post } = this.props;

    if(!post) {
      return <div>Loading...</div>;
    }

    return (
        <div>
          <Link to="/">Back To Index</Link>
          <button
              className="btn btn-danger pull-xs-right"
              onClick={this.onDeleteClick.bind(this)}
          >
            Delete Post
          </button>
          <h3>{post.title}</h3>
          <h6>Categories: {post.categories}</h6>
          <p>{post.content}</p>
        </div>
    )
  }
}

function mapStateToProps({ posts }, ownProps) {
  return {post : posts[ownProps.match.params.id]};
}

// 컴포넌트와 리덕스를 연동할 때 connect 를 사용합니다.
// connect() 의 결과는, 컴포넌트에 props를 넣어주는 함수를 반환합니다.
// 반환된 함수에 우리가 만든 컴포넌트를 넣어주면 됩니다.

export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow);