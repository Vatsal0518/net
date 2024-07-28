import "./app.scss"
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import Watch from "./pages/watch/Watch";
import Login from "./pages/login/Login";
import {BrowserRouter,Routes,Route,Switch, redirect,useNavigate} from "react-router-dom"

const App = () => {
  
  const user = true;

  return (
    <BrowserRouter>
    <Routes>
    <Route  path="/login" element={<Login/>}/>
    <Route  path="/register" element={<Register/>}/>
<Route exact path= "/" element={user?<Home/>:<Register/>}/>
{user&&(
<>
      <Route path="/movies" element={<Home type ="movie"/>}/>
      <Route path="/series" element={<Home type="Series"/>}/>
      <Route path="/watch" element={<Watch/>}/>
      </>
)
}
    </Routes>
    </BrowserRouter>
    
 );
};

export default App;