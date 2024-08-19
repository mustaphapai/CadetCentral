import '../posts.css'
import { AvatarGenerator } from 'random-avatar-generator';
import BookmarkAddOutlinedIcon from '@mui/icons-material/BookmarkAddOutlined';
 const BookmarkCard = () => {
  const generator = new AvatarGenerator();
  return (
<div className="book">
<div className="bookmark" onClick={()=>{alert('bookmarked')}}>
    
    <BookmarkAddOutlinedIcon color='white' size='lg' sx={'margin-right:20px;background-color:purple;color:white;padding:6px; border-radius:13px;'}/>

    <p className="postBy">cicada33 <span><img src={generator.generateRandomAvatar()} width={18} height={18}/> </span> <span className="pageName"> @ myths page</span></p>
     
    </div>
    <p className="date">20|02|24</p>
</div>
  )
}

export default BookmarkCard;