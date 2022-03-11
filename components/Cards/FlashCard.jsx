import React,{useState,useEffect} from 'react'
// import './fcard.css'
import Dp from './../../public/assets/pushpa.jpeg'
const FlashCard = (props) => {
  const [yc, setYc] = useState()
  const [ani, setAni] = useState("")
  
  function handeler(){
    console.log(props.data)
    setAni("ani")
    setTimeout(()=>{
      props.setter((props.val+1)%4)
      setAni("")
    },500)
    console.log(props.val)
    console.log(props.data)
  }
  useEffect(() => {
    setYc(props.data.year)
  }, [props.val])
  
  function render(c){
   return <li>{c}</li>
  }
  const yearCode=['#FF8E00','#84DFFF','#1AC0A2','#8F44FD']
  return (
    <div style={{marginTop:'10%',backgroundColor:'white'}}>
    {/* {renderer()} */}
   <div class="marquee">
  <div>
    <span>Python workshop on 18th march by microsoft student ambassadors</span>
    <span>Python workshop on 18th march by microsoft student ambassadors</span>
  </div>
</div>
{/* {alert("year = "+props?.data.year)} */}
{/* {alert("yc = "+yc)} */}
    <div className={`main-card ${ani} ` } style={{border:'5px solid'+yearCode[yc-1], boxShadow:'0px 0px 40px 0px'+yearCode[yc-1]}}>
        <div className='photo'>
        {/* {console.log(props.data.dp.default.src)} */}
            <img src={props?.data?.dp?.default.src}  alt=''/>
            <div>
         <h1 style={{display:'inline',marginLeft:'5%',fontWeight:'400'}}>Name: </h1>
         <span style={{fontSize:'1.5em'}}>{props?.data?.name}</span>
         <br/>
         <h1 style={{display:'inline',marginLeft:'5%',fontWeight:'400'}}>From: </h1>
         <span style={{fontSize:'1.5em'}}>{props?.data?.from}</span>
         <br/>
         <h1 style={{display:'inline',marginLeft:'5%',fontWeight:'400'}}>Branch: </h1>
         <span style={{fontSize:'1.5em'}}>{props?.data?.branch}</span>
         <br/>
         <h1 style={{display:'inline',marginLeft:'5%',fontWeight:'400'}}>Year: </h1>
         <span style={{fontSize:'1.5em'}}>{props?.data.year}</span>
         <br/>
         <h1 style={{display:'inline',marginLeft:'5%',fontWeight:'400'}}>Spotify: </h1>
         <span style={{fontSize:'1.5em'}}>spotify.coms</span>
        </div>
        </div>
        
        <div className='content-container'>
        <div className='inC' style={{display:'flex',wordWrap:'break-word',flexDirection:'column',whiteSpace:'pre-line',overflow:'hidden'}}>
         <h1>About:</h1>
         <p>{props.data.about}</p>
        </div>
        <div className='inC' style={{display:'flex',wordWrap:'break-word',flexDirection:'column',whiteSpace:'pre-line',overflow:'hidden',}}>
         <h1>Common Intrests:</h1>
         <ul>
           {props.data.common!=undefined&&props.data.common.map(c=>{return <li>{c}</li>})}
         </ul>
        </div>
        <div className='inC' style={{display:'flex',wordWrap:'break-word',flexDirection:'column',whiteSpace:'pre-line',overflow:'hidden',}}>
         <h1>Other Intrests:</h1>
         <ul>
         {props.data.other!=undefined&&props.data.other.map(c=>{return <li>{c}</li>})}
         </ul>
        </div>
        <div style={{display:'flex',position:'absolute',bottom:'0',left:'30%'}}>

        <div className='btn' style={{backgroundColor:'#1AC0A2'}}>
         <p>
         View profile
         </p>
         </div>
         <div className='btn' style={{backgroundColor:'#F14962'}} onClick={handeler}>
         <p>
         Next
         </p>
         </div>
        </div>
        </div>
        </div>
    </div>
   
    
  )
}

export default FlashCard    