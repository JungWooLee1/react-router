import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
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
            {post.title}
          </li>
      );
    });
  }

  render() {
    return (
        <div>
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
export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
