import './authentication.css'
import logo from '../../assets/logo2.png'
import {useNavigate} from 'react-router-dom'

 const Update = () => {
  const nav = useNavigate()
  return (
    <div className='authentication'> 
      <img src={logo} width={100} height={80}/>
    <p className="title">Update Details</p>
    <p className="desc">Lets get to know you</p>
<div className="inputs">
    <input className='input' placeholder='Username (required)' type='name' required/>
    <input className='input' placeholder='Phone no. (optional)' type='phone' />
    <input className='input' placeholder='Regular Course(optional)' type='name'/>
    <input className='input' placeholder='Department(optional)' type='name'/>
    <input className='inputBox' placeholder='Interests /hobbies (optional)' type='name'/>
    <input className='inputBox' placeholder='Short bio (optional)' type='name'/>
  
  
</div>

<button className='start' >Update info</button>
<p className="new"  onClick={()=>{nav('/login')}}>Not Signed Up?, <span><u> continue here</u></span></p>
    </div>
  )
}

export default Update;