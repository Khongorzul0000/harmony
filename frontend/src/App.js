import { Signup, Login, Home, MyAccount, PlaylistPage } from "./pages";
import { Songlist, Sidebar, Default } from "./component";
import { Routes, BrowserRouter, Route } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Sidebar />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/my-account" element={<MyAccount />} />
          <Route path="/song" element={<Songlist />} />
          <Route path="/pp" element={<PlaylistPage />} />
          <Route path="/rec" element={<Default />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
