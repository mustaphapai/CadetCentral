import PageCard from "./pagecard";
import './page.css'
 const Page = () => {
  return (
    <div className="backg">

    <div className="library">
     <div className="titleblock">
     <h3 className="libTitle">
       Explore channels
      </h3>
      <p className="msg">
      channels connect regulars with similar interests
      </p>
     </div>
    
<div className="pageGrid">
<div className="grid1" >
    <p>➕</p>
    <PageCard channelName={'create channel '} />
</div>
<div className="grid">
    <PageCard channelName={'History bites'}/>
</div>
<div className="grid">
    <PageCard channelName={'Elephant Family'}/>
</div>
<div className="grid">
    <PageCard channelName={'Internet leftovers'}/>
</div>








<div className="grid">
    <PageCard channelName={'Crypto house'}/>
</div>
<div className="grid">
    <PageCard channelName={'Anime.'}/>
</div>


</div>

    </div>
  </div>
  )
}

export default Page;