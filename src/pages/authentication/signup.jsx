import './authentication.css'
import logo from '../../assets/logo2.png'
import {useNavigate} from 'react-router-dom'

 const Signup = () => {
    const nav = useNavigate()
  return (
    <div className='authentication'> 
      <img src={logo} width={100} height={80}/>
    <p className="title">Welcome to cadetCentral</p>
    <p className="desc">Sign Up to continue</p>
<div className="inputs">
    <input className='input' placeholder='Email' type='email'/>
    <input className='input' placeholder='Password' type='password' />
</div>
<p className=""  onClick={()=>{nav('/forgot')}}>forgot password?, <span><u> continue here</u></span></p>
<button className='start' onClick={()=>{nav('/update')}}>Sign Up</button>
<p className="new" onClick={()=>{nav('/login')}}>Already Registered?, <span><u>login to continue</u></span></p>
    </div>
  )
}

export default Signup;