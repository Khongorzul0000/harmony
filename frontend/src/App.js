import { Navbar, Song } from "./component";
import { Routes, BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <div>
      <section>
        <Routes>
          <Route path="/" element={<Navbar/>}/>
          <Route path="/s" element={<Song/>}/>
        </Routes>
      </section>
    </div>
  </BrowserRouter>
  );
}

export default App;
