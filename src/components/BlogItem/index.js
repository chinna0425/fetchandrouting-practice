import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {eachi} = props
  const {id, title, imageUrl, avatarUrl, author, topic} = eachi
  return (
    <Link to={`/blogs/${id}`} className="blogItem-container">
      <img src={imageUrl} className="blogItemImage" alt="title" />
      <div className="text-contianer">
        <p className="blogItem-para">{topic}</p>
        <h1 className="blogItem-heading">{title}</h1>
        <div className="blogItem-author-align">
          <img src={avatarUrl} className="blogItem-avatar" alt="avatar" />
          <p className="blogItem-para">{author}</p>
        </div>
      </div>
    </Link>
  )
}
export default BlogItem
