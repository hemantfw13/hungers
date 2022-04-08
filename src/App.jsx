import logo from "./logo.svg";
import "./App.css";
import { RestaurantDetails } from "./Components/RestaurantDetails/RestaurantDetails";
import { Form } from "./Components/Form/Form";
import { Navbar } from "./Components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import { Show } from "./Components/Show/Show";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/form" element={<Form />} />
        <Route path="/" element={<Show />} />
      </Routes>
    </div>
  );
}

export default App;
