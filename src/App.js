import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Shop from "./pages/Shop";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/shop/all" element={<Shop/>}/>
      </Routes>
    </div>
  );
}

export default App;
