import { useSelector } from "react-redux";
import "./App.css"
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Auth from "./pages/auth/Auth";
import { Navigate, Route, Routes } from "react-router-dom";

function App() {
  const user=useSelector((state)=>state.auth.authData)
  return (
    <div className="App">
        <div className="blur" style={{top:'-18%', right:'0'}}></div>
        <div className="blur" style={{top:'36%', left:'-8rem'}}></div>
        {/* <Home /> */}
        {/* <Profile /> */}
        {/* <Auth /> */}
        <Routes>
          <Route path="/" element={user?<Navigate to="home" />:<Navigate to="auth" />} />
          <Route path="/home" element={user?<Home />:<Navigate to="../auth" />} />
          <Route path="/auth" element={user?<Navigate to="../auth" />:<Home />} />


          <Route path="/profile" element={<Profile />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    </div> 
  );
}

export default App;
