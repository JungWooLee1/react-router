import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPosts } from '../actions';


class PostsIndex extends Component {

  componentDidMount() {
    this.props.fetchPosts();
  }

  renderPosts() {
    return _.map(this.props.posts, post => {
      console.log(post);
      return (
          <li className="list-group-item" key={post.id}>
            <Link to={`/posts/${post.id}`}>
              {post.title}
            </Link>
          </li>
      );
    });
  }

  render() {
    return (
        <div>
          <div className="text-xs-right">
            <Link className="btn btn-primary" to="/posts/new">
              Add a Post
            </Link>
          </div>
          <h3>Posts</h3>
          <ul className="list-group">
            {this.renderPosts()}
          </ul>
        </div>
    )
  }
}

function mapStateToProps(state) {
  console.log(state);
  return { posts: state.posts };
}

// es6 => fetchPosts: fetchPosts() => fetchPosts  (mapDispatchToProps)
export default connect( mapStateToProps, { fetchPosts } )(PostsIndex);
