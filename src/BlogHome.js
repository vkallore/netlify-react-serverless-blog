import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Butter from 'buttercms'
import Helmet from 'react-helmet'

const butterCmsToken = process.env.REACT_APP_BUTTER_CMS_TOKEN
const butter = Butter(butterCmsToken)

class BlogHome extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loaded: false,
      butterResponse: []
    }
  }

  fetchPosts = async page => {
    const resp = await butter.post.list({ page: page, page_size: 5 })
    this.setState({
      loaded: true,
      butterResponse: resp.data
    })
  }

  componentDidMount() {
    const { page } = this.props.match.params
    this.fetchPosts(page)
  }

  componentWillReceiveProps(nextProps) {
    const { page } = nextProps.match.params
    this.setState({ loaded: false })
    this.fetchPosts(page)
  }

  render() {
    if (this.state.loaded) {
      const { next_page, previous_page } = this.state.butterResponse.meta
      const { data } = this.state.butterResponse

      return (
        <div>
          <Helmet>
            <title>ButterCMS Blog Posts</title>
            <meta name="description" content="ButterCMS blog posts listing" />
          </Helmet>
          {data.map(post => {
            return (
              <div key={post.slug}>
                <Link to={`/post/${post.slug}`}>{post.title}</Link>
              </div>
            )
          })}

          <br />

          <div>
            {previous_page && <Link to={`/p/${previous_page}`}>Prev</Link>}{' '}
            {next_page && <Link to={`/p/${next_page}`}>Next</Link>}
          </div>
        </div>
      )
    } else {
      return (
        <div>
          <Helmet>
            <title>ButterCMS Blog Posts</title>
            <meta name="description" content="ButterCMS blog posts listing" />
          </Helmet>
          Loading...
        </div>
      )
    }
  }
}

export default BlogHome
