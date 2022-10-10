import "./form.css"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
const Form = () => {
    let navigate=useNavigate()
    const [path,setPath]=useState("")
    const [data,setData]=useState({
        name:"",location:"",description:"",postImage:"",date:""
    })
    let name,value
    let base64path
    const handleInputs=(e)=>{
        name=e.target.name;
        value=e.target.value;
        setData({...data,[name]:value})
        console.log(data)
    }
    const handlefile=async (e)=>{
        base64path=await fileTobase64(e.target.files[0])
        setData({...data,postImage:base64path})
        setPath(e.target.files[0])
    }
    const handleUserAdd = async(e)=>{
        e.preventDefault()
        const {name,location,description,postImage}=data
        await fetch("https://instaclone-project-api.herokuapp.com/post/user",{
            method:"post",
            headers : {
                "Content-Type": "application/json"
              },
              body : JSON.stringify({
                postImage:postImage,name:name, location:location, description:description
          })
           }).then(()=>{
           navigate("/post-view")
           })  
    }
    const fileTobase64 = (file) =>{
        return new Promise((resolve, reject)=>{
          const reader = new FileReader(file)
          reader.readAsDataURL(file)
          reader.onload = ()=>{
            resolve(reader.result)
          }
          reader.onerror = (err)=>{
            reject(err)
          }
        })
      }
    return (
        <form id="form" onSubmit={handleUserAdd}>
        <div className="input-1">
        <input type="text" name="file-location"  value={path.name} placeholder="no of file choosen"/>
        <label for="files">Browse</label>
        <input id="files" hidden type="file" onChange={handlefile}/>        </div>
        <div className="input-2">
        <input type="text" name="author" placeholder="Author" onChange={handleInputs} />
        <input type="text" name="location" placeholder="location" onChange={handleInputs} />
        </div>
        <input type="text" name="description" placeholder="description"className="input-3" onChange={handleInputs} value={name}/>
        <div className="btn" type="submit"><button>Post</button></div>

        </form>
    )
}
export default Form