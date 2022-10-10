import {useEffect, useState} from "react"
import Card from "./card";
import Header from "./header";
const PostView = ()=> {
    const [posts, setPosts] = useState([]);
    useEffect(()=> {
        fetch("https://instaclone-project-api.herokuapp.com/post/users").then((res)=>res.json()).then((data)=> {
        setPosts(data);
        }).catch((err)=> {
            if(err) {
                console.log(err)
            }
        })
    }, []);
    return (
        <>
        <Header/>
        <div className="post-container">
            {posts.map((post, i)=> {
                return (
                    <Card post={post} key={i}/>
                )
            })}
        </div>
        </>
       
    )
}
export default PostView;