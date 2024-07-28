import axios from 'axios';
import React from 'react'
import {Link} from "react-router-dom"
function MoviesList() {

  const [movielist,setmovielist] = React.useState([]);
  React.useEffect(()=>{
    const res = axios.get("http://localhost:8800/api/lists",{
      headers:{
        token:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZjgzNWFhM2YzNzc0MTJlZjVkYjY0MCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5Mzk4ODM2M30.hfUx_-nUAFfCS8uxhFa8Rxe1vGOVWV80ZaCZ8ZKAkys"
      }
    }).then((res)=>{setmovielist(res.data)}).catch((e)=>{console.log(e)})
  },[])
  
  return (
    <div>
      {movielist.map((prop)=>{
        return <div>
           list id: {prop._id}
          <br/>
          list title : {prop.title}<br/>
         list type:  {prop.type}<br/>
          list genre: {prop.genre}<br/>
          <div className="ids">
            <b> movie id:</b>
          {prop.content.map((p)=>{

            return <div>
              {p} 
            </div>
          })}
          <button onClick={()=>{
            axios.delete("http://localhost:8800/api/lists/"+prop._id,{headers:{token:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZjgzNWFhM2YzNzc0MTJlZjVkYjY0MCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5Mzk4ODM2M30.hfUx_-nUAFfCS8uxhFa8Rxe1vGOVWV80ZaCZ8ZKAkys"}}).then((e)=>{console.log(e)}).catch((e)=>{console.log(e)})
          }}>delete</button>
          <Link  to={`/lists/${prop._id}`} state={{some:prop.content}}><button>Update</button></Link>
          <br />
          </div>
         
        </div>
      })}
        
    </div>
  )
}

export default MoviesList