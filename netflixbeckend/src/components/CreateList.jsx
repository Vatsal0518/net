import axios from 'axios'
import React from 'react'

function CreateList() {
    const [title,settitle] =React.useState()
    const [type,settype] =React.useState()
    const [genre,setgenre] =React.useState()
const [moviedata,setmoviedata] = React.useState([])
    React.useEffect(()=>{
        const data =axios.get("http://localhost:8800/api/movies",{headers:{token:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZjgzNWFhM2YzNzc0MTJlZjVkYjY0MCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5Mzk4ODM2M30.hfUx_-nUAFfCS8uxhFa8Rxe1vGOVWV80ZaCZ8ZKAkys"}}).then((e)=>{setmoviedata(e.data)}).catch((e)=>{console.log(e)})

    },[])
    const [data,setdata]= React.useState([])
  
    const ans={title:title,type:type,genre:genre,content:data};
  return (
    <div>
      
        <h2>Create list</h2>

        <div className="movielist">
            <input type="text" name="" id="" placeholder='title' onChange={(e)=>{settitle(e.target.value)}}/>
            <input type="text" name="" id="" placeholder='type'  onChange={(e)=>{settype(e.target.value)}}/>
            <input type="text" name="" id="" placeholder='genre' onChange={(e)=>{setgenre(e.target.value)}}/>
            {moviedata.map((param)=>{
                return <div>
                    {param._id} 
                    : title:{param.title}
                    : type:{param.type}
                    : genre:{param.genre}
                    <button onClick={()=>{
                        setdata([...data, param._id])
                  
                    }}>Add</button>
                </div>
            })}
contents: {data.map((e)=>{
    return <div>
        {e}
    </div>
})}

<button onClick={()=>{
  
            axios.post("http://localhost:8800/api/lists",ans,{headers:{token:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZjgzNWFhM2YzNzc0MTJlZjVkYjY0MCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5Mzk4ODM2M30.hfUx_-nUAFfCS8uxhFa8Rxe1vGOVWV80ZaCZ8ZKAkys"}}).then((e)=>{console.log("scucese")}).catch((e)=>{console.log("erew")})


}}>Upload</button>
        </div>

    </div>
  )
}

export default CreateList