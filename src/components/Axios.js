import React, { Component } from 'react';
import axios from 'axios';

class Axios extends Component {
  constructor(props) {
    super(props);

    this.state = {
      post: []
    };
  }

  componentDidMount() {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        console.log(response);
        this.setState({ posts: response.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const { posts } = this.state;
    return (
      <div>
        <h1>Axios GET Request</h1>

        {
          posts.length ?
          posts.map(post => <div key={post.id}>{post.title}</div>) : null}
      </div>
    );
  }
}

export default Axios;
