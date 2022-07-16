// import logo from "./logo.svg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Authentication from "./pages/Authentication";

function App() {
  return (
    <>
      <Router>
        <div className="container">
          <Routes>
            <Route path="/authentication" element={<Authentication />} />
          </Routes>
        </div>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
