import { useEffect, useState } from "react";
import "./App.css";

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
      console.log(error);
    }
  };

  useEffect(() => {
    getTimeFromAPI();
  }, []);

  return (
    <>
      <h1>Ejemplo APP Fullstack</h1>
      <h2>URL del servidor Render{import.meta.env.VITE_BACKEND_URL}</h2>
      <h3>
        Fecha que traemos desde el servido Backend : {JSON.stringify(date)}
      </h3>
    </>
  );
}

export default App;
