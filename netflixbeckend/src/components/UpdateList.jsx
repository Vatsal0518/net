import axios from 'axios';
import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

function UpdateList() {
    const data= useParams()
    const location = useLocation();
    const moviedata = location.state.some;
    const[movies,setmovies] = React.useState([])
    const [title,settitle]= React.useState()
    const [type,setype]= React.useState()
    const [genre,setgenre]= React.useState()
    React.useEffect(()=>{
         axios.get("http://localhost:8800/api/movies",{
            headers:{
              token:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZjgzNWFhM2YzNzc0MTJlZjVkYjY0MCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5Mzk4ODM2M30.hfUx_-nUAFfCS8uxhFa8Rxe1vGOVWV80ZaCZ8ZKAkys"
            }
          }).then((res)=>{setmovies(res.data)}).catch((e)=>{console.log(e)})
    },[1])

    
    
    const [newmovies,setnewmovies] = React.useState(moviedata)
    
    
    
  return (
    <div>
        UpdateList
        <h3>Movie List id : {data.id}</h3>
       <h3> movies already present in the list: </h3>
        {moviedata.map((e)=>{
            return <div>
                {e}
            </div>
        })}

<h2>update List</h2>
<div className="containermovielist">
    <input type="text" name="" id="" placeholder='title' onChange={(e)=>{settitle(e.target.value)}}/>
</div>
<div className="containermovielist">
    <input type="text" name="" id="" placeholder='list type'onChange={(e)=>{setype(e.target.value)}}/>
</div>
<div className="containermovielist">
    <input type="text" name="" id="" placeholder='genre'onChange={(e)=>{setgenre(e.target.value)}}/>
</div>
<h4>New movies to be added</h4>
{movies.map((e)=>{
    return <div>
        title: {e.title}
        : id:{e._id}
        <button onClick={()=>{setnewmovies([...newmovies,e._id])}}>Add</button>
    </div>
})}

<button onClick={()=>{
    axios.put("http://localhost:8800/api/lists/"+data.id,{title:title,type:type,genre:genre,content:newmovies},{
         
    headers: {
        token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZjgzNWFhM2YzNzc0MTJlZjVkYjY0MCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5Mzk4ODM2M30.hfUx_-nUAFfCS8uxhFa8Rxe1vGOVWV80ZaCZ8ZKAkys"
      },
}).then((res)=>{console.log(res)}).catch((E)=>console.log(E))
}}>upload</button>
    </div>
  )
}

export default UpdateList