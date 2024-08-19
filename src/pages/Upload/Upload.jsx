import './Upload.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'; 
import { AvatarGenerator } from 'random-avatar-generator';
import PermMediaIcon from '@mui/icons-material/PermMedia';
import img1 from '../../assets/img1.jpg'
 const Upload = () => {
    const generator = new AvatarGenerator();

const Unav = ()=>{
    return (<div className='unav'>
<ArrowBackIcon/>
<p className="uNavTitle">New Post</p>
<button className="uploadBtn">post</button>
    </div>)
}


const MediaItem = ()=>{
  return (<div className='mediaItem'>


<div className="postLayer">
<img src={img1} className='imgItem' />
<div className="delete"></div>
</div>




  </div>)
}


const MediaItems = ()=>{
  return (<div className='mediaItems'>
<MediaItem/>
<MediaItem/>
<MediaItem/>


  </div>)
}


const UserDetails = ()=>{
    return (<div className='userDetails'>
        <div className='userItems'><div className="profilePic"><img src={generator.generateRandomAvatar()} width={32} height={32}/>
        </div>
        <select className="channelPath">

        <option value="dave">general</option>
    <option value="pumpernickel">History</option>
    <option value="reeses">biochemistry</option>
        </select></div>
<div className="media">
  <PermMediaIcon/>
</div>
    </div>)
}

const TextBox = ()=>{
  return (<div>

    <textarea className='textBox'>

    </textarea>
  </div>)
}




  return (
    <div className='upload'>
<Unav/>
<UserDetails/>
<MediaItems/>
<TextBox/>
    </div>
  )
}


export default Upload;