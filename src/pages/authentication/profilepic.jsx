import './authentication.css'
import {useNavigate} from 'react-router-dom'
import Avatar from '@mui/material/Avatar';
import addpic from '../../assets/addpic.png'

 const ProfilePic = () => {
  const nav = useNavigate()
  return (
    <div className='authentication'> 
     <Avatar
        alt="Remy Sharp"
        src={addpic}
        className='pic'
        sx={{ width: 60, height: 60 }}
      >

     </Avatar>
    <p className="title">Set profile pic</p>
    <p className="desc">select an image from gallery</p>
<div className="inputs">

  
</div>

<button className='start' >Update picture</button>
<p className="new"  onClick={()=>{nav('/mainpage')}}><span><u>Skip</u></span></p>
    </div>
  )
}

export default ProfilePic;