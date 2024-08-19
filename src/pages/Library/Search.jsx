
import './library.css'




 const Search = () => {

const SearchTab = ()=>{
  return (
    <div className=''>
  <input className='searchScreenInput' autoFocus placeholder='search library' type='text' />
 
  </div>)
}


  return (
    <div className="background">

      <div className="library">
       <div className="titleblock">
       <h3 className="libTitle">
          Search documents
        </h3>
        
       </div>
       <SearchTab/>
       
      </div>
    </div>
  )
}
export default Search;