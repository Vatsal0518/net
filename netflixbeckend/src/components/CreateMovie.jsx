import react from 'react'
import './CreateMovie.css'
import axios from 'axios';
import { imagedb } from '../firebase';
import { getDownloadURL, listAll, ref, uploadBytes } from 'firebase/storage';

import { v4 } from 'uuid';
function CreateMovie() {

    const [title,settitle] = react.useState();
    const [desc,setdesc] = react.useState();
    const [image,setimage] = react.useState();
    const [imagetitle,setimagetitle] = react.useState();
    const [imagesm,setimagesm] = react.useState();
    const [tariler,settarler] = react.useState();
    const [video,setvideo] = react.useState();
    const [year,setyear] = react.useState();
    const [limit,setlimit] = react.useState();
    const [genre,setgenre] = react.useState();
    const [isSeries,setisSeries] = react.useState();
    const[imageStatus,setimagestatus]= react.useState()
    const[imagesmStatus,setimagesmstatus]= react.useState()
    const[trailerstatus,settrailerstatus]= react.useState()
    const[videostatus,setvideostatus]= react.useState()

  const [newimage,setnewimage]= react.useState()
  const [newimageSm,setnewimageSm]= react.useState()
  const [newTrailer,setnewtrailer]= react.useState()
  const [newvideo,setnewvideo]= react.useState()
const handleUpload=async()=>{
   const imgRef=  ref(imagedb,`Fil/${v4()}`)
  
    await uploadBytes(imgRef,image);
    try{
   const data = await getDownloadURL(imgRef);
   setnewimage(data)
   setimagesmstatus("image uploaded succesfullly")

    }
    catch(e)
    {
        console.log(e);
    }

}
const handleUploadVideo=async()=>{
    const imgRef=  ref(imagedb,`Fil/${v4()}`)
   
     await uploadBytes(imgRef,video);
     try{
    const data = await getDownloadURL(imgRef);
    setnewvideo(data)
   setvideostatus("video uloaded successfully")
 
     }
     catch(e)
     {
         console.log(e);
     }
 
 }
const handleUploadSm=async()=>{
    const imgRef=  ref(imagedb,`Fil/${v4()}`)
   
     await uploadBytes(imgRef,imagesm);
     try{
    const data = await getDownloadURL(imgRef);
    console.log("imagesm done")
    setimagesmstatus("imagesm uploaded sucessfully")
    setnewimageSm(data)
 
     }
     catch(e)
     {
         console.log(e);
     }
 
 
   
 }
 const handleUploadTrailer=async()=>{
    const imgRef=  ref(imagedb,`Fil/${v4()}`)
   
     await uploadBytes(imgRef,tariler);
     try{
    const data = await getDownloadURL(imgRef);
    settrailerstatus("trailer uploaded succesfully")
    setnewtrailer(data)
 
     }
     catch(e)
     {
    
        console.log(e);
     }
 
 
   
 }
  
const data={
    
    title:title,
    desc:desc,
    img:newimage,
    imgTitle:imagetitle,
    imgSm:newimageSm,
    trailer:newTrailer,
    video:newvideo,
    year:year,
    limit:limit,
    genre:genre,
    isSeries:isSeries
}


  return (
    <div>
        <div className="container1">
           
            <div className="Input">
                <input type="text" name="" id="" placeholder='title'  onChange={(e)=>{ settitle(e.target.value)}}/>
            </div>
            <div className="Input">
                <input type="text" name="" id="" placeholder='description' onChange={(e)=>{setdesc(e.target.value)}}/>
            </div>
            <div className="Input">
             <label htmlFor="">Choose image</label><input type="file" name='file1' accept="image/*" onChange={(e)=>{setimage(e.target.files[0])}}/>
            </div>
            <div className="Input">
                <input type="text" name="" id="" placeholder='Image title' onChange={(e)=>{setimagetitle(e.target.value)}}/>
            </div>
            <div className="Input">
             <label htmlFor="">Choose imageSM</label><input type="file" name="file2" id="imageUpload" accept="image/*"onChange={(e)=>{setimagesm(e.target.files[0])}}/>
            </div>
            <div className="Input">
             <label htmlFor="">Choose Video</label><input type="file"   accept="video/*"onChange={(e)=>{setvideo(e.target.files[0])}}/>
            </div>
            <div className="Input">
             <label htmlFor="">Choose trailer</label><input type="file"  accept="video/*"onChange={(e)=>{settarler(e.target.files[0])}}/>
            </div>
            <div className="Input">
                <input type="text" name="" id="" placeholder='Year'onChange={(e)=>{setyear(e.target.value)}}/>
            </div>
            <div className="Input">
                <input type="text" name="" id="" placeholder='limit'onChange={(e)=>{setlimit(e.target.value)}}/>
            </div>
            <div className="Input">
                <input type="text" name="" id="" placeholder='Genre'onChange={(e)=>{setgenre(e.target.value)}}/>
            </div>
            <div className="Input">
                <input type="text" name="" id="" placeholder='isSeries'onChange={(e)=>{setisSeries(e.target.value)}}/>
            </div>
            <button onClick={()=>{handleUpload();handleUploadSm();handleUploadTrailer();handleUploadVideo()}}>upload images</button>
            {imageStatus},{imagesmStatus},{trailerstatus},{videostatus}
            <div className="Input">
                <button onClick={()=>{
                
                    axios.post("http://localhost:8800/api/movies",data,{
                        headers:{
                            token:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZjgzNWFhM2YzNzc0MTJlZjVkYjY0MCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5Mzk4ODM2M30.hfUx_-nUAFfCS8uxhFa8Rxe1vGOVWV80ZaCZ8ZKAkys"
                        }
                    }).then((res)=>{console.log(res)}).catch((e)=>{console.log(e)})
                }}>Upload</button>
            </div>
          
        </div>
      
    </div>
  )
}

export default CreateMovie