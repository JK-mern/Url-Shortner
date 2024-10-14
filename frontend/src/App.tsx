import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage";
import Redirect from "./components/Redirect";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element= {<Homepage />}></Route>
        <Route path="/:url" element= {<Redirect />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
