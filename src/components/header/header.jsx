import './header.css';
import logo from '../../assets/logo2.png'
import { useNavigate } from 'react-router-dom';


 const Header = () => {

  const nav = useNavigate()
  return (
    
<div className="header">
   
  <div className="layer">
  <img src={logo} width={130} height={110}/>
  <div className="mainDiv">

<h2 className="headTitle">cadetCentral</h2>
<p className="headPara">Connect, share updates, explore the marketplace, and dive into our e-library. Join us in creating a vibrant, informed, and connected cadet community!</p>
</div>

<button className='signup' onClick={()=>{nav('/signup')}}>Get started</button>
<button className='login' onClick={()=>{nav('/login')}}>Login</button>
  </div>
</div>
    
  )
}

export default Header;