import React from 'react'
import './Movies.css'
import axios from 'axios'
import react from 'react'
import { Link, Navigate } from 'react-router-dom';
import UpdateM from '../UpdateM';
function Movies() {
    const [movies,setmovies]= react.useState([]);
   
react.useEffect(()=>{
    const data1 = axios.get("http://localhost:8800/api/movies", {
        headers: {
          token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZjgzNWFhM2YzNzc0MTJlZjVkYjY0MCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5Mzk4ODM2M30.hfUx_-nUAFfCS8uxhFa8Rxe1vGOVWV80ZaCZ8ZKAkys"
        },
      }).then((res)=>{
setmovies(res.data);
    }).catch((e)=>console.log(e));

},[])



   

  return (
    <div>
 
        {movies.map((prop)=>{
 
 
            return  <div className="container">
              
       
     
          <div className="elements"><h5>id:</h5>{prop._id}</div>
          <div className="elements"><h5>title:</h5>{prop.title}</div>
          <div className="elements"><h5>description:</h5>{prop.desc}</div>
          <div className="elements"><h5>image:</h5><img src={prop.img} width={400} height={400} alt="" /></div>
          <div className="elements"><h5>imageTitle</h5>{prop.imgTtile}</div>
          <div className="elements"><h5>imgSm:{prop.imgSm}</h5><img src={prop.imgSm} alt="no" /></div>
          <div className="elements"><h5>Trailer:</h5>{prop.trailer}</div>
          <div className="elements"><h5>video:</h5>{prop.video}</div>
          <div className="elements"><h5>year:</h5>{prop.year}</div>
          <div className="elements"><h5>limit:</h5>{prop.limit}</div>
          <div className="elements"><h5>genre:</h5>{prop.genre}</div>
          <div className="elements"><h5>isSeries:</h5>{prop.isSeries?"true":"false"}</div>
          <Link  ><button onClick={()=>{
           
         
     
                        
axios.delete("http://localhost:8800/api/movies/"+prop._id,{
  headers:{
    token:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZjgzNWFhM2YzNzc0MTJlZjVkYjY0MCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5Mzk4ODM2M30.hfUx_-nUAFfCS8uxhFa8Rxe1vGOVWV80ZaCZ8ZKAkys"
  }
}).then((e)=>{console.log(e)}).catch((e)=>console.log(e));




          }}>delete</button></Link> <Link to={`/movies/${prop._id}`}><button>update</button></Link>
   
            </div>
        })}
     
    </div>
  )
}

export default Movies