import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const apiURL = import.meta.env.VITE_BACKEND_URL;

  const getTimeFromAPI = async () => {
    try {
      let response = await fetch(apiURL + "/hora");
      return;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {}, []);

  return (
    <>
      <h1>Vite + React</h1>
      <h2>{import.meta.env.VITE_BACKEND_URL}</h2>
    </>
  );
}

export default App;
