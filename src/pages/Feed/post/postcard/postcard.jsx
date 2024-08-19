import ImageCard from "../imagecard";
import TextCard from "../textcard";
import PostInfo from "./postinfo";
import '../../post/posts.css'
import {useNavigate} from 'react-router-dom'
import BookmarkCard from "./bookmarkCard";




 const PostCard = () => {
  const nav = useNavigate()

const Marg = ()=>{
  return (<div className="marg"></div>);
}

  return (
    
    <div className="postCar" onClick={()=>{nav('/view')}}>
        <TextCard/>
        <ImageCard/>
<PostInfo/>
<BookmarkCard/>
<Marg/>
</div>

  )
}
export default PostCard;