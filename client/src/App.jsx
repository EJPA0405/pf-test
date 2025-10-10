import { useEffect, useState } from "react";
import Home from "./views/Home";
import Login from "./views/Login";
import Register from "./views/Register";
import Cart from "./views/Cart";
import Profile from "./views/Profile";
import Detail from "./views/Detail";
import NotFound from "./views/NotFound";
import Landing from "./views/Landing";
import { Routes, Route } from "react-router-dom";

function App() {
  const [date, setDate] = useState("");
  const apiURL = import.meta.env.VITE_BACKEND_URL;

  const getTimeFromAPI = async () => {
    try {
      let response = await fetch(apiURL + "/hora");
      let data = await response.json();
      let newDate = new Date(data);
      setDate(newDate);
    } catch (error) {
      alert("API no esta funcionando!");
    }
  };

  useEffect(() => {
    getTimeFromAPI();
  }, []);

  return (
    <>
      <h1 className=" text-center text-blue-300">Ejemplo APP Fullstack</h1>
      <h2>URL del servidor Render{import.meta.env.VITE_BACKEND_URL}</h2>
      <h3>
        Fecha que traemos desde el servido Backend : {JSON.stringify(date)}
      </h3>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
