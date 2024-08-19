import './boards.css';

const Channelsboard = () => {


const Channel = ()=>{
    return (<div className='channel'>
<p>education</p>
    </div>)
}



  return (
    <div className="channelBorder">
      <div className='channels'>
        <p className="channelTitle">channelsboard
        </p>
        <div className="channelsList">
            <Channel/>
            <Channel/>
            <Channel/>
            
        </div>
    </div>
    </div>
  )
}

export default Channelsboard;