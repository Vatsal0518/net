import React from "react"
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import "./featured.scss";
import axios from "axios"
import { Player } from 'video-react';
export default function Featured({ type }) {
  const [content,setcontent] = React.useState({})
  const [data2,setdata2] = React.useState({})
  console.log( "yout type is "+type)
  React.useEffect(()=>{
    const getRandom = async()=>{
      try{
        axios.get("http://localhost:8800/api/movies/find/653fdf7bddd45b7e02fd9bfc",{headers:{
          token:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZjgzNWFhM2YzNzc0MTJlZjVkYjY0MCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5Mzk4ODM2M30.hfUx_-nUAFfCS8uxhFa8Rxe1vGOVWV80ZaCZ8ZKAkys"
        }}).then((res)=>{console.log(res); setdata2(res.data)}).catch((e)=>{console.log(e)})
       
        const res = await axios.get(`http://localhost:8800/api/movies/random?type=${type}`,{
          headers:{
            token:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZjgzNWFhM2YzNzc0MTJlZjVkYjY0MCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5Mzk4ODM2M30.hfUx_-nUAFfCS8uxhFa8Rxe1vGOVWV80ZaCZ8ZKAkys"
          }
        });
        setcontent(res.data[0]);
   
console.log(data2)
      }
      catch(e)
      {
        console.log(e);
      }
    }
    getRandom();
  },[type])
  return (
    
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movie" ? "Movies" : "Series"}</span>
          <select name="genre" id="genre">
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
      {/* <img
      src={content.img}
        alt=""
      /> */}
      <video className="videoedit" src={data2.video} autoPlay={true} loop></video>
     

      <div className="info">
        {/* <img
        src={content.imgSm}
          alt=""
        /> */}
        {/* <span className="desc">
         {content.desc}
        </span> */}
        <div className="buttons">
          <button className="play">
            <PlayArrowIcon/>
            <span>Play</span>
          </button>
          <button className="more">
            <InfoOutlinedIcon />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
}
