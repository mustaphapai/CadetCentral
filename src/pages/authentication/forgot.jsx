import './authentication.css'
import logo from '../../assets/logo2.png'
import {useNavigate} from 'react-router-dom'

 const Forgot = () => {
  const nav = useNavigate()
  return (
    <div className='authentication'> 
      <img src={logo} width={100} height={80}/>
    <p className="title">Forgot Password?</p>
    <p className="desc">Recover your password</p>
<div className="inputs">
    <input className='input' placeholder='Email' type='email'/>
  
</div>

<button className='start' >Send recovery email</button>
<p className="new"  onClick={()=>{nav('/login')}}>Not Signed Up?, <span><u> continue here</u></span></p>
    </div>
  )
}

export default Forgot;