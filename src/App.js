// App.js
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "../src/Components/Sidebar";
import Home from "../src/Pages/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Sidebar />
                {/* <Home/> */}
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
