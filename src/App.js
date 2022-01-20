import './App.css';
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom"; //add Link if needed
import Veganism from "./Veganism";
import Trees from "./Trees";
import Donations from "./Donations";
import Pollution from "./Pollution";
import Ecofriendly from "./Ecofriendly";
import Sidebar from "./Sidebar";
import Home from "./Home";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="veganism" element={<Veganism />} />
      <Route path="trees" element={<Trees />} />
      <Route path="donations" element={<Donations />} />
      <Route path="pollution" element={<Pollution />} />
      <Route path="ecofriendly" element={<Ecofriendly />} />
    </Routes>
    <div className="App">
      
<Sidebar />

    </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
