import{useEffect,useState} from "react"
import Axios from "axios"
import './postview.css'
import { useNavigate } from "react-router-dom"

 const Postview=()=>{
    const[userData,setUserData]=useState([]);
    const Navigate=useNavigate()
    const [counter,setcounter]=useState(0);
    useEffect(()=>{
       Axios.get("https://nandasinstacloneserve.herokuapp.com/post/add").then((response)=>{
        const posts=response.data.reverse()
 setUserData(posts)

    }).catch(err=>{
        console.log(err)
       })
    },[]);
   const handleaddpost=()=>{
    Navigate("/form")
   }
    return(
        <>
        <div className="container">
            <header>
                <div className="nav">
            <img className="logo" src="https://tse1.mm.bing.net/th?id=OIP.qlHb5sglyc1j38GqlkwIEQHaEK&pid=Api&P=0&w=309&h=174" alt="logo"/>
            <img className="cam"  onClick={handleaddpost} src="https://tse3.mm.bing.net/th?id=OIP.fNk8c5ZuvHaQoakvtNLZXwHaGD&pid=Api&P=0&w=210&h=171" alt="cam"/>
        </div>
        </header>
        <hr/>
        </div>
        {
            userData.map((user,i)=>{
                const handleLike =()=>{
                    setcounter(counter+1)
                }
    
                return(
                    <div className="post">
                        <div className="userinfo" key="i">
                            <ul>
                        
                       <li className="name">{user.Name}</li>
                       <li>{user.location}</li></ul>
                       <p>...</p>
                    
                        </div>
                    
                            <img alt="new" src={user.postimage}/>
                            <div className="likes">
                                <ul>
                                   <li> <span onClick={handleLike}class="material-symbols-outlined">
favorite
</span><span class="material-symbols-rounded">
                                        rocket
                                    </span></li>
                               <li> {counter}likes</li></ul>
                                <span>{user.Date}</span>
                            </div>
                            
                              <span className="lastone">{user.description}</span>
                            
                    </div>
                )
            })
        }
        </>

    )
 }
 export default Postview