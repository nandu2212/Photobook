import React from "react";
import { useState} from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import "./form.css"

const Postaldetails=()=>{
    const Navigate=useNavigate()
const [values,setvalue]=useState({
    Name:"",
    location:"",
    description:"",
   basefile:""
})
const handlelocationchange=(e)=>{
    setvalue({...values,location:e.target.value})
}
const handlenamechange=(e)=>{
    setvalue({...values,Name:e.target.value})
}
const handledescriptionchange=(e)=>{
    setvalue({...values,description:e.target.value})
}
const convertBase64 =(file)=>{
    return new Promise((resolve,reject)=>{
        const fileReader=new FileReader()
        fileReader.readAsDataURL(file)

        fileReader.onload=()=>{
            resolve(fileReader.result)
        }
        fileReader.onerror=(error)=>{
            reject(error)
        }
    })
}
const saveFile= async (e)=>{
   const file=e.target.files[0];
   const base64=await convertBase64(file);
   console.log(base64)
   setvalue({...values,basefile:base64});

      }
const handlepostadd=(e)=>{
    e.preventDefault();
    Axios.post("https://nandasinstacloneserve.herokuapp.com/post",values).then((res)=> {
        console.log(res)
    }).catch((err)=> {
        console.log(err)

    })
    Navigate("/postview")
};
   
return(
    <div>
        <header>
             <div className="nav">
            <img className="logo" src="https://tse1.mm.bing.net/th?id=OIP.qlHb5sglyc1j38GqlkwIEQHaEK&pid=Api&P=0&w=309&h=174" alt="logo"/>
            <img className="cam" src="https://tse3.mm.bing.net/th?id=OIP.fNk8c5ZuvHaQoakvtNLZXwHaGD&pid=Api&P=0&w=210&h=171" alt="cam"/>
        </div>
        </header>
        <form>
            <div className="form">
<div>
            <input type="file" onChange={saveFile}/>
        
            </div>
            <div>
            <input onChange={handlenamechange} value={values.Name} placeholder="author"/>
            <input onChange={handledescriptionchange} value={values.description} placeholder="Description"/>
            <input onChange={handlelocationchange} value={values.location} placeholder="location"/>
        </div></div></form>
        <button type="submit" onClick={handlepostadd}>Post</button>
    </div>
)
}

export default Postaldetails;