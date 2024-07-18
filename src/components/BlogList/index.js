import {Component} from 'react'
import Loader from 'react-loader-spinner'
import BlogItem from '../BlogItem'
import './index.css'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class BlogList extends Component {
  state = {blogItems: [], isActive: true}

  componentDidMount() {
    this.getDetails()
  }

  getDetails = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const datalist = await response.json()
    const updatedlist = datalist.map(eachitem => ({
      id: eachitem.id,
      title: eachitem.title,
      imageUrl: eachitem.image_url,
      avatarUrl: eachitem.avatar_url,
      author: eachitem.author,
      content: eachitem.content,
      topic: eachitem.topic,
    }))
    this.setState({blogItems: updatedlist, isActive: false})
  }

  render() {
    const {blogItems, isActive} = this.state
    return (
      <div className="bloglist-container">
        {isActive ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          blogItems.map(eachblog => (
            <BlogItem eachi={eachblog} key={eachblog.id} />
          ))
        )}
      </div>
    )
  }
}
export default BlogList
