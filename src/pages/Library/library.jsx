import Uploads from './uploads'
import './library.css'
import DeptViewer from './deptViewer'
import {useNavigate} from 'react-router-dom'


 const Library = () => {
  const nav = useNavigate()

const SearchTabIn = ()=>{
  return (<div className='search' onClick={()=>{nav('/search')}}>
  <input className='searchInput' onClick={()=>{nav('/search')}}  placeholder='search 🔍' type='text' />
  </div>)
}


  return (
    <div className="backg">

      <div className="library">
       <div className="titleblock">
       <h3 className="libTitle">
          Library genesis
        </h3>
        <p className="msg">
        Upload new materials if you have any.
        </p>
       </div>
       <SearchTabIn onClick={()=>{nav('/search')}}/>
       <DeptViewer/>
      
       <Uploads/>
      </div>
    </div>
  )
}
export default Library;