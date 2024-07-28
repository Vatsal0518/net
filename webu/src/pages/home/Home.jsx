import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured";
import "./home.scss";
import List from "../../components/list/List";
import React, { useEffect } from "react";
import axios from "axios";
const Home = ({ type }) => {
  const [lists,setlists] = React.useState([]);
  const [genre, setGenre] = React.useState(null);
  React.useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8800/api/lists${type ? "?type=" + type : ""}${
            genre ? "&genre=" + genre : ""
          }`,
          {
            headers: {
              token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZjgzNWFhM2YzNzc0MTJlZjVkYjY0MCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5Mzk4ODM2M30.hfUx_-nUAFfCS8uxhFa8Rxe1vGOVWV80ZaCZ8ZKAkys"
            },
          }
        );
        setlists(res.data);
      
      } catch (err) {
        console.log(err);
      }
    };
    getRandomLists();
  }, [type, genre]);
console.log(type)
  return (
    <div className="home">
      <Navbar />
      <Featured type={type}/>
  {lists.map((lists)=>{
    return <div>
      <List lists ={lists}/>
    </div>
  })}
     
    
    </div>
  );
};

export default Home;
