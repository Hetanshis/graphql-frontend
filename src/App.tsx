import { BrowserRouter, useRoutes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/navbar";

import { Routes } from "./route";

function App() {
  const element = useRoutes(Routes);
  return (
    <div>
      <NavBar />
      {element}
    </div>
  );
}

export default App;
