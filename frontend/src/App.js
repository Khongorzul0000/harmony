import { Navbar, Playlist , Sidebar, Playcard, Addpopup} from "./component";
import { Home, Login, MyAccount, Signup } from "./pages";
import { Routes, BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <div>
      <section>
        <Routes>
          <Route path="/" element={<Navbar/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/play" element={<Playlist/>}/>
          <Route path="/side" element={<Sidebar/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/sign" element={<Signup/>}/>
          <Route path="/card" element={<Playcard/>}/>
          <Route path="/add" element={<Addpopup/>}/>
          <Route path="/my" element={<MyAccount/>}/>
        </Routes>
      </section>
    </div>
  </BrowserRouter>
  );
}

export default App;
