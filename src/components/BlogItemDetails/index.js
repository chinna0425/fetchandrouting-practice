import {Component} from 'react'
import './index.css'

class BlogItemDetails extends Component {
  state = {blogI: {}}

  componentDidMount() {
    this.getEachBlog()
  }

  getEachBlog = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const resdata = await response.json()
    const updated = {
      id: resdata.id,
      title: resdata.title,
      imageUrl: resdata.image_url,
      avatarUrl: resdata.avatar_url,
      author: resdata.author,
      content: resdata.content,
      topic: resdata.topic,
    }
    this.setState({blogI: updated})
  }

  render() {
    const {blogI} = this.state
    const {id, title, imageUrl, avatarUrl, author, topic, content} = blogI
    return (
      <div className="BlogDetails-container">
        <div className="innerBlogDetails-container">
          <h1 className="blogdetailheading">{title}</h1>
          <div className="blogDetailsAvatar-container">
            <img src={avatarUrl} className="blogItem-avatar" alt="avatar" />
            <p className="blogdetailspara1">{author}</p>
          </div>
          <img src={imageUrl} className="blogDetailsImage" alt="title" />
          <p className="blogdetailpara2">{content}</p>
        </div>
      </div>
    )
  }
}
export default BlogItemDetails
