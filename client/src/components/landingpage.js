import"./landingpage.css";
import{useNavigate} from "react-router-dom"
const Landingpage=()=>{
    const Navigate=useNavigate()
    const handleform=()=>{
        Navigate("/postview")
    }
    return(
        <>
        <div className='wrapper'>
        <img src="https://tse2.mm.bing.net/th?id=OIP.6hWhp4EwU96OuDSZBwAbHgHaJM&pid=Api&P=0&w=122&h=152" alt="new"/>
      <div className="entry">
        <span><h1>10x team</h1><br/>
           <button onClick={handleform}>enter</button></span>
           </div>
        </div>
        </>
    )
}
export default Landingpage