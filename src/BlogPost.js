import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Butter from 'buttercms'

const butterCmsToken = process.env.REACT_APP_BUTTER_CMS_TOKEN
const butter = Butter(butterCmsToken)

class BlogPost extends Component {
  constructor(props) {
    super(props)

    this.state = {
      loaded: false,
      postData: []
    }
  }

  fetchPost = async slug => {
    const resp = await butter.post.retrieve(slug)
    this.setState({
      loaded: true,
      postData: resp.data
    })
  }

  componentDidMount() {
    const { slug } = this.props.match.params
    this.fetchPost(slug)
  }

  componentWillReceiveProps(nextProps) {
    const { slug } = nextProps.match.params
    this.setState({ loaded: false })
    this.fetchPost(slug)
  }

  render() {
    if (this.state.loaded) {
      const { data: post } = this.state.postData
      const { previous_post, next_post } = this.state.postData.meta
      return (
        <div>
          <h1>{post.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: post.body }} />
          <div>
            {previous_post && (
              <Link to={`/post/${previous_post.slug}`}>
                Previous - {previous_post.title}
              </Link>
            )}{' '}
            {next_post && (
              <Link to={`/post/${next_post.slug}`}>
                Next - {next_post.title}
              </Link>
            )}
          </div>
        </div>
      )
    } else {
      return <div>Loading...</div>
    }
  }
}

export default BlogPost
